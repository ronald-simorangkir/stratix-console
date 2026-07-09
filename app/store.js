/* STRATIX — penyimpanan lokal & gerbang sesi
   - STX_STORE : persistensi case + hasil analisis via IndexedDB (kapasitas besar, di user-data mesin)
   - STX_AUTH  : gerbang login/daftar LOKAL (bukan batas keamanan sejati; single-user desktop)
   Catatan governance: auth lokal ini adalah lapisan sesi/personalisasi. Keamanan & SSO
   sejati memerlukan registrasi OAuth (Client ID) + backend. */
(function () {
  "use strict";

  /* ---------------- IndexedDB key-value ---------------- */
  var DB = "stratix", STORE = "kv", VER = 1;
  function open() {
    return new Promise(function (res, rej) {
      var r = indexedDB.open(DB, VER);
      r.onupgradeneeded = function () {
        var db = r.result;
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
      };
      r.onsuccess = function () { res(r.result); };
      r.onerror = function () { rej(r.error); };
    });
  }
  function idbGet(key) {
    return open().then(function (db) {
      return new Promise(function (res, rej) {
        var tx = db.transaction(STORE, "readonly").objectStore(STORE).get(key);
        tx.onsuccess = function () { res(tx.result); };
        tx.onerror = function () { rej(tx.error); };
      });
    });
  }
  function idbSet(key, val) {
    return open().then(function (db) {
      return new Promise(function (res, rej) {
        var tx = db.transaction(STORE, "readwrite");
        tx.objectStore(STORE).put(val, key);
        tx.oncomplete = function () { res(true); };
        tx.onerror = function () { rej(tx.error); };
      });
    });
  }

  window.STX_STORE = {
    get: idbGet,
    set: idbSet,
    loadCases: function () {
      return idbGet("cases").then(function (v) { return Array.isArray(v) ? v : null; }).catch(function () { return null; });
    },
    saveCases: function (arr) {
      try { return idbSet("cases", JSON.parse(JSON.stringify(arr || []))); }
      catch (e) { return Promise.resolve(false); }
    },
  };

  /* ---------------- Gerbang sesi lokal ---------------- */
  var UKEY = "stx-users", SKEY = "stx-session";
  // hash sederhana (bukan kriptografis) — konsisten dengan sifat gerbang lokal
  function hash(s) {
    var h = 5381; s = String(s);
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
    return "h" + h.toString(16);
  }
  function readUsers() { try { return JSON.parse(localStorage.getItem(UKEY) || "{}"); } catch (e) { return {}; } }
  function writeUsers(u) { try { localStorage.setItem(UKEY, JSON.stringify(u)); } catch (e) {} }

  window.STX_AUTH = {
    currentUser: function () { try { return JSON.parse(localStorage.getItem(SKEY) || "null"); } catch (e) { return null; } },
    signup: function (name, email, password) {
      email = String(email || "").trim().toLowerCase();
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) throw new Error("Format email tidak valid.");
      if (!password || password.length < 6) throw new Error("Kata sandi minimal 6 karakter.");
      var users = readUsers();
      if (users[email]) throw new Error("Email sudah terdaftar. Silakan masuk.");
      var user = { name: (name || email.split("@")[0]).trim(), email: email, pass: hash(password), provider: "email" };
      users[email] = user; writeUsers(users);
      var session = { name: user.name, email: user.email, provider: "email" };
      try { localStorage.setItem(SKEY, JSON.stringify(session)); } catch (e) {}
      return session;
    },
    login: function (email, password) {
      email = String(email || "").trim().toLowerCase();
      var users = readUsers(); var u = users[email];
      if (!u || u.pass !== hash(password)) throw new Error("Email atau kata sandi salah.");
      var session = { name: u.name, email: u.email, provider: "email" };
      try { localStorage.setItem(SKEY, JSON.stringify(session)); } catch (e) {}
      return session;
    },
    updateProfile: function (patch) {
      var sess = this.currentUser(); if (!sess) throw new Error("Belum masuk.");
      var nm = patch && patch.name != null ? String(patch.name).trim() : sess.name;
      if (!nm) throw new Error("Nama tidak boleh kosong.");
      var av = patch && patch.avatar !== undefined ? patch.avatar : sess.avatar;
      var users = readUsers(); var u = users[sess.email];
      if (u) { u.name = nm; u.avatar = av; users[sess.email] = u; writeUsers(users); }
      var next = Object.assign({}, sess, { name: nm, avatar: av });
      try { localStorage.setItem(SKEY, JSON.stringify(next)); } catch (e) {}
      return next;
    },
    logout: function () { try { localStorage.removeItem(SKEY); } catch (e) {} },
  };
})();
