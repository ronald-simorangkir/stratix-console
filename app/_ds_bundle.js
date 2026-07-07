/* @ds-bundle: {"format":4,"namespace":"STRATIXDesignSystem_72cbdd","components":[{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"CardHeader","sourcePath":"components/data/Card.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"RiskBadge","sourcePath":"components/data/RiskBadge.jsx"},{"name":"RiskCell","sourcePath":"components/data/RiskBadge.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/feedback/Tabs.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/data/Badge.jsx":"96f81f41e2cd","components/data/Card.jsx":"627a77f060f6","components/data/DataTable.jsx":"d84259037c0f","components/data/ProgressBar.jsx":"ab9b20914c68","components/data/RiskBadge.jsx":"a84fc1eb8aef","components/data/StatCard.jsx":"8318d29849f5","components/data/Tag.jsx":"e4560939f5e7","components/feedback/Alert.jsx":"9577f7588ffb","components/feedback/Dialog.jsx":"2a0cc9973732","components/feedback/Tabs.jsx":"581d7a091adb","components/feedback/Toast.jsx":"bbf694d7b414","components/feedback/Tooltip.jsx":"df5f5d330ca3","components/forms/Button.jsx":"1d6c981b76e6","components/forms/Checkbox.jsx":"b89880ff6273","components/forms/IconButton.jsx":"6469c8e35eb5","components/forms/Input.jsx":"44bf4861ad36","components/forms/Radio.jsx":"f2fab7c27a00","components/forms/Select.jsx":"9017c1794afc","components/forms/Switch.jsx":"6cf29adfea9e","components/forms/Textarea.jsx":"097a98dba003","ui_kits/console/agents.jsx":"2436e31f0af9","ui_kits/console/ai.js":"9c3c93dea071","ui_kits/console/chat.jsx":"407fd498adee","ui_kits/console/data.js":"96548dc1b0da","ui_kits/console/landing.jsx":"bca5cb8dc8e7","ui_kits/console/library.jsx":"76122e2d5289","ui_kits/console/settings.jsx":"e68e5e3ab1da","ui_kits/console/shared.jsx":"106e5a57486d","ui_kits/console/workspace.jsx":"b73a2bd50181"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.STRATIXDesignSystem_72cbdd = window.STRATIXDesignSystem_72cbdd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * STRATIX Badge — compact status/label pill.
 * Tones map to semantic + risk colors.
 */
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  size = "md",
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      fg: "var(--slate-600)",
      bg: "var(--slate-100)",
      solid: "var(--slate-600)"
    },
    brand: {
      fg: "var(--navy-700)",
      bg: "rgba(29,66,112,0.10)",
      solid: "var(--navy-700)"
    },
    accent: {
      fg: "var(--teal-700)",
      bg: "var(--info-050)",
      solid: "var(--teal-600)"
    },
    positive: {
      fg: "var(--positive-600)",
      bg: "var(--positive-050)",
      solid: "var(--positive-600)"
    },
    negative: {
      fg: "var(--negative-600)",
      bg: "var(--negative-050)",
      solid: "var(--negative-600)"
    },
    warning: {
      fg: "var(--warning-600)",
      bg: "var(--warning-050)",
      solid: "var(--warning-600)"
    }
  };
  const t = tones[tone] || tones.neutral;
  const soft = variant === "soft";
  const h = size === "sm" ? 20 : 24;
  const fs = size === "sm" ? "var(--text-2xs)" : "var(--text-xs)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      height: h,
      padding: size === "sm" ? "0 7px" : "0 9px",
      borderRadius: "var(--radius-pill)",
      fontSize: fs,
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "0.01em",
      lineHeight: 1,
      whiteSpace: "nowrap",
      color: soft ? t.fg : "#fff",
      background: soft ? t.bg : t.solid,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor",
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** STRATIX Card — base surface container. */
function Card({
  children,
  padding = "lg",
  interactive = false,
  style = {},
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pad = {
    none: 0,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24
  }[padding] ?? 20;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      padding: pad,
      cursor: interactive ? "pointer" : "default",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      borderColor: interactive && hover ? "var(--border-strong)" : "var(--border)",
      ...style
    }
  }, rest), children);
}

/** Optional header block for a Card. */
function CardHeader({
  title,
  subtitle,
  action,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      letterSpacing: "var(--ls-snug)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, subtitle)), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * STRATIX DataTable — compact financial/analytical table.
 * columns: [{ key, header, align, mono, width, render }]
 * Numeric columns should set mono:true for tabular alignment.
 */
function DataTable({
  columns = [],
  rows = [],
  dense = false,
  zebra = true,
  style = {},
  ...rest
}) {
  const cellPad = dense ? "8px 12px" : "11px 14px";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      overflowX: "auto",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      background: "var(--surface)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || (c.mono ? "right" : "left"),
      padding: cellPad,
      whiteSpace: "nowrap",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      background: "var(--bg-subtle)",
      borderBottom: "1px solid var(--border)",
      width: c.width,
      position: "sticky",
      top: 0
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      background: zebra && ri % 2 ? "var(--surface-sunken)" : "transparent"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || (c.mono ? "right" : "left"),
      padding: cellPad,
      borderBottom: ri === rows.length - 1 ? "none" : "1px solid var(--border-subtle)",
      color: "var(--text-body)",
      fontFamily: c.mono ? "var(--font-mono)" : "var(--font-sans)",
      fontVariantNumeric: c.mono ? "tabular-nums lining-nums" : "normal",
      fontWeight: c.strong ? "var(--fw-semibold)" : "var(--fw-regular)",
      color: c.strong ? "var(--text-strong)" : "var(--text-body)",
      whiteSpace: c.wrap ? "normal" : "nowrap"
    }
  }, c.render ? c.render(r[c.key], r) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** STRATIX ProgressBar — completion / score / confidence meter. */
function ProgressBar({
  value = 0,
  max = 100,
  tone = "accent",
  size = "md",
  showLabel = false,
  label,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const tones = {
    accent: "var(--accent)",
    brand: "var(--navy-700)",
    positive: "var(--positive-500)",
    warning: "var(--warning-500)",
    negative: "var(--negative-500)",
    blade: "var(--grad-blade)"
  };
  const h = size === "sm" ? 6 : size === "lg" ? 12 : 8;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      ...style
    }
  }, rest), (showLabel || label) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6,
      fontSize: "var(--text-xs)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, label), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--text-body)",
      fontWeight: 600
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: h,
      background: "var(--bg-subtle)",
      borderRadius: 999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: tones[tone] || tones.accent,
      borderRadius: 999,
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/RiskBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * STRATIX RiskBadge — domain indicator for the Agen Risiko & Fraud.
 * Levels: low | moderate | high | critical (Rendah/Sedang/Tinggi/Kritis).
 */
const LEVELS = {
  low: {
    id: "Rendah",
    color: "var(--risk-low)",
    bg: "var(--risk-low-050)"
  },
  moderate: {
    id: "Sedang",
    color: "var(--risk-moderate)",
    bg: "var(--risk-moderate-050)"
  },
  high: {
    id: "Tinggi",
    color: "var(--risk-high)",
    bg: "var(--risk-high-050)"
  },
  critical: {
    id: "Kritis",
    color: "var(--risk-critical)",
    bg: "var(--risk-critical-050)"
  }
};
function RiskBadge({
  level = "moderate",
  label,
  showDot = true,
  size = "md",
  style = {},
  ...rest
}) {
  const l = LEVELS[level] || LEVELS.moderate;
  const h = size === "sm" ? 22 : 26;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: h,
      padding: "0 10px",
      borderRadius: "var(--radius-sm)",
      fontSize: size === "sm" ? "var(--text-xs)" : "var(--text-sm)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "0.01em",
      color: l.color,
      background: l.bg,
      border: `1px solid ${l.color}33`,
      ...style
    }
  }, rest), showDot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: l.color,
      flexShrink: 0
    }
  }), label || l.id);
}

/** Small filled square used inside a risk heat matrix. */
function RiskCell({
  level = "moderate",
  children,
  style = {}
}) {
  const l = LEVELS[level] || LEVELS.moderate;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: l.color,
      color: "#fff",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-sm)",
      borderRadius: "var(--radius-xs)",
      aspectRatio: "1 / 1",
      minHeight: 34,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { RiskBadge, RiskCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RiskBadge.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * STRATIX StatCard — KPI tile: label, big figure, delta trend.
 * Figures render in mono tabular numerals.
 */
function StatCard({
  label,
  value,
  unit,
  delta,
  deltaDir,
  hint,
  icon = null,
  accent = false,
  style = {},
  ...rest
}) {
  // deltaDir: "up" | "down" | "flat"; color reflects finance sentiment
  const dir = deltaDir || (delta && String(delta).trim().startsWith("-") ? "down" : delta ? "up" : "flat");
  const deltaColor = dir === "up" ? "var(--positive-600)" : dir === "down" ? "var(--negative-600)" : "var(--text-muted)";
  const arrow = dir === "up" ? "▲" : dir === "down" ? "▼" : "→";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: accent ? "var(--grad-navy)" : "var(--surface)",
      border: "1px solid " + (accent ? "transparent" : "var(--border)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: 18,
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-wide)",
      textTransform: "uppercase",
      color: accent ? "rgba(255,255,255,0.7)" : "var(--text-muted)"
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent ? "var(--cyan-300)" : "var(--accent)",
      display: "inline-flex"
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums lining-nums",
      fontSize: "var(--text-3xl)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "-0.01em",
      color: accent ? "#fff" : "var(--text-strong)",
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md)",
      color: accent ? "rgba(255,255,255,0.7)" : "var(--text-muted)",
      fontWeight: "var(--fw-medium)"
    }
  }, unit)), (delta || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 10
    }
  }, delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: deltaColor,
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9
    }
  }, arrow), delta), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: accent ? "rgba(255,255,255,0.55)" : "var(--text-faint)"
    }
  }, hint)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** STRATIX Tag — removable/selectable chip, e.g. sektor, kata kunci. */
function Tag({
  children,
  onRemove,
  selected = false,
  icon = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 26,
      padding: onRemove ? "0 6px 0 10px" : "0 10px",
      borderRadius: "var(--radius-sm)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-medium)",
      color: selected ? "var(--teal-700)" : "var(--text-body)",
      background: selected ? "var(--info-050)" : "var(--bg-subtle)",
      border: "1px solid " + (selected ? "var(--teal-400)" : "var(--border)"),
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)"
    }
  }, icon), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Hapus",
    onClick: onRemove,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      marginLeft: 1,
      padding: 0,
      border: "none",
      borderRadius: 4,
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontSize: 13,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GLYPHS = {
  info: '<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>',
  "check-circle-2": '<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>',
  "alert-triangle": '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path>',
  "alert-octagon": '<path d="M12 16h.01"></path><path d="M12 8v4"></path><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"></path>',
  x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'
};
// React-owned inline SVG glyph (self-contained; no CDN icon dependency).
function Glyph({
  name,
  size = 18,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${GLYPHS[name] || ""}</svg>`;
  }, [name, size]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    }
  });
}

/** STRATIX Alert — inline contextual message banner. */
function Alert({
  tone = "info",
  title,
  children,
  icon,
  onClose,
  style = {},
  ...rest
}) {
  const tones = {
    info: {
      fg: "var(--teal-700)",
      bg: "var(--info-050)",
      bd: "var(--teal-400)",
      i: "info"
    },
    positive: {
      fg: "var(--positive-600)",
      bg: "var(--positive-050)",
      bd: "var(--positive-500)",
      i: "check-circle-2"
    },
    warning: {
      fg: "var(--warning-600)",
      bg: "var(--warning-050)",
      bd: "var(--warning-500)",
      i: "alert-triangle"
    },
    negative: {
      fg: "var(--negative-600)",
      bg: "var(--negative-050)",
      bd: "var(--negative-500)",
      i: "alert-octagon"
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: "flex",
      gap: 11,
      padding: "13px 15px",
      background: t.bg,
      border: `1px solid ${t.bd}55`,
      borderLeft: `3px solid ${t.bd}`,
      borderRadius: "var(--radius-md)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      flexShrink: 0,
      display: "inline-flex",
      marginTop: 1
    }
  }, icon || /*#__PURE__*/React.createElement(Glyph, {
    name: t.i,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-md)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      lineHeight: "var(--lh-normal)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Tutup",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 0,
      display: "inline-flex",
      height: 18
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Glyph({
  size = 18,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`;
  }, [size]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    }
  });
}

/** STRATIX Dialog — centered modal with scrim. Controlled via `open`. */
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  width = 460,
  style = {}
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      background: "rgba(10,27,51,0.55)",
      backdropFilter: "blur(3px)",
      animation: "stx-fade var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      overflow: "hidden",
      animation: "stx-pop var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      letterSpacing: "var(--ls-snug)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Tutup",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 4,
      marginRight: -4,
      marginTop: -2,
      display: "inline-flex",
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    size: 18
  })))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 22px"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      padding: "14px 22px 20px"
    }
  }, footer)));
}
if (typeof document !== "undefined" && !document.getElementById("stx-dialog-kf")) {
  const st = document.createElement("style");
  st.id = "stx-dialog-kf";
  st.textContent = "@keyframes stx-fade{from{opacity:0}to{opacity:1}}@keyframes stx-pop{from{opacity:0;transform:translateY(8px) scale(0.98)}to{opacity:1;transform:none}}";
  document.head.appendChild(st);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tabs.jsx
try { (() => {
/**
 * STRATIX Tabs — segmented navigation.
 * items: [{ value, label, icon }]. Controlled via `value`/`onChange` or uncontrolled.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  if (variant === "pill") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        gap: 3,
        padding: 3,
        background: "var(--bg-subtle)",
        borderRadius: "var(--radius-md)",
        ...style
      }
    }, items.map(it => {
      const on = it.value === active;
      return /*#__PURE__*/React.createElement("button", {
        key: it.value,
        type: "button",
        onClick: () => select(it.value),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          height: 32,
          padding: "0 14px",
          border: "none",
          borderRadius: "var(--radius-sm)",
          cursor: "pointer",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-sm)",
          fontWeight: "var(--fw-semibold)",
          color: on ? "var(--text-strong)" : "var(--text-muted)",
          background: on ? "var(--surface)" : "transparent",
          boxShadow: on ? "var(--shadow-xs)" : "none",
          transition: "all var(--dur-fast) var(--ease-standard)"
        }
      }, it.icon, it.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border)",
      ...style
    }
  }, items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      onClick: () => select(it.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        height: 42,
        padding: "0 4px",
        marginBottom: -1,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-md)",
        fontWeight: "var(--fw-semibold)",
        color: on ? "var(--text-strong)" : "var(--text-muted)",
        borderBottom: `2px solid ${on ? "var(--accent)" : "transparent"}`,
        transition: "color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
        margin: "0 10px 0 0"
      }
    }, it.icon, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const GLYPHS = {
  info: '<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>',
  "check-circle-2": '<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>',
  "alert-triangle": '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path>',
  "alert-octagon": '<path d="M12 16h.01"></path><path d="M12 8v4"></path><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"></path>',
  x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'
};
function Glyph({
  name,
  size = 18,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${GLYPHS[name] || ""}</svg>`;
  }, [name, size]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    }
  });
}

/** STRATIX Toast — transient notification. Render inside a fixed corner stack. */
function Toast({
  tone = "info",
  title,
  children,
  onClose,
  style = {}
}) {
  const tones = {
    info: {
      c: "var(--teal-500)",
      i: "info"
    },
    positive: {
      c: "var(--positive-500)",
      i: "check-circle-2"
    },
    warning: {
      c: "var(--warning-500)",
      i: "alert-triangle"
    },
    negative: {
      c: "var(--negative-500)",
      i: "alert-octagon"
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start",
      width: 340,
      padding: "13px 14px",
      background: "var(--surface-raised)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      animation: "stx-toast var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      alignSelf: "stretch",
      borderRadius: 4,
      background: t.c,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.c,
      flexShrink: 0,
      display: "inline-flex",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: t.i,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-md)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Tutup",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-faint)",
      padding: 0,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "x",
    size: 15
  })));
}
if (typeof document !== "undefined" && !document.getElementById("stx-toast-kf")) {
  const st = document.createElement("style");
  st.id = "stx-toast-kf";
  st.textContent = "@keyframes stx-toast{from{opacity:0;transform:translateX(16px)}to{opacity:1;transform:none}}";
  document.head.appendChild(st);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** STRATIX Tooltip — hover label. Wraps a single child trigger. */
function Tooltip({
  label,
  placement = "top",
  children,
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 500,
      ...pos,
      padding: "6px 9px",
      whiteSpace: "nowrap",
      background: "var(--navy-900)",
      color: "#fff",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-medium)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none",
      animation: "stx-fade var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * STRATIX Button — primary action control.
 * Variants: primary (navy), accent (teal "X-factor"), secondary, ghost, danger.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 32,
      padding: "0 12px",
      fontSize: "var(--text-sm)",
      gap: 6,
      radius: "var(--radius-sm)"
    },
    md: {
      height: 40,
      padding: "0 16px",
      fontSize: "var(--text-md)",
      gap: 8,
      radius: "var(--radius-md)"
    },
    lg: {
      height: 48,
      padding: "0 22px",
      fontSize: "var(--text-base)",
      gap: 9,
      radius: "var(--radius-md)"
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1px solid transparent"
    },
    accent: {
      background: "var(--accent)",
      color: "#04222A",
      border: "1px solid transparent"
    },
    secondary: {
      background: "var(--surface)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent"
    },
    danger: {
      background: "var(--negative-600)",
      color: "#fff",
      border: "1px solid transparent"
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverBg = {
    primary: "var(--brand-hover)",
    accent: "var(--accent-hover)",
    secondary: "var(--bg-subtle)",
    ghost: "var(--bg-subtle)",
    danger: "var(--negative-500)"
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: "var(--font-sans)",
      fontSize: s.fontSize,
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-snug)",
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: disabled || loading ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      transform: active && !disabled ? "translateY(0.5px) scale(0.99)" : "none",
      boxShadow: variant === "secondary" ? "var(--shadow-xs)" : "none",
      whiteSpace: "nowrap",
      ...v,
      background: hover && !disabled ? hoverBg : v.background,
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && iconLeft, children != null && /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      display: "inline-block",
      animation: "stx-spin 0.7s linear infinite"
    }
  });
}
if (typeof document !== "undefined" && !document.getElementById("stx-spin-kf")) {
  const st = document.createElement("style");
  st.id = "stx-spin-kf";
  st.textContent = "@keyframes stx-spin{to{transform:rotate(360deg)}}";
  document.head.appendChild(st);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** STRATIX Checkbox — with optional label. */
function Checkbox({
  checked,
  defaultChecked,
  disabled = false,
  label,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      borderRadius: "var(--radius-xs)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: on ? "var(--accent)" : "var(--surface)",
      border: on ? "1px solid var(--accent)" : "1px solid var(--border-strong)",
      boxShadow: on ? "none" : "var(--shadow-xs)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L4.8 8.5L9.5 3.5",
    stroke: "#04222A",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * STRATIX IconButton — square control for a single glyph.
 * Pass a Lucide (or any) icon node as children.
 */
function IconButton({
  children,
  variant = "ghost",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const dim = {
    sm: 30,
    md: 38,
    lg: 44
  }[size] || 38;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "1px solid transparent",
      hover: "var(--bg-subtle)"
    },
    outline: {
      background: "var(--surface)",
      color: "var(--text-body)",
      border: "1px solid var(--border-strong)",
      hover: "var(--bg-subtle)"
    },
    solid: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1px solid transparent",
      hover: "var(--brand-hover)"
    },
    accent: {
      background: "var(--accent-quiet)",
      color: "var(--accent-hover)",
      border: "1px solid transparent",
      hover: "var(--accent-quiet)"
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-md)",
      background: hover && !disabled ? v.hover : v.background,
      color: v.color,
      border: v.border,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
      transform: active && !disabled ? "scale(0.94)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * STRATIX Input — single-line text field with optional affixes + states.
 */
function Input({
  value,
  defaultValue,
  placeholder,
  type = "text",
  size = "md",
  disabled = false,
  invalid = false,
  prefix = null,
  suffix = null,
  onChange,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const h = heights[size] || 40;
  const borderColor = invalid ? "var(--negative-500)" : focus ? "var(--accent)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: "0 12px",
      background: disabled ? "var(--bg-subtle)" : "var(--surface)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--ring-focus)" : "var(--shadow-xs)",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-faint)",
      flexShrink: 0
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    defaultValue: defaultValue,
    type: type,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      color: "var(--text-strong)"
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-faint)",
      flexShrink: 0
    }
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** STRATIX Radio — single radio with label. Group via shared `name`. */
function Radio({
  checked,
  defaultChecked,
  disabled = false,
  label,
  name,
  value,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface)",
      border: on ? "5px solid var(--accent)" : "1px solid var(--border-strong)",
      boxShadow: on ? "none" : "var(--shadow-xs)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: handle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** STRATIX Select — native-backed dropdown styled to match Input. */
function Select({
  value,
  defaultValue,
  options = [],
  placeholder,
  size = "md",
  disabled = false,
  invalid = false,
  onChange,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const borderColor = invalid ? "var(--negative-500)" : focus ? "var(--accent)" : "var(--border-strong)";
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-flex",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: h,
      padding: "0 36px 0 12px",
      background: disabled ? "var(--bg-subtle)" : "var(--surface)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--ring-focus)" : "var(--shadow-xs)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      color: value || defaultValue ? "var(--text-strong)" : "var(--text-faint)",
      cursor: disabled ? "not-allowed" : "pointer",
      outline: "none",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: 12
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** STRATIX Switch — on/off toggle for settings (e.g. dark mode, auto-fill). */
function Switch({
  checked,
  defaultChecked,
  disabled = false,
  label,
  size = "md",
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const nv = !on;
    if (!isControlled) setInternal(nv);
    onChange && onChange(nv);
  };
  const dims = size === "sm" ? {
    w: 34,
    h: 20,
    k: 14
  } : {
    w: 42,
    h: 24,
    k: 18
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    style: {
      width: dims.w,
      height: dims.h,
      flexShrink: 0,
      padding: 0,
      border: "none",
      borderRadius: 999,
      cursor: disabled ? "not-allowed" : "pointer",
      background: on ? "var(--accent)" : "var(--slate-300)",
      position: "relative",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: (dims.h - dims.k) / 2,
      left: on ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
      width: dims.k,
      height: dims.k,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** STRATIX Textarea — multi-line input, e.g. "keterangan lain" about a company. */
function Textarea({
  value,
  defaultValue,
  placeholder,
  rows = 4,
  disabled = false,
  invalid = false,
  onChange,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? "var(--negative-500)" : focus ? "var(--accent)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("textarea", _extends({
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      padding: "10px 12px",
      resize: "vertical",
      background: disabled ? "var(--bg-subtle)" : "var(--surface)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--ring-focus)" : "var(--shadow-xs)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      lineHeight: "var(--lh-normal)",
      color: "var(--text-strong)",
      outline: "none",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/agents.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, Icon, refreshIcons, LineChart, BarChart, Donut, SectionTitle */
const AgNS = window.STRATIXDesignSystem_72cbdd;

/* Shared result toolbar */
function ResultToolbar({
  version = "v3",
  when = "Hari ini, 14:20",
  onExport
}) {
  const {
    Button,
    Badge,
    Tabs
  } = AgNS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, version)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "clock",
    s: 13
  }), " ", when)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "history",
      s: 14
    })
  }, "Riwayat"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "refresh-cw",
      s: 14
    })
  }, "Analisis ulang"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "download",
      s: 14
    }),
    onClick: onExport
  }, "Ekspor PDF")));
}

/* ---------- Agen Analis Keuangan ---------- */
function AgentFinance({
  d,
  caseCtx
}) {
  const {
    Card,
    CardHeader,
    StatCard,
    DataTable,
    Badge,
    Alert,
    Tabs,
    Select
  } = AgNS;
  const [tab, setTab] = React.useState("ringkasan");
  React.useEffect(refreshIcons);
  const statusBadge = s => /*#__PURE__*/React.createElement(Badge, {
    tone: s === "Baik" ? "positive" : "warning",
    size: "sm"
  }, s);
  const company = caseCtx && caseCtx.company || "Perusahaan";
  const concernLabel = {
    negative: "Tinggi",
    warning: "Sedang",
    info: "Perhatian"
  };

  // ---- Periode keuangan ----
  const years = d.revenueLabels;
  const [fromIdx, setFromIdx] = React.useState(0);
  const [toIdx, setToIdx] = React.useState(years.length - 1);
  const lo = Math.min(fromIdx, toIdx),
    hi = Math.max(fromIdx, toIdx);
  const nYears = hi - lo + 1;
  const multi = nYears > 1;
  const startYear = years[lo],
    endYear = years[hi];
  const rangeLabel = multi ? `${startYear}–${endYear}` : endYear;
  const revSlice = d.revenueSeries.slice(lo, hi + 1);
  const marginSlice = d.marginSeries.slice(lo, hi + 1);
  const labelSlice = years.slice(lo, hi + 1);
  const nums = (v, dg = 1) => (v >= 0 ? "+" : "") + v.toFixed(dg).replace(".", ",");
  const revNow = d.revenueSeries[hi],
    revPrev = d.revenueSeries[hi - 1];
  const revDelta = hi > 0 ? (revNow - revPrev) / revPrev * 100 : null;
  const marNow = d.marginSeries[hi],
    marDelta = hi > 0 ? marNow - d.marginSeries[hi - 1] : null;
  const cagr = multi ? (Math.pow(revNow / d.revenueSeries[lo], 1 / (hi - lo)) - 1) * 100 : null;
  const fmtT = v => v.toFixed(2).replace(".", ",");
  const revStart = d.revenueSeries[lo],
    marStart = d.marginSeries[lo],
    marEnd = d.marginSeries[hi];
  const ulasanLead = multi ? `Ulasan ini mencakup periode ${startYear}–${endYear} (${nYears} tahun). Sepanjang periode tersebut, pendapatan bergerak dari Rp ${fmtT(revStart)} T menjadi Rp ${fmtT(revNow)} T (CAGR ${cagr.toFixed(1).replace(".", ",")}%), dengan marjin EBITDA ${marStart.toFixed(1).replace(".", ",")}% menuju ${marEnd.toFixed(1).replace(".", ",")}%.` : `Ulasan ini difokuskan pada tahun buku ${endYear}, dengan pendapatan Rp ${fmtT(revNow)} T dan marjin EBITDA ${marEnd.toFixed(1).replace(".", ",")}%.`;
  const kpis = d.kpis.map((k, i) => {
    if (i === 0) return {
      ...k,
      label: `Revenue FY${endYear}`,
      value: "Rp " + revNow.toFixed(2).replace(".", ","),
      unit: "T",
      delta: revDelta != null ? nums(revDelta) + "%" : "—",
      hint: multi ? `vs ${years[hi - 1]}` : "YoY"
    };
    if (i === 1) return {
      ...k,
      label: `EBITDA Margin ${endYear}`,
      value: marNow.toFixed(1).replace(".", ","),
      unit: "%",
      delta: marDelta != null ? nums(marDelta) + "%" : "—",
      hint: hi > 0 ? `vs ${years[hi - 1]}` : "—"
    };
    return k;
  });
  const setFrom = v => {
    setFromIdx(v);
    if (v > toIdx) setToIdx(v);
  };
  const setTo = v => {
    setToIdx(v);
    if (v < fromIdx) setFromIdx(v);
  };
  const applyPreset = n => {
    const t = years.length - 1;
    setToIdx(t);
    setFromIdx(Math.max(0, t - (n - 1)));
  };
  const yearOpts = years.map((y, i) => ({
    value: String(i),
    label: y
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      maxWidth: 1360,
      margin: "0 auto",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(ResultToolbar, {
    version: "v3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "ringkasan",
      label: "Ringkasan",
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "layout-dashboard",
        s: 15
      })
    }, {
      value: "ulasan",
      label: "Ulasan Lengkap",
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "file-text",
        s: 15
      })
    }, {
      value: "redflags",
      label: "Red Flags & Concern",
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "alert-triangle",
        s: 15
      })
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      marginBottom: 20,
      padding: "12px 16px",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "calendar-range",
    s: 15
  }), " Periode Keuangan"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-faint)"
    }
  }, "Dari"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: String(fromIdx),
    onChange: e => setFrom(+e.target.value),
    options: yearOpts
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-faint)"
    }
  }, "sampai"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: String(toIdx),
    onChange: e => setTo(+e.target.value),
    options: yearOpts
  }))), /*#__PURE__*/React.createElement(Badge, {
    tone: multi ? "accent" : "neutral",
    dot: true
  }, nYears, " tahun"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [["1 Thn", 1], ["3 Thn", 3], ["5 Thn", 5]].map(([lbl, n]) => /*#__PURE__*/React.createElement("button", {
    key: lbl,
    onClick: () => applyPreset(n),
    style: {
      height: 30,
      padding: "0 12px",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--border-strong)",
      background: nYears === n ? "var(--accent-quiet)" : "var(--surface)",
      color: nYears === n ? "var(--accent-hover)" : "var(--text-muted)",
      fontSize: 12.5,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, lbl)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--text-faint)",
      margin: "-6px 0 18px",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "info",
    s: 13
  }), " Rentang periode mengikuti data yang tersedia pada dokumen terunggah (", years[0], "\u2013", years[years.length - 1], ")."), tab === "ringkasan" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 14,
      marginBottom: 20
    }
  }, kpis.map((k, i) => /*#__PURE__*/React.createElement(StatCard, _extends({
    key: k.label
  }, k, {
    accent: i === 0,
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: k.icon || ["trending-up", "percent", "wallet", "waves"][i] || "circle-dollar-sign",
      s: 18
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Tren Pendapatan",
    subtitle: `Rp Triliun · ${rangeLabel}`,
    action: multi ? /*#__PURE__*/React.createElement(Badge, {
      tone: "positive",
      dot: true
    }, "CAGR ", cagr.toFixed(1).replace(".", ","), "%") : null
  }), revSlice.length > 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LineChart, {
    series: revSlice,
    labels: labelSlice,
    height: 180,
    color: "var(--teal-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 8,
      padding: "0 8px"
    }
  }, labelSlice.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: 11,
      color: "var(--text-faint)"
    }
  }, l)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 30,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, "Rp ", revNow.toFixed(2).replace(".", ","), " T"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "Pendapatan FY", endYear, " \xB7 pilih \u2265 2 tahun untuk tren"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "EBITDA Margin",
    subtitle: `% · ${rangeLabel}`
  }), /*#__PURE__*/React.createElement(BarChart, {
    series: marginSlice,
    labels: labelSlice,
    height: 190,
    color: "var(--navy-600)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 12px"
    }
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Rasio Keuangan Utama",
    subtitle: `Konsolidasi FY${endYear} vs benchmark industri`
  })), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "r",
      header: "Rasio",
      strong: true
    }, {
      key: "v",
      header: `FY${endYear}`,
      mono: true,
      strong: true
    }, {
      key: "b",
      header: "Benchmark",
      mono: true
    }, {
      key: "s",
      header: "Status",
      align: "right",
      render: v => statusBadge(v)
    }],
    rows: d.ratios,
    style: {
      border: "none",
      borderRadius: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Skor Kesehatan",
    subtitle: "Komposit finansial"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    value: d.healthScore != null ? d.healthScore : 78,
    label: "/100",
    color: "var(--teal-500)",
    size: 104
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-body)",
      lineHeight: 1.55
    }
  }, "Peringkat ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, d.healthLabel || "Sehat"), ". ", d.verdict))), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Kesimpulan analis"
  }, d.verdict)))), tab === "ulasan" && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--grad-navy)",
      color: "#fff",
      padding: "26px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--cyan-300)"
    }
  }, "Ulasan Analisis Keuangan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      marginTop: 6
    }
  }, company), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      marginTop: 14,
      flexWrap: "wrap"
    }
  }, [["Periode", multi ? `Tahun Buku ${startYear}–${endYear}` : `Tahun Buku ${endYear} (Audited)`], ["Basis", d.reviewMeta.basis], ["Disusun oleh", d.reviewMeta.prepared]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "rgba(255,255,255,0.5)",
      fontWeight: 700
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.9)",
      marginTop: 3
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "34px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontStyle: "italic",
      color: "var(--text-muted)",
      margin: "0 0 26px",
      paddingBottom: 18,
      borderBottom: "1px solid var(--border)"
    }
  }, "Ulasan disusun dari sudut pandang Analis Keuangan \u2014 menilai kesehatan dan keberlanjutan finansial perusahaan sebagai bahan kajian lanjutan, bukan rekomendasi investasi."), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "13px 15px",
      background: "var(--accent-quiet)",
      border: "1px solid var(--teal-400)",
      borderRadius: "var(--radius-md)",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--teal-700)",
      marginBottom: 5
    }
  }, "Cakupan Periode"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, ulasanLead)), d.review.map(sec => /*#__PURE__*/React.createElement("div", {
    key: sec.h,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: "var(--text-strong)",
      letterSpacing: "-0.01em",
      margin: "0 0 9px"
    }
  }, sec.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.75,
      color: "var(--text-body)",
      margin: 0,
      textAlign: "justify",
      textWrap: "pretty"
    }
  }, sec.b))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      paddingTop: 18,
      borderTop: "1px solid var(--border)",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "STRATIX \xB7 Konsultan AI"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, "Agen Analis Keuangan \xB7 v3"))))), tab === "redflags" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Catatan analitis, bukan indikasi fraud",
    style: {
      marginBottom: 18
    }
  }, "Bagian ini merangkum kelemahan dan area perhatian yang muncul dari analisis keuangan. Untuk sinyal fraud dan modus kecurangan, gunakan Agen Risiko & Fraud."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      marginBottom: 16,
      lineHeight: 1.55
    }
  }, "Temuan berikut ditinjau untuk periode ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, rangeLabel), " (", nYears, " tahun), berdasarkan dokumen yang terunggah."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12,
      marginBottom: 18
    }
  }, [["Tinggi", "negative"], ["Sedang", "warning"], ["Perhatian", "info"]].map(([lbl, lv]) => {
    const n = d.concerns.filter(c => concernLabel[c.level] === lbl).length;
    const clr = lv === "info" ? "teal" : lv;
    return /*#__PURE__*/React.createElement("div", {
      key: lbl,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 9,
        background: `var(--${lv}-050)`,
        color: `var(--${clr}-600)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: lv === "negative" ? "alert-octagon" : lv === "warning" ? "alert-triangle" : "info",
      s: 18
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 22,
        fontWeight: 600,
        color: "var(--text-strong)",
        lineHeight: 1
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)",
        marginTop: 2
      }
    }, "Tingkat ", lbl)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Ringkasan Temuan \xB7 Periode ", rangeLabel), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    dot: true
  }, d.concerns.length, " area perhatian")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: "no",
      header: "#",
      width: 40
    }, {
      key: "title",
      header: "Temuan",
      strong: true,
      wrap: true
    }, {
      key: "area",
      header: "Area",
      render: v => /*#__PURE__*/React.createElement(Badge, {
        tone: "neutral",
        size: "sm"
      }, v)
    }, {
      key: "level",
      header: "Tingkat",
      render: v => /*#__PURE__*/React.createElement(Badge, {
        tone: v === "info" ? "accent" : v,
        size: "sm"
      }, concernLabel[v])
    }, {
      key: "nilai",
      header: "Nilai",
      mono: true,
      strong: true
    }, {
      key: "benchmark",
      header: "Benchmark",
      mono: true
    }, {
      key: "tren",
      header: "Tren",
      render: v => /*#__PURE__*/React.createElement(Badge, {
        tone: v === "Memburuk" ? "negative" : v === "Membaik" ? "positive" : "neutral",
        size: "sm"
      }, v)
    }],
    rows: d.concerns.map((c, i) => ({
      ...c,
      no: i + 1
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 12
    }
  }, "Uraian Rinci & Rekomendasi"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, d.concerns.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    padding: "md",
    style: {
      borderLeft: `3px solid var(--${c.level === "negative" ? "negative" : c.level === "warning" ? "warning" : "teal"}-500)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: `var(--${c.level === "negative" ? "negative" : c.level === "warning" ? "warning" : "info"}-050)`,
      color: `var(--${c.level === "negative" ? "negative" : c.level === "warning" ? "warning" : "teal"}-600)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: c.level === "negative" ? "trending-down" : c.level === "warning" ? "alert-triangle" : "info",
    s: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, c.title), /*#__PURE__*/React.createElement(Badge, {
    tone: c.level === "info" ? "accent" : c.level,
    size: "sm"
  }, concernLabel[c.level]), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, c.area)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      margin: "7px 0 0",
      lineHeight: 1.55
    }
  }, c.detail), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-body)",
      marginTop: 8,
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--text-strong)",
      flexShrink: 0
    }
  }, "Implikasi:"), /*#__PURE__*/React.createElement("span", null, c.implication)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-body)",
      marginTop: 6,
      display: "flex",
      gap: 6,
      paddingTop: 8,
      borderTop: "1px dashed var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--positive-600)",
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "lightbulb",
    s: 13
  }), "Rekomendasi:"), /*#__PURE__*/React.createElement("span", null, c.rekomendasi))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "var(--text-faint)",
      fontWeight: 700
    }
  }, "Metrik"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      fontWeight: 600,
      color: "var(--text-strong)",
      marginTop: 3
    }
  }, c.metric)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 356,
      flexShrink: 0,
      position: "sticky",
      top: 0
    }
  }, /*#__PURE__*/React.createElement(ChatPanel, {
    caseId: caseCtx && caseCtx.id,
    caseName: company,
    agentKey: "finance",
    agentLabel: "Agen Analis Keuangan",
    period: rangeLabel,
    contextText: caseCtx && (caseCtx.docText || []).map(x => x.text).join("\n\n")
  })));
}

/* ---------- Agen Risiko & Fraud ---------- */
function AgentRisk({
  d,
  caseCtx
}) {
  const {
    Card,
    CardHeader,
    Badge,
    Alert,
    RiskBadge,
    RiskCell
  } = AgNS;
  React.useEffect(refreshIcons);
  const company = caseCtx && caseCtx.company || "Perusahaan";
  const rowLabels = ["Katastropik", "Besar", "Sedang", "Kecil", "Minor"];
  const colLabels = ["Jarang", "Kecil", "Mungkin", "Sering", "Hampir pasti"];
  const levelOrder = [["critical", "Kritis"], ["high", "Tinggi"], ["moderate", "Sedang"], ["low", "Rendah"]];
  const flags = d.flags || [];
  const counts = levelOrder.map(([lv, lbl]) => [lbl, flags.filter(f => f.level === lv).length, lv]).filter(([, n]) => n > 0);
  // Sebaran flag pada sel matriks (impact=baris, likelihood=kolom)
  const cellMarks = {};
  flags.forEach(f => {
    if (f.impact && f.likelihood) {
      const ri = 5 - Math.min(5, Math.max(1, f.impact));
      const ci = Math.min(5, Math.max(1, f.likelihood)) - 1;
      const k = ri + "-" + ci;
      cellMarks[k] = (cellMarks[k] || 0) + 1;
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      maxWidth: 1360,
      margin: "0 auto",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(ResultToolbar, {
    version: "v2"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Indeks Risiko Fraud",
    subtitle: "Komposit dari 4 dimensi temuan",
    action: /*#__PURE__*/React.createElement(RiskBadge, {
      level: d.level
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Donut, {
    value: d.score,
    label: "/100",
    color: "var(--risk-high)",
    track: "var(--bg-subtle)",
    size: 116
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      flex: 1
    }
  }, counts.map(([l, n, lv]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: `var(--risk-${lv})`
    }
  }), l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, n, " temuan")))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Matriks Risiko",
    subtitle: "Dampak \xD7 Kemungkinan"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      fontSize: 10,
      color: "var(--text-faint)",
      textAlign: "right",
      paddingBottom: 18
    }
  }, rowLabels.map(r => /*#__PURE__*/React.createElement("span", {
    key: r,
    style: {
      height: 18,
      lineHeight: "18px"
    }
  }, r))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 4
    }
  }, d.matrix.flatMap((row, ri) => row.map((lv, ci) => /*#__PURE__*/React.createElement(RiskCell, {
    key: ri + "-" + ci,
    level: lv,
    style: {
      minHeight: 30
    }
  }, cellMarks[ri + "-" + ci] || "")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 4,
      marginTop: 5
    }
  }, colLabels.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontSize: 9,
      color: "var(--text-faint)",
      textAlign: "center"
    }
  }, c))))))), /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Temuan",
    title: "Red Flags & Indikasi Fraud",
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: "negative",
      dot: true
    }, d.flags.length, " temuan aktif")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginBottom: 20
    }
  }, d.flags.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.title,
    padding: "md",
    style: {
      borderLeft: `3px solid var(--risk-${f.level})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: `var(--risk-${f.level}-050)`,
      color: `var(--risk-${f.level})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "flag",
    s: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, f.title), /*#__PURE__*/React.createElement(RiskBadge, {
    level: f.level,
    size: "sm"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, f.area)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 6,
      lineHeight: 1.55
    }
  }, f.detail)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "var(--text-faint)",
      fontWeight: 700
    }
  }, "Modus"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--negative-600)",
      marginTop: 3
    }
  }, f.modus)))))), /*#__PURE__*/React.createElement(Alert, {
    tone: "negative",
    title: "Rekomendasi tindak lanjut forensik"
  }, d.recommendation)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 356,
      flexShrink: 0,
      position: "sticky",
      top: 0
    }
  }, /*#__PURE__*/React.createElement(ChatPanel, {
    caseId: caseCtx && caseCtx.id,
    caseName: company,
    agentKey: "risk",
    agentLabel: "Agen Risiko & Fraud",
    period: "Analisis terkini",
    contextText: caseCtx && (caseCtx.docText || []).map(x => x.text).join("\n\n")
  })));
}

/* ---------- Agen Transformasi ---------- */
function AgentTransform({
  d,
  caseCtx
}) {
  const {
    Card,
    Badge,
    Alert
  } = AgNS;
  React.useEffect(refreshIcons);
  const company = caseCtx && caseCtx.company || "Perusahaan";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      maxWidth: 1360,
      margin: "0 auto",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(ResultToolbar, {
    version: "v1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--grad-navy)",
      borderRadius: "var(--radius-xl)",
      padding: "24px 26px",
      color: "#fff",
      marginBottom: 20,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -30,
      top: -30,
      width: 200,
      height: 200,
      background: "var(--grad-blade)",
      opacity: 0.18,
      borderRadius: "50%",
      filter: "blur(20px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    style: {
      background: "rgba(107,216,228,0.16)",
      color: "var(--cyan-200)"
    }
  }, "Horizon ", d.horizon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--cyan-300)"
    }
  }, "Rencana Transformasi 5 Tahun")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      marginTop: 12,
      maxWidth: 720,
      lineHeight: 1.4
    }
  }, d.ambition)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 14,
      marginBottom: 24
    }
  }, d.pillars.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: "var(--accent-quiet)",
      color: "var(--accent-hover)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: p.icon,
    s: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-strong)",
      marginTop: 11
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--accent-hover)",
      fontWeight: 600,
      marginTop: 5
    }
  }, p.target)))), /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Roadmap",
    title: "Fase Transformasi Bertahap"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      paddingLeft: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 12,
      bottom: 12,
      width: 2,
      background: "var(--border)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, d.phases.map((ph, i) => /*#__PURE__*/React.createElement("div", {
    key: ph.year,
    style: {
      display: "flex",
      gap: 18,
      alignItems: "flex-start",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      flexShrink: 0,
      background: i === 0 ? "var(--grad-blade)" : "var(--surface)",
      border: i === 0 ? "none" : "2px solid var(--border-strong)",
      color: i === 0 ? "#fff" : "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 13,
      zIndex: 1
    }
  }, i + 1), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 17,
      fontWeight: 700,
      color: "var(--accent-hover)"
    }
  }, ph.year), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, ph.title)), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    size: "sm"
  }, "Investasi ", ph.invest)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 12
    }
  }, ph.items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12.5,
      color: "var(--text-body)",
      background: "var(--surface-sunken)",
      border: "1px solid var(--border-subtle)",
      padding: "5px 10px",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "check",
    s: 13,
    style: {
      color: "var(--positive-500)"
    }
  }), it))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 356,
      flexShrink: 0,
      position: "sticky",
      top: 0
    }
  }, /*#__PURE__*/React.createElement(ChatPanel, {
    caseId: caseCtx && caseCtx.id,
    caseName: company,
    agentKey: "transform",
    agentLabel: "Agen Transformasi",
    period: d.horizon || "5 tahun",
    contextText: caseCtx && (caseCtx.docText || []).map(x => x.text).join("\n\n")
  })));
}
Object.assign(window, {
  AgentFinance,
  AgentRisk,
  AgentTransform
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/agents.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ai.js
try { (() => {
/* STRATIX — client-side AI + document parsing (Anthropic Claude).
   Personal/internal use: API key lives in this browser (localStorage).
   Requires internet: calls api.anthropic.com and loads parser libs from CDN. */
(function () {
  const LS_KEY = "stx-anthropic-key";
  const LS_MODEL = "stx-anthropic-model";
  const DEFAULT_MODEL = "claude-sonnet-4-5";
  const API = "https://api.anthropic.com/v1/messages";
  const getKey = () => {
    try {
      return localStorage.getItem(LS_KEY) || "";
    } catch (e) {
      return "";
    }
  };
  const setKey = k => {
    try {
      localStorage.setItem(LS_KEY, k || "");
    } catch (e) {}
  };
  const getModel = () => {
    try {
      return localStorage.getItem(LS_MODEL) || DEFAULT_MODEL;
    } catch (e) {
      return DEFAULT_MODEL;
    }
  };
  const setModel = m => {
    try {
      localStorage.setItem(LS_MODEL, m || DEFAULT_MODEL);
    } catch (e) {}
  };
  const hasKey = () => !!getKey();

  // ---- lazy CDN loaders ----
  const _loaded = {};
  function loadScript(url) {
    if (_loaded[url]) return _loaded[url];
    _loaded[url] = new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = url;
      s.onload = res;
      s.onerror = () => rej(new Error("gagal memuat " + url));
      document.head.appendChild(s);
    });
    return _loaded[url];
  }
  let _pdfjs = null;
  async function getPdfjs() {
    if (_pdfjs) return _pdfjs;
    const mod = await import("https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.min.mjs");
    mod.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.worker.min.mjs";
    _pdfjs = mod;
    return mod;
  }

  // ---- document parsing ----
  async function parseFile(file) {
    const name = file.name || "dokumen";
    const ext = (name.split(".").pop() || "").toLowerCase();
    let text = "";
    try {
      if (ext === "pdf") {
        const pdfjs = await getPdfjs();
        const buf = await file.arrayBuffer();
        const pdf = await pdfjs.getDocument({
          data: buf
        }).promise;
        const parts = [];
        const max = Math.min(pdf.numPages, 60);
        for (let i = 1; i <= max; i++) {
          const page = await pdf.getPage(i);
          const c = await page.getTextContent();
          parts.push(c.items.map(it => it.str).join(" "));
        }
        text = parts.join("\n\n");
      } else if (ext === "xlsx" || ext === "xls" || ext === "csv") {
        await loadScript("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js");
        const buf = await file.arrayBuffer();
        const wb = window.XLSX.read(buf, {
          type: "array"
        });
        text = wb.SheetNames.map(n => `# ${n}\n` + window.XLSX.utils.sheet_to_csv(wb.Sheets[n])).join("\n\n");
      } else if (ext === "docx") {
        await loadScript("https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js");
        const buf = await file.arrayBuffer();
        const r = await window.mammoth.extractRawText({
          arrayBuffer: buf
        });
        text = r.value || "";
      } else {
        text = await file.text();
      }
    } catch (e) {
      text = "[Gagal membaca " + name + ": " + e.message + "]";
    }
    return {
      name,
      ext,
      text: text.trim(),
      chars: text.trim().length
    };
  }

  // ---- Anthropic call ----
  async function callClaude({
    system,
    messages,
    max_tokens = 4096,
    temperature = 0.3
  }) {
    const key = getKey();
    if (!key) throw new Error("API Key Anthropic belum diatur. Buka Pengaturan → API Key.");
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: getModel(),
        max_tokens,
        temperature,
        system,
        messages
      })
    });
    if (!res.ok) {
      let msg = "HTTP " + res.status;
      try {
        const j = await res.json();
        msg = j.error && j.error.message || msg;
      } catch (e) {}
      throw new Error(msg);
    }
    const j = await res.json();
    return (j.content || []).filter(b => b.type === "text").map(b => b.text).join("");
  }

  // ---- simple chat ----
  async function chat({
    history,
    question,
    contextText,
    agentLabel,
    period
  }) {
    const sys = `Anda adalah ${agentLabel || "Analis AI"} pada aplikasi konsultan STRATIX. Jawab dalam Bahasa Indonesia, ringkas, tajam, dan berbasis bukti dari dokumen yang diberikan. Jika informasi tidak ada di dokumen, katakan dengan jujur. Periode analisis: ${period || "-"}.`;
    const msgs = [];
    if (contextText) msgs.push({
      role: "user",
      content: "DOKUMEN PERUSAHAAN (untuk konteks):\n\n" + contextText.slice(0, 120000)
    });
    (history || []).forEach(m => msgs.push({
      role: m.role === "ai" ? "assistant" : "user",
      content: m.text
    }));
    msgs.push({
      role: "user",
      content: question
    });
    return callClaude({
      system: sys,
      messages: msgs,
      max_tokens: 1500,
      temperature: 0.4
    });
  }
  function extractJSON(s) {
    const a = s.indexOf("{");
    if (a < 0) throw new Error("Respons AI tidak berformat JSON.");
    // Cari '}' penutup yang cocok, hormati string & escape.
    let depth = 0,
      inStr = false,
      esc = false,
      end = -1;
    for (let i = a; i < s.length; i++) {
      const c = s[i];
      if (esc) {
        esc = false;
        continue;
      }
      if (c === "\\") {
        esc = true;
        continue;
      }
      if (c === '"') {
        inStr = !inStr;
        continue;
      }
      if (inStr) continue;
      if (c === "{") depth++;else if (c === "}") {
        depth--;
        if (depth === 0) {
          end = i;
          break;
        }
      }
    }
    let body = end >= 0 ? s.slice(a, end + 1) : s.slice(a);
    try {
      return JSON.parse(body);
    } catch (e) {/* coba perbaiki respons terpotong */}
    return JSON.parse(repairTruncatedJSON(body));
  }

  // Tutup string yang terbuka + semua array/objek yang belum ditutup.
  function balanceClose(str) {
    let s = str.replace(/,\s*$/, "");
    const open = [];
    let inStr = false,
      esc = false;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (esc) {
        esc = false;
        continue;
      }
      if (c === "\\") {
        esc = true;
        continue;
      }
      if (c === '"') {
        inStr = !inStr;
        continue;
      }
      if (inStr) continue;
      if (c === "{" || c === "[") open.push(c);else if (c === "}" || c === "]") open.pop();
    }
    if (inStr) s += '"';
    s = s.replace(/,\s*$/, "");
    for (let i = open.length - 1; i >= 0; i--) s += open[i] === "{" ? "}" : "]";
    return s;
  }

  // Indeks koma struktural terakhir (di luar string).
  function lastStructuralComma(s) {
    let inStr = false,
      esc = false,
      idx = -1;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (esc) {
        esc = false;
        continue;
      }
      if (c === "\\") {
        esc = true;
        continue;
      }
      if (c === '"') {
        inStr = !inStr;
        continue;
      }
      if (inStr) continue;
      if (c === ",") idx = i;
    }
    return idx;
  }

  // Perbaiki JSON terpotong (batas token): iteratif tutup lalu mundur ke koma
  // sebelumnya bila masih gagal, sampai berhasil di-parse.
  function repairTruncatedJSON(str) {
    let s = str;
    for (let guard = 0; guard < 2000; guard++) {
      try {
        return JSON.parse(balanceClose(s));
      } catch (e) {}
      const idx = lastStructuralComma(s);
      if (idx < 0) break;
      s = s.slice(0, idx);
    }
    throw new Error("Respons AI terpotong dan tidak dapat diperbaiki. Coba jalankan ulang analisis.");
  }

  // ---- Finance analysis: returns object matching AgentFinance data shape ----
  async function analyzeFinance({
    company,
    contextText
  }) {
    const sys = "Anda adalah Analis Keuangan komprehensif kelas dunia. Analisis dokumen keuangan perusahaan dan keluarkan HANYA JSON valid (tanpa markdown, tanpa teks lain) sesuai skema. Semua angka & narasi dalam Bahasa Indonesia (desimal koma). Jika data tak tersedia, estimasikan wajar dan beri tanda \u2014.";
    const schema = `{
 "kpis":[{"label":"Revenue FY<tahun>","value":"Rp X,XX","unit":"T|M","delta":"+X,X%","hint":"YoY"},{"label":"EBITDA Margin","value":"XX,X","unit":"%","delta":"","hint":""},{"label":"Net Profit","value":"Rp XXX","unit":"M","delta":"","hint":""},{"label":"Free Cash Flow","value":"Rp XXX","unit":"M","delta":"","hint":""}],
 "revenueLabels":["2020","2021","2022","2023","2024"],
 "revenueSeries":[number,...],
 "marginSeries":[number,...],
 "ratios":[{"r":"Current Ratio","v":"1,84\u00d7","b":"1,50\u00d7","s":"Baik|Waspada"}],
 "healthScore":number(0-100),
 "healthLabel":"Sehat|Waspada|Kritis",
 "verdict":"1-2 kalimat kesimpulan analis",
 "reviewMeta":{"period":"Tahun Buku ...","basis":"Laporan Keuangan Konsolidasian","prepared":"Agen Analis Keuangan STRATIX"},
 "review":[{"h":"1. Ikhtisar Kinerja","b":"paragraf naratif"},{"h":"2. Profitabilitas & Kualitas Laba","b":"..."},{"h":"3. Likuiditas & Solvabilitas","b":"..."},{"h":"4. Arus Kas","b":"..."},{"h":"5. Efisiensi Modal Kerja","b":"..."},{"h":"6. Struktur Permodalan","b":"..."},{"h":"7. Kesimpulan Analis","b":"..."}],
 "concerns":[{"title":"...","level":"negative|warning|info","area":"...","metric":"...","nilai":"...","benchmark":"...","tren":"Memburuk|Stabil|Membaik","detail":"...","implication":"...","rekomendasi":"..."}]
}`;
    const user = `Perusahaan: ${company || "-"}\n\nDOKUMEN:\n${(contextText || "").slice(0, 150000)}\n\nHasilkan JSON sesuai skema berikut. Jaga agar ringkas: tiap paragraf "review" maksimal 3 kalimat; isi 4-5 concerns, 5-6 ratios. Seri angka sepanjang label. Keluarkan HANYA JSON, pastikan lengkap dan tertutup.\n${schema}`;
    const raw = await callClaude({
      system: sys,
      messages: [{
        role: "user",
        content: user
      }],
      max_tokens: 16000,
      temperature: 0.2
    });
    return extractJSON(raw);
  }

  // ---- Risk & Fraud analysis: returns object matching AgentRisk data shape ----
  async function analyzeRisk({
    company,
    contextText
  }) {
    const sys = "Anda adalah investigator forensik & auditor fraud kelas dunia. Analisis dokumen perusahaan untuk inefisiensi, red flag kecurangan, indikasi modus, dan rekomendasi tindak lanjut forensik. Keluarkan HANYA JSON valid (tanpa markdown, tanpa teks lain) sesuai skema. Semua narasi Bahasa Indonesia (desimal koma). Jika data tak tersedia, nyatakan asumsi wajar.";
    const schema = `{
 "score":number(0-100, makin tinggi makin berisiko),
 "level":"low|moderate|high|critical",
 "matrix":[[5 nilai "low|moderate|high|critical"], ...5 baris] (baris=dampak Katastropik→Minor, kolom=kemungkinan Jarang→Hampir pasti),
 "flags":[{"title":"...","level":"low|moderate|high|critical","area":"mis. Piutang","detail":"1-2 kalimat bukti dari dokumen","modus":"istilah modus fraud singkat (mis. Fictitious revenue)","impact":1-5,"likelihood":1-5}],
 "recommendation":"1-2 kalimat rekomendasi tindak lanjut forensik"
}`;
    const user = `Perusahaan: ${company || "-"}\n\nDOKUMEN:\n${(contextText || "").slice(0, 150000)}\n\nHasilkan JSON sesuai skema. Isi 4-6 flags dengan tingkat bervariasi; matriks 5x5 harus konsisten dengan sebaran flags. Keluarkan HANYA JSON, pastikan lengkap dan tertutup.\n${schema}`;
    const raw = await callClaude({
      system: sys,
      messages: [{
        role: "user",
        content: user
      }],
      max_tokens: 8000,
      temperature: 0.2
    });
    return extractJSON(raw);
  }

  // ---- Transformation plan: returns object matching AgentTransform data shape ----
  async function analyzeTransform({
    company,
    contextText
  }) {
    const sys = "Anda adalah konsultan manajemen kelas dunia (tier McKinsey/BCG). Susun rencana transformasi 5 tahun yang rinci dan dapat dieksekusi berdasarkan dokumen perusahaan. Keluarkan HANYA JSON valid (tanpa markdown, tanpa teks lain) sesuai skema. Semua narasi Bahasa Indonesia (desimal koma).";
    const yNow = new Date().getFullYear();
    const schema = `{
 "horizon":"${yNow} \u2013 ${yNow + 4}",
 "ambition":"1 kalimat aspirasi transformasi 5 tahun yang spesifik & terukur",
 "pillars":[{"name":"nama pilar singkat","icon":"salah satu lucide: gauge|cpu|battery-charging|leaf|trending-up|users|globe|shield|rocket","target":"target terukur mis. -320 bps COGS"}] (tepat 4 pilar),
 "phases":[{"year":"${yNow}","title":"tema fase","items":["3-4 inisiatif konkret"],"invest":"nilai investasi mis. Rp 180 M"}] (tepat 5 fase, tahun ${yNow}..${yNow + 4})
}`;
    const user = `Perusahaan: ${company || "-"}\n\nDOKUMEN:\n${(contextText || "").slice(0, 150000)}\n\nHasilkan JSON sesuai skema. Inisiatif harus relevan dengan kondisi perusahaan pada dokumen. Keluarkan HANYA JSON, pastikan lengkap dan tertutup.\n${schema}`;
    const raw = await callClaude({
      system: sys,
      messages: [{
        role: "user",
        content: user
      }],
      max_tokens: 8000,
      temperature: 0.3
    });
    return extractJSON(raw);
  }

  // ---- Data Primer auto-fill from documents / notes ----
  async function analyzePrimer({
    company,
    contextText,
    website
  }) {
    const sys = "Anda mengekstrak Data Primer perusahaan dari dokumen. Keluarkan HANYA JSON valid (tanpa markdown). Bahasa Indonesia (angka format Indonesia, desimal koma & ribuan titik). Kosongkan (\"\") field yang tidak dapat ditemukan; jangan mengarang.";
    const schema = `{
 "company":"nama resmi perusahaan bila terbaca",
 "founded":"tahun berdiri, mis. 1994",
 "sector":"sektor industri (klasifikasi Bank Indonesia)",
 "bidang":"bidang usaha spesifik",
 "revenue":"revenue tahunan angka penuh tanpa Rp, mis. 4.820.000.000.000",
 "revenueDate":"periode revenue format YYYY-MM",
 "status":"salah satu: BUMN|Multinasional|Swasta Nasional|SME|UMKM"
}`;
    const parts = [];
    if (company) parts.push("Nama sementara: " + company);
    if (website) parts.push("Website: " + website);
    if (contextText) parts.push("DOKUMEN:\n" + contextText.slice(0, 120000));
    const user = parts.join("\n\n") + `\n\nEkstrak Data Primer sebagai JSON sesuai skema. Keluarkan HANYA JSON.\n${schema}`;
    const raw = await callClaude({
      system: sys,
      messages: [{
        role: "user",
        content: user
      }],
      max_tokens: 1200,
      temperature: 0.1
    });
    return extractJSON(raw);
  }
  window.STX_AI = {
    getKey,
    setKey,
    getModel,
    setModel,
    hasKey,
    parseFile,
    chat,
    analyzeFinance,
    analyzeRisk,
    analyzeTransform,
    analyzePrimer
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ai.js", error: String((e && e.message) || e) }); }

// ui_kits/console/chat.jsx
try { (() => {
/* global React */
const ChatNS = window.STRATIXDesignSystem_72cbdd;
function stxEscape(s) {
  return String(s).replace(/[&<>]/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  })[c]);
}
const CHAT_GLYPH = {
  spark: '<path d="M12 3v4"/><path d="M12 17v4"/><path d="M5 12H1"/><path d="M23 12h-4"/><path d="m6.3 6.3 2.1 2.1"/><path d="m15.6 15.6 2.1 2.1"/><path d="m17.7 6.3-2.1 2.1"/><path d="m8.4 15.6-2.1 2.1"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>'
};
// React-owned inline-SVG icon (safe across re-renders).
function ChatIcon({
  n,
  s = 16,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${CHAT_GLYPH[n] || ""}</svg>`;
  }, [n, s]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      width: s,
      height: s,
      ...style
    }
  });
}

/* Prototype responder — jujur bahwa ini contoh; versi fungsional menjawab dari dokumen asli. */
function cannedReply(q, period) {
  const ql = q.toLowerCase();
  let core;
  if (/utang|leverage|der|solvab/.test(ql)) core = "rasio utang (DER) berada di 1,12× — sedikit di atas benchmark 1,00×. Tren peningkatan leverage perlu dipantau terhadap kovenan pinjaman.";else if (/likuid|current|kas|cash/.test(ql)) core = "likuiditas tergolong kuat (Current Ratio 1,84×), namun Free Cash Flow menurun 4,2% sehingga konversi kas menjadi perhatian.";else if (/margin|laba|profit|ebitda/.test(ql)) core = "marjin EBITDA menguat ke 18,3% dan laba bersih tumbuh 8,7%, mencerminkan perbaikan efisiensi operasi.";else if (/persediaan|inventor|modal kerja/.test(ql)) core = "perputaran persediaan 5,4× masih di bawah benchmark 6,0×, mengindikasikan modal kerja yang menahan kas.";else if (/risiko|fraud|red flag|concern/.test(ql)) core = "terdapat 5 area perhatian, dengan 1 bertingkat tinggi (Free Cash Flow) dan 3 bertingkat sedang. Rincian ada pada tab Red Flags & Concern.";else core = "poin-poin utama mencakup pertumbuhan pendapatan yang konsisten, marjin yang membaik, dengan perhatian pada leverage dan konversi kas.";
  return "Untuk periode " + period + ", " + core + "\n\n(Jawaban contoh dalam prototipe. Pada versi fungsional, Analis AI menjawab langsung dari dokumen yang Anda unggah.)";
}
function printChat(caseName, agentLabel, msgs) {
  const rows = msgs.map(m => `
    <div style="margin:0 0 14px;">
      <div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${m.role === "ai" ? "#0E7C8B" : "#4E5E70"};margin-bottom:3px;">${m.role === "ai" ? "Analis AI" : "Anda"}</div>
      <div style="font-size:13px;line-height:1.6;color:#22303F;white-space:pre-wrap;">${stxEscape(m.text)}</div>
    </div>`).join("");
  const ov = document.createElement("div");
  ov.id = "stx-print-chat";
  ov.innerHTML = `
    <style>
      @media print { body > *:not(#stx-print-chat){ display:none !important; } #stx-print-chat{ display:block !important; } }
      #stx-print-chat{ position:fixed; inset:0; background:#fff; z-index:99999; padding:44px 54px; overflow:auto; font-family:'Plus Jakarta Sans',sans-serif; }
    </style>
    <div style="border-bottom:2px solid #0E2547;padding-bottom:14px;margin-bottom:22px;">
      <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#12A3B4;">STRATIX · Riwayat Konsultasi</div>
      <div style="font-size:22px;font-weight:800;color:#0E2547;margin-top:5px;">${stxEscape(caseName)}</div>
      <div style="font-size:12px;color:#6B7C8E;margin-top:3px;">${stxEscape(agentLabel)} · ${new Date().toLocaleString("id-ID")}</div>
    </div>
    ${rows}`;
  document.body.appendChild(ov);
  window.print();
  setTimeout(() => ov.remove(), 600);
}
function ChatPanel({
  caseId,
  caseName,
  agentKey,
  agentLabel,
  period,
  contextText
}) {
  const {
    Button
  } = ChatNS;
  const storeKey = `stx-chat-${caseId || "x"}-${agentKey}`;
  const [msgs, setMsgs] = React.useState(() => {
    try {
      const s = localStorage.getItem(storeKey);
      if (s) return JSON.parse(s);
    } catch (e) {}
    return [{
      role: "ai",
      text: "Halo, saya Analis AI STRATIX. Tanyakan hal lanjutan tentang analisis ini, atau minta kajian tambahan khusus.",
      ts: Date.now()
    }];
  });
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const listRef = React.useRef(null);
  React.useEffect(() => {
    try {
      localStorage.setItem(storeKey, JSON.stringify(msgs));
    } catch (e) {}
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [msgs, typing]);
  const send = () => {
    const q = input.trim();
    if (!q) return;
    const now = Date.now();
    const history = msgs.slice(-8);
    setMsgs(m => [...m, {
      role: "user",
      text: q,
      ts: now
    }]);
    setInput("");
    setTyping(true);
    const AI = window.STX_AI;
    if (AI && AI.hasKey()) {
      AI.chat({
        history,
        question: q,
        contextText,
        agentLabel,
        period
      }).then(ans => setMsgs(m => [...m, {
        role: "ai",
        text: ans,
        ts: Date.now()
      }])).catch(e => setMsgs(m => [...m, {
        role: "ai",
        text: "⚠ " + e.message,
        ts: Date.now()
      }])).finally(() => setTyping(false));
    } else {
      setTimeout(() => {
        setMsgs(m => [...m, {
          role: "ai",
          text: cannedReply(q, period) + "\n\n(Atur API Key Anthropic di Pengaturan agar jawaban berbasis dokumen asli.)",
          ts: Date.now()
        }]);
        setTyping(false);
      }, 650);
    }
  };
  const clearChat = () => setMsgs([{
    role: "ai",
    text: "Riwayat dibersihkan. Ada yang bisa saya bantu?",
    ts: Date.now()
  }]);
  const suggestions = ["Bagaimana kondisi leverage?", "Jelaskan penurunan arus kas", "Ringkas red flags utama"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "calc(100vh - 108px)",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 16px",
      borderBottom: "1px solid var(--border)",
      background: "var(--grad-navy)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: "var(--grad-blade)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(ChatIcon, {
    n: "spark",
    s: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#fff"
    }
  }, "Tanya ", agentLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.6)"
    }
  }, "Kajian lanjutan \xB7 ", period)), /*#__PURE__*/React.createElement("button", {
    onClick: () => printChat(caseName, agentLabel, msgs),
    title: "Ekspor PDF",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(ChatIcon, {
    n: "download",
    s: 15
  })), /*#__PURE__*/React.createElement("button", {
    onClick: clearChat,
    title: "Bersihkan",
    style: iconBtn
  }, /*#__PURE__*/React.createElement(ChatIcon, {
    n: "trash",
    s: 15
  }))), /*#__PURE__*/React.createElement("div", {
    ref: listRef,
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      background: "var(--bg-app)"
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: m.role === "user" ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "86%",
      padding: "9px 12px",
      borderRadius: 12,
      fontSize: 13,
      lineHeight: 1.55,
      whiteSpace: "pre-wrap",
      background: m.role === "user" ? "var(--brand)" : "var(--surface)",
      color: m.role === "user" ? "var(--text-on-brand)" : "var(--text-body)",
      border: m.role === "user" ? "none" : "1px solid var(--border)",
      borderBottomRightRadius: m.role === "user" ? 3 : 12,
      borderBottomLeftRadius: m.role === "user" ? 12 : 3
    }
  }, m.text))), typing && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      fontStyle: "italic",
      paddingLeft: 4
    }
  }, "Analis AI sedang mengetik\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "8px 12px 0",
      flexWrap: "wrap"
    }
  }, suggestions.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setInput(s),
    style: {
      fontSize: 11.5,
      padding: "5px 9px",
      borderRadius: 999,
      border: "1px solid var(--border)",
      background: "var(--bg-subtle)",
      color: "var(--text-muted)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: 12,
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => e.key === "Enter" && send(),
    placeholder: "Tulis pertanyaan\u2026",
    style: {
      flex: 1,
      minWidth: 0,
      height: 38,
      padding: "0 12px",
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--text-strong)",
      outline: "none",
      background: "var(--surface)"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: send,
    iconLeft: /*#__PURE__*/React.createElement(ChatIcon, {
      n: "send",
      s: 16
    }),
    style: {
      paddingLeft: 12,
      paddingRight: 12
    }
  })));
}
const iconBtn = {
  width: 30,
  height: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: 7,
  background: "rgba(255,255,255,0.12)",
  color: "#fff",
  cursor: "pointer",
  flexShrink: 0
};
window.ChatPanel = ChatPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/chat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/data.js
try { (() => {
// STRATIX Console — mock data for the UI kit (fake, illustrative).
window.STX_DATA = {
  // Klasifikasi Sektor Ekonomi Bank Indonesia (disederhanakan)
  sectorsBI: ["Pertanian, Perburuan & Kehutanan", "Perikanan", "Pertambangan & Penggalian", "Industri Pengolahan", "Pengadaan Listrik, Gas & Air", "Konstruksi", "Perdagangan Besar & Eceran", "Penyediaan Akomodasi & Makan Minum", "Transportasi, Pergudangan & Komunikasi", "Perantara Keuangan (Jasa Keuangan)", "Real Estat & Jasa Persewaan", "Informasi & Komunikasi", "Jasa Pendidikan", "Jasa Kesehatan & Kegiatan Sosial", "Jasa Kemasyarakatan, Sosial & Budaya", "Jasa Perusahaan", "Lainnya"],
  // Bidang usaha umum yang mudah dipahami
  bidangUsaha: ["Manufaktur & Produksi", "Perdagangan & Ritel", "Jasa Keuangan & Perbankan", "Teknologi & Digital", "Properti & Konstruksi", "Energi & Pertambangan", "Agribisnis & Pangan", "Transportasi & Logistik", "Kesehatan & Farmasi", "Pendidikan", "Pariwisata & Perhotelan", "Media & Industri Kreatif", "Telekomunikasi", "Barang Konsumen (FMCG)", "Otomotif & Komponen", "Energi Terbarukan", "Jasa Profesional", "Lainnya"],
  cases: [{
    id: "Case-014-AST",
    name: "Astra Sejahtera — Due Diligence",
    company: "PT Astra Sejahtera Tbk",
    initials: "AS",
    logoColor: "#0E7C8B",
    sector: "Manufaktur Otomotif",
    status: "Multinasional",
    founded: 1994,
    revenue: "Rp 4,82 T",
    revenueDate: "Des 2024",
    updated: "2 jam lalu",
    agents: ["finance", "risk"],
    health: "Sehat"
  }, {
    id: "Case-013-NUS",
    name: "Nusantara Pangan — Transformasi",
    company: "PT Nusantara Pangan Makmur",
    initials: "NP",
    logoColor: "#12855A",
    sector: "FMCG / Pangan",
    status: "Swasta Nasional",
    founded: 2008,
    revenue: "Rp 1,24 T",
    revenueDate: "Des 2024",
    updated: "Kemarin",
    agents: ["finance", "transform"],
    health: "Waspada"
  }, {
    id: "Case-012-GRD",
    name: "Garuda Digital Ventures",
    company: "PT Garuda Digital Ventures",
    initials: "GD",
    logoColor: "#1D4270",
    sector: "Teknologi / SaaS",
    status: "SME",
    founded: 2019,
    revenue: "Rp 186 M",
    revenueDate: "Des 2024",
    updated: "3 hari lalu",
    agents: ["risk"],
    health: "Kritis"
  }, {
    id: "Case-011-BUM",
    name: "Bumi Energi Nasional",
    company: "PT Bumi Energi Nasional (Persero)",
    initials: "BE",
    logoColor: "#C67E12",
    sector: "Energi & Utilitas",
    status: "BUMN",
    founded: 1971,
    revenue: "Rp 22,4 T",
    revenueDate: "Des 2024",
    updated: "1 minggu lalu",
    agents: ["finance", "risk", "transform"],
    health: "Sehat"
  }],
  documents: [{
    name: "Laporan Keuangan Audited FY2024.pdf",
    size: "4.2 MB",
    type: "pdf",
    pages: 128,
    status: "dikenali",
    kind: "Laporan Keuangan"
  }, {
    name: "Annual Report 2024.pdf",
    size: "18.6 MB",
    type: "pdf",
    pages: 96,
    status: "dikenali",
    kind: "Laporan Tahunan"
  }, {
    name: "Rincian Piutang & Persediaan.xlsx",
    size: "1.1 MB",
    type: "xls",
    pages: null,
    status: "dikenali",
    kind: "Data Pendukung"
  }, {
    name: "Notulen RUPS Q4.docx",
    size: "340 KB",
    type: "doc",
    pages: 12,
    status: "diproses",
    kind: "Tata Kelola"
  }],
  agents: [{
    id: "finance",
    name: "Agen Analis Keuangan",
    icon: "line-chart",
    color: "#0E7C8B",
    bg: "var(--info-050)",
    desc: "Analisis komprehensif layaknya investor berpengalaman — likuiditas, profitabilitas, solvabilitas, arus kas, dan valuasi.",
    tag: "Analis Keuangan"
  }, {
    id: "risk",
    name: "Agen Risiko & Fraud",
    icon: "shield-alert",
    color: "#C33A3A",
    bg: "var(--negative-050)",
    desc: "Mengidentifikasi inefisiensi, red flags fraud, indikasi modus kecurangan, dan rekomendasi tindak lanjut forensik.",
    tag: "Risiko & Fraud"
  }, {
    id: "transform",
    name: "Agen Transformasi",
    icon: "git-branch",
    color: "#1D4270",
    bg: "rgba(29,66,112,0.08)",
    desc: "Menyusun rencana transformasi 5 tahun yang detail, selayaknya konsultan manajemen kelas dunia.",
    tag: "Transformasi"
  }],
  // Finance agent result
  finance: {
    kpis: [{
      label: "Revenue FY2024",
      value: "Rp 4,82",
      unit: "T",
      delta: "+12,4%",
      hint: "YoY",
      icon: "trending-up"
    }, {
      label: "EBITDA Margin",
      value: "18,3",
      unit: "%",
      delta: "+1,1%",
      hint: "vs FY23",
      icon: "percent"
    }, {
      label: "Net Profit",
      value: "Rp 419",
      unit: "M",
      delta: "+8,7%",
      hint: "YoY",
      icon: "wallet"
    }, {
      label: "Free Cash Flow",
      value: "Rp 512",
      unit: "M",
      delta: "-4,2%",
      hint: "YoY",
      icon: "waves"
    }],
    revenueSeries: [3.6, 3.9, 4.0, 4.29, 4.82],
    revenueLabels: ["2020", "2021", "2022", "2023", "2024"],
    marginSeries: [14.2, 15.1, 16.8, 17.2, 18.3],
    ratios: [{
      r: "Current Ratio",
      v: "1,84×",
      b: "1,50×",
      s: "Baik"
    }, {
      r: "Quick Ratio",
      v: "1,12×",
      b: "1,00×",
      s: "Baik"
    }, {
      r: "Debt to Equity",
      v: "1,12×",
      b: "1,00×",
      s: "Waspada"
    }, {
      r: "Interest Coverage",
      v: "3,20×",
      b: "2,50×",
      s: "Baik"
    }, {
      r: "ROE",
      v: "14,6%",
      b: "12,0%",
      s: "Baik"
    }, {
      r: "Inventory Turnover",
      v: "5,4×",
      b: "6,0×",
      s: "Waspada"
    }],
    verdict: "Fundamental solid dengan pertumbuhan pendapatan konsisten. Perhatian pada rasio utang yang meningkat dan perputaran persediaan di bawah benchmark industri.",
    // Ulasan naratif (sudut pandang Analis Keuangan, layak print)
    reviewMeta: {
      period: "Tahun Buku 2024 (Audited)",
      basis: "Laporan Keuangan Konsolidasian",
      prepared: "Agen Analis Keuangan STRATIX"
    },
    review: [{
      h: "1. Ikhtisar Kinerja",
      b: "Sepanjang tahun buku 2024, perusahaan membukukan pendapatan Rp 4,82 triliun, tumbuh 12,4% dibanding tahun sebelumnya dan melanjutkan tren kenaikan lima tahun berturut-turut dengan CAGR 7,6%. Pertumbuhan ini didorong oleh pemulihan volume penjualan pada segmen inti serta penyesuaian harga jual. Marjin EBITDA menguat ke 18,3% dari 17,2%, mencerminkan disiplin biaya dan skala ekonomi yang mulai terbentuk. Dari perspektif analis keuangan, kualitas pertumbuhan tergolong sehat karena disertai perbaikan marjin, bukan semata ekspansi volume berbiaya tinggi."
    }, {
      h: "2. Profitabilitas & Kualitas Laba",
      b: "Laba bersih mencapai Rp 419 miliar (marjin bersih 8,7%), naik 8,7% secara tahunan. Namun laju pertumbuhan laba bersih tertinggal dari pertumbuhan pendapatan, terutama akibat kenaikan beban bunga seiring bertambahnya utang. Return on Equity sebesar 14,6% berada di atas benchmark industri 12,0%, menandakan penggunaan modal yang efisien. Kualitas laba dinilai memadai: porsi laba yang berasal dari pos non-operasional relatif kecil, sehingga laba mencerminkan kinerja operasi inti."
    }, {
      h: "3. Likuiditas & Solvabilitas",
      b: "Posisi likuiditas kuat dengan Current Ratio 1,84× dan Quick Ratio 1,12×, keduanya di atas benchmark. Perusahaan memiliki bantalan modal kerja yang cukup untuk menutup kewajiban jangka pendek tanpa tekanan. Di sisi solvabilitas, Interest Coverage 3,20× masih aman, tetapi Debt to Equity meningkat ke 1,12× (benchmark 1,00×). Tren peningkatan leverage perlu dicermati karena mempersempit ruang gerak apabila suku bunga naik atau arus kas operasi melemah."
    }, {
      h: "4. Arus Kas & Kualitas Kas",
      b: "Free Cash Flow tercatat Rp 512 miliar, turun 4,2% meski laba naik. Penurunan ini bersumber dari peningkatan kebutuhan modal kerja — khususnya piutang dan persediaan — serta belanja modal yang lebih tinggi. Selisih yang melebar antara laba akrual dan kas yang dihasilkan menjadi perhatian analis: laba yang tumbuh idealnya diikuti konversi kas yang sepadan. Rasio konversi kas yang menurun mengindikasikan modal kerja mulai menahan kas perusahaan."
    }, {
      h: "5. Efisiensi Modal Kerja",
      b: "Inventory Turnover 5,4× berada di bawah benchmark industri 6,0×, menandakan persediaan berputar lebih lambat dari standar. Kombinasi persediaan yang menumpuk dan piutang yang tumbuh lebih cepat dari penjualan menekan siklus konversi kas. Perbaikan manajemen persediaan dan kebijakan kredit pelanggan berpotensi melepaskan kas yang kini terikat di modal kerja."
    }, {
      h: "6. Struktur Permodalan",
      b: "Struktur modal bergeser ke arah yang lebih agresif seiring pendanaan ekspansi melalui utang. Selama arus kas operasi tetap kuat dan Interest Coverage terjaga di atas 3×, tingkat leverage saat ini masih terkendali. Namun analis menyarankan pemantauan kovenan pinjaman dan penyusunan rencana penguatan permodalan agar fleksibilitas keuangan tidak tergerus pada siklus yang kurang menguntungkan."
    }, {
      h: "7. Kesimpulan Analis",
      b: "Secara keseluruhan, kesehatan keuangan perusahaan tergolong solid dengan pertumbuhan pendapatan dan marjin yang konsisten serta likuiditas yang kuat. Fokus perbaikan sebaiknya diarahkan pada tiga hal: (i) mengembalikan konversi kas melalui efisiensi modal kerja, (ii) mengendalikan laju penambahan utang, dan (iii) memperbaiki perputaran persediaan agar sejalan dengan benchmark. Dengan eksekusi pada ketiga area tersebut, profil keuangan perusahaan berpeluang naik dari kategori 'Sehat' menuju 'Sangat Sehat'."
    }],
    // Red flags & concern dari analisis keuangan (bukan fraud)
    concerns: [{
      title: "Rasio utang meningkat melewati benchmark",
      level: "warning",
      area: "Solvabilitas",
      metric: "DER 1,12× (bmk 1,00×)",
      nilai: "1,12×",
      benchmark: "1,00×",
      tren: "Memburuk",
      detail: "Debt to Equity naik dari 0,98× ke 1,12× akibat pendanaan ekspansi via utang. Interest Coverage turun ke 3,20×.",
      implication: "Fleksibilitas keuangan menyempit; risiko tekanan bila suku bunga naik atau arus kas melemah.",
      rekomendasi: "Susun rencana penguatan permodalan dan pantau kepatuhan kovenan; batasi penambahan utang baru."
    }, {
      title: "Free Cash Flow menurun meski laba naik",
      level: "negative",
      area: "Arus Kas",
      metric: "FCF -4,2% YoY",
      nilai: "-4,2%",
      benchmark: "> 0%",
      tren: "Memburuk",
      detail: "Laba bersih tumbuh 8,7% namun FCF justru turun 4,2% karena kebutuhan modal kerja dan capex meningkat.",
      implication: "Kualitas laba perlu dicermati — pertumbuhan belum sepenuhnya terkonversi menjadi kas.",
      rekomendasi: "Perketat manajemen modal kerja dan tinjau prioritas belanja modal untuk memulihkan konversi kas."
    }, {
      title: "Perputaran persediaan di bawah standar industri",
      level: "warning",
      area: "Modal Kerja",
      metric: "5,4× (bmk 6,0×)",
      nilai: "5,4×",
      benchmark: "6,0×",
      tren: "Stabil",
      detail: "Persediaan berputar lebih lambat dari benchmark, mengikat kas dan menaikkan risiko keusangan stok.",
      implication: "Siklus konversi kas memanjang; potensi penurunan nilai persediaan bila permintaan melemah.",
      rekomendasi: "Terapkan kebijakan persediaan berbasis permintaan dan identifikasi stok lambat untuk dilepas."
    }, {
      title: "Piutang tumbuh lebih cepat dari penjualan",
      level: "warning",
      area: "Kualitas Pendapatan",
      metric: "AR +19% vs Sales +12%",
      nilai: "+19%",
      benchmark: "≤ +12%",
      tren: "Memburuk",
      detail: "Pertumbuhan piutang usaha melampaui pertumbuhan penjualan, indikasi pelonggaran kebijakan kredit.",
      implication: "Risiko piutang tak tertagih dan tekanan likuiditas bila kolektibilitas memburuk.",
      rekomendasi: "Tinjau kebijakan kredit dan perkuat penagihan; pantau aging piutang secara berkala."
    }, {
      title: "Konsentrasi pada segmen tunggal",
      level: "info",
      area: "Diversifikasi",
      metric: "±68% pendapatan",
      nilai: "±68%",
      benchmark: "< 50%",
      tren: "Stabil",
      detail: "Mayoritas pendapatan bersumber dari satu segmen produk utama.",
      implication: "Sensitivitas tinggi terhadap siklus permintaan segmen tersebut; perlu diversifikasi bertahap.",
      rekomendasi: "Rancang peta diversifikasi pendapatan bertahap ke segmen atau pasar baru."
    }]
  },
  // Risk & fraud result
  risk: {
    score: 64,
    level: "high",
    matrix: [
    // rows = dampak (tinggi→rendah), cols = kemungkinan (rendah→tinggi)
    ["moderate", "high", "high", "critical", "critical"], ["low", "moderate", "high", "high", "critical"], ["low", "moderate", "moderate", "high", "high"], ["low", "low", "moderate", "moderate", "high"], ["low", "low", "low", "moderate", "moderate"]],
    flags: [{
      title: "Lonjakan piutang tak tertagih",
      level: "critical",
      area: "Piutang",
      detail: "Kenaikan 46% AR aging >90 hari tanpa penjelasan memadai; indikasi channel stuffing.",
      modus: "Fictitious revenue"
    }, {
      title: "Transaksi pihak berelasi tak wajar",
      level: "high",
      area: "Related Party",
      detail: "Pembelian bahan baku 18% di atas harga pasar dari entitas terafiliasi.",
      modus: "Related-party abuse"
    }, {
      title: "Gap rekonsiliasi kas",
      level: "high",
      area: "Kas & Bank",
      detail: "Selisih Rp 12,4 M antara buku besar dan rekening koran Q3.",
      modus: "Cash misappropriation"
    }, {
      title: "Kapitalisasi beban berlebih",
      level: "moderate",
      area: "Aset Tetap",
      detail: "Beban pemeliharaan dikapitalisasi untuk memoles laba.",
      modus: "Improper capitalization"
    }],
    recommendation: "Direkomendasikan audit forensik lanjutan pada siklus pendapatan dan transaksi pihak berelasi, disertai konfirmasi pihak ketiga atas saldo piutang material."
  },
  // Transformation roadmap
  transform: {
    horizon: "2025 – 2029",
    ambition: "Menjadi pemain manufaktur otomotif terintegrasi terdepan di Asia Tenggara dengan margin EBITDA 24% dan lini kendaraan listrik yang matang.",
    pillars: [{
      name: "Efisiensi Operasional",
      icon: "gauge",
      target: "-320 bps COGS"
    }, {
      name: "Pertumbuhan Digital",
      icon: "cpu",
      target: "+Rp 1,4 T revenue baru"
    }, {
      name: "Portofolio EV",
      icon: "battery-charging",
      target: "3 model EV"
    }, {
      name: "Tata Kelola & ESG",
      icon: "leaf",
      target: "ESG rating A"
    }],
    phases: [{
      year: "2025",
      title: "Stabilisasi & Fondasi",
      items: ["Konsolidasi struktur biaya", "Perbaikan tata kelola piutang", "Audit forensik selesai"],
      invest: "Rp 180 M"
    }, {
      year: "2026",
      title: "Optimasi Inti",
      items: ["Otomasi 2 lini produksi", "Integrasi ERP terpadu", "Program lean manufacturing"],
      invest: "Rp 420 M"
    }, {
      year: "2027",
      title: "Ekspansi Digital",
      items: ["Kanal penjualan D2C", "Platform after-sales digital", "Kemitraan fintech pembiayaan"],
      invest: "Rp 610 M"
    }, {
      year: "2028",
      title: "Diversifikasi EV",
      items: ["Peluncuran 2 model EV", "Kemitraan baterai", "Jaringan charging pilot"],
      invest: "Rp 980 M"
    }, {
      year: "2029",
      title: "Kepemimpinan Pasar",
      items: ["Ekspansi regional ASEAN", "Model EV ke-3", "Target EBITDA 24%"],
      invest: "Rp 1,2 T"
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/data.js", error: String((e && e.message) || e) }); }

// ui_kits/console/landing.jsx
try { (() => {
/* global React, Icon */

const LP_CSS = `
.lp-stage{position:absolute;inset:0;overflow-y:auto;font-family:var(--font-sans);color:#fff;background:#081324;display:flex;flex-direction:column;min-height:100%;
  background-image:
    radial-gradient(120% 90% at 82% 8%, rgba(18,163,180,0.20) 0%, rgba(18,163,180,0) 46%),
    radial-gradient(90% 80% at 8% 100%, rgba(29,66,112,0.55) 0%, rgba(29,66,112,0) 55%),
    linear-gradient(160deg, #0F2A50 0%, #0A1B33 60%, #081324 100%);}
.lp-decor{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0}
.lp-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px);background-size:56px 56px;-webkit-mask-image:radial-gradient(80% 70% at 50% 40%,#000 0%,transparent 80%);mask-image:radial-gradient(80% 70% at 50% 40%,#000 0%,transparent 80%)}
.lp-bladeline{position:absolute;top:6%;right:12%;width:2px;height:460px;transform:rotate(32deg);transform-origin:top;background:linear-gradient(180deg,rgba(107,216,228,0) 0%,rgba(107,216,228,0.8) 18%,rgba(18,163,180,0.9) 55%,rgba(14,37,71,0) 100%);box-shadow:0 0 24px rgba(47,186,201,0.5)}
.lp-top{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:30px 44px}
.lp-top img{height:28px;width:auto;display:block}
.lp-top .lp-r{display:flex;align-items:center;gap:22px;font-size:13px;color:rgba(255,255,255,0.62)}
.lp-top .lp-r a{color:rgba(255,255,255,0.62);text-decoration:none;transition:color .14s}
.lp-top .lp-r a:hover{color:#fff}
.lp-hero{position:relative;z-index:2;flex:1;display:flex;flex-direction:column;justify-content:center;max-width:1120px;width:100%;margin:0 auto;padding:30px 44px 56px}
.lp-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--cyan-300);margin-bottom:20px}
.lp-eyebrow::before{content:"";width:26px;height:1.5px;background:var(--cyan-300)}
.lp-h1{font-size:clamp(32px,4.2vw,54px);font-weight:800;letter-spacing:-0.025em;line-height:1.08;color:#fff;margin:0;max-width:17ch}
.lp-h1 .lp-acc{background:linear-gradient(120deg,#6BD8E4 0%,#2FBAC9 50%,#12A3B4 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.lp-lede{font-size:clamp(14px,1.4vw,17px);line-height:1.6;color:rgba(255,255,255,0.72);max-width:54ch;margin:20px 0 0}
.lp-choices{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:40px;max-width:820px}
.lp-choice{position:relative;text-align:left;cursor:pointer;display:flex;flex-direction:column;padding:26px 26px 24px;border-radius:var(--radius-xl);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:#fff;transition:transform .2s cubic-bezier(0.16,1,0.3,1),border-color .2s,background .2s,box-shadow .2s;overflow:hidden}
.lp-choice:hover{transform:translateY(-4px);border-color:rgba(107,216,228,0.5);background:rgba(255,255,255,0.06);box-shadow:0 20px 50px rgba(0,0,0,0.4)}
.lp-choice .lp-ic{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:20px}
.lp-choice.lp-primary .lp-ic{background:linear-gradient(135deg,#6BD8E4 0%,#12A3B4 45%,#0E2547 120%);color:#fff}
.lp-choice.lp-secondary .lp-ic{background:linear-gradient(135deg,#6BD8E4 0%,#12A3B4 45%,#0E2547 120%);color:#fff}
.lp-choice h3{font-size:20px;font-weight:700;letter-spacing:-0.01em;color:#fff;margin:0}
.lp-choice p{font-size:13.5px;line-height:1.55;color:rgba(255,255,255,0.62);margin:7px 0 0}
.lp-cta{display:inline-flex;align-items:center;gap:8px;margin-top:20px;font-size:14px;font-weight:600;color:var(--cyan-300);transition:gap .14s}
.lp-choice:hover .lp-cta{gap:12px}
.lp-choice.lp-primary::after{content:"";position:absolute;right:-40px;bottom:-40px;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,rgba(18,163,180,0.35) 0%,transparent 70%);pointer-events:none}
.lp-meta{display:flex;align-items:center;gap:8px;margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.10);font-size:12px;color:rgba(255,255,255,0.5)}
.lp-dots{display:inline-flex}
.lp-dot{width:22px;height:22px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:#fff;margin-right:-6px;border:1.5px solid #0A1B33}
.lp-foot{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:22px 44px;font-size:12px;color:rgba(255,255,255,0.4);border-top:1px solid rgba(255,255,255,0.07)}
.lp-foot .lp-pills{display:flex;gap:8px}
.lp-foot .lp-pill{padding:4px 10px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.09);color:rgba(255,255,255,0.6)}
@media (max-width:760px){.lp-choices{grid-template-columns:1fr}.lp-top,.lp-hero,.lp-foot{padding-left:24px;padding-right:24px}}
`;
function LandingScreen({
  onContinue,
  onNew
}) {
  React.useEffect(() => {
    if (!document.getElementById("lp-style")) {
      const s = document.createElement("style");
      s.id = "lp-style";
      s.textContent = LP_CSS;
      document.head.appendChild(s);
    }
  }, []);
  const logo = window.__resources && window.__resources.logoOnDark || "../../assets/stratix-logo-light.png";
  return /*#__PURE__*/React.createElement("div", {
    className: "lp-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lp-decor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lp-grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lp-bladeline"
  })), /*#__PURE__*/React.createElement("div", {
    className: "lp-top"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "STRATIX"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lp-r"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Dokumentasi"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Bantuan"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onContinue();
    },
    style: {
      color: "#fff",
      fontWeight: 600
    }
  }, "Masuk"))), /*#__PURE__*/React.createElement("div", {
    className: "lp-hero"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lp-eyebrow"
  }, "Konsultan AI \xB7 Strategy with X Factor"), /*#__PURE__*/React.createElement("h1", {
    className: "lp-h1"
  }, "Analisis awal nan ", /*#__PURE__*/React.createElement("span", {
    className: "lp-acc"
  }, "tajam"), ", strategi tanpa basa-basi."), /*#__PURE__*/React.createElement("p", {
    className: "lp-lede"
  }, "Satu ruang kerja untuk menilai keuangan, mengulas risiko & fraud, dan menyusun rencana transformasi lima tahun \u2014 berdasarkan dokumen dan data."), /*#__PURE__*/React.createElement("div", {
    className: "lp-choices"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lp-choice lp-secondary",
    role: "button",
    tabIndex: 0,
    onClick: onContinue
  }, /*#__PURE__*/React.createElement("div", {
    className: "lp-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "folder-open",
    s: 24
  })), /*#__PURE__*/React.createElement("h3", null, "Lanjutkan Case"), /*#__PURE__*/React.createElement("p", null, "Buka kembali analisis yang sudah ada di Pustaka Case Anda dan lanjutkan pekerjaan."), /*#__PURE__*/React.createElement("div", {
    className: "lp-meta"
  }, /*#__PURE__*/React.createElement("span", null, "Lanjutkan dari analisis terakhir Anda")), /*#__PURE__*/React.createElement("span", {
    className: "lp-cta"
  }, "Buka Pustaka Case ", /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-right",
    s: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lp-choice lp-primary",
    role: "button",
    tabIndex: 0,
    onClick: onNew
  }, /*#__PURE__*/React.createElement("div", {
    className: "lp-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "plus",
    s: 24
  })), /*#__PURE__*/React.createElement("h3", null, "Buat Case Baru"), /*#__PURE__*/React.createElement("p", null, "Mulai analisis perusahaan baru \u2014 indeks case dibuat otomatis, lalu isi Data Primer."), /*#__PURE__*/React.createElement("div", {
    className: "lp-meta"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "sparkles",
    s: 15
  }), /*#__PURE__*/React.createElement("span", null, "Isi Data Primer otomatis via AI dari dokumen atau website")), /*#__PURE__*/React.createElement("span", {
    className: "lp-cta"
  }, "Mulai sekarang ", /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-right",
    s: 16
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "lp-foot"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 STRATIX \xB7 Konsultan AI"), /*#__PURE__*/React.createElement("div", {
    className: "lp-pills"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lp-pill"
  }, "Analis Keuangan"), /*#__PURE__*/React.createElement("span", {
    className: "lp-pill"
  }, "Risiko & Fraud"), /*#__PURE__*/React.createElement("span", {
    className: "lp-pill"
  }, "Transformasi"))));
}
Object.assign(window, {
  LandingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/library.jsx
try { (() => {
/* global React, CompanyMark, Icon, refreshIcons, SectionTitle */
const LibNS = window.STRATIXDesignSystem_72cbdd;

/* ---------- Pustaka Case (library) ---------- */
function CaseLogo({
  c,
  size = 40,
  radius = 10
}) {
  if (c.logo) {
    return /*#__PURE__*/React.createElement("img", {
      src: c.logo,
      alt: c.company,
      style: {
        width: size,
        height: size,
        borderRadius: radius,
        objectFit: "contain",
        background: "#fff",
        border: "1px solid var(--border)",
        padding: 3,
        flexShrink: 0
      }
    });
  }
  return /*#__PURE__*/React.createElement(CompanyMark, {
    initials: c.initials,
    color: c.logoColor,
    size: size,
    radius: radius
  });
}
function CaseLibrary({
  cases,
  onOpen,
  onNew
}) {
  const {
    Card,
    Badge,
    Input,
    Button
  } = LibNS;
  const healthTone = {
    "Sehat": "positive",
    "Waspada": "warning",
    "Kritis": "negative"
  };
  const [view, setView] = React.useState("table");
  React.useEffect(refreshIcons);
  const AgentDots = ({
    agents
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, agents.length ? agents.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    title: a,
    style: {
      width: 24,
      height: 24,
      borderRadius: 6,
      background: "var(--bg-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: a === "finance" ? "line-chart" : a === "risk" ? "shield-alert" : "git-branch",
    s: 13
  }))) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-faint)"
    }
  }, "\u2014"));
  const cell = {
    padding: "12px 16px",
    borderBottom: "1px solid var(--border-subtle)",
    whiteSpace: "nowrap",
    verticalAlign: "middle"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 22,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement(Input, {
    prefix: /*#__PURE__*/React.createElement(Icon, {
      n: "search",
      s: 15
    }),
    placeholder: "Cari case atau perusahaan\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      padding: 3,
      background: "var(--bg-subtle)",
      borderRadius: "var(--radius-md)",
      gap: 2
    }
  }, [["table", "table-2", "Tabel"], ["card", "layout-grid", "Kartu"]].map(([m, ic, lbl]) => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => setView(m),
    title: lbl,
    "aria-label": lbl,
    style: {
      width: 36,
      height: 30,
      border: "none",
      borderRadius: "var(--radius-sm)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: view === m ? "var(--surface)" : "transparent",
      color: view === m ? "var(--accent-hover)" : "var(--text-muted)",
      boxShadow: view === m ? "var(--shadow-xs)" : "none",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: ic,
    s: 16
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "sliders-horizontal",
      s: 16
    })
  }, "Filter"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "plus",
      s: 16
    }),
    onClick: onNew
  }, "Case Baru")), view === "table" && /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      overflowX: "auto",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ["Perusahaan", "Sektor", "Status", "Revenue", "Kesehatan", "Agen", ""].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: h === "Revenue" ? "right" : "left",
      padding: "11px 16px",
      whiteSpace: "nowrap",
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      letterSpacing: "var(--ls-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      background: "var(--bg-subtle)",
      borderBottom: "1px solid var(--border)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, cases.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.id,
    onClick: () => onOpen(c),
    style: {
      cursor: "pointer",
      transition: "background var(--dur-fast) var(--ease-standard)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--surface-sunken)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: cell
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(CaseLogo, {
    c: c,
    size: 38,
    radius: 9
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-strong)",
      letterSpacing: "-0.01em"
    }
  }, c.company), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, c.id)))), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      color: "var(--text-body)"
    }
  }, c.sector), /*#__PURE__*/React.createElement("td", {
    style: cell
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    size: "sm"
  }, c.status)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, c.revenue)), /*#__PURE__*/React.createElement("td", {
    style: cell
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: healthTone[c.health],
    size: "sm",
    dot: true
  }, c.health)), /*#__PURE__*/React.createElement("td", {
    style: cell
  }, /*#__PURE__*/React.createElement(AgentDots, {
    agents: c.agents
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "chevron-right",
    s: 16,
    style: {
      color: "var(--text-faint)"
    }
  }))))))), view === "card" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onNew,
    style: {
      minHeight: 168,
      border: "1.5px dashed var(--border-strong)",
      borderRadius: "var(--radius-lg)",
      background: "transparent",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      color: "var(--text-muted)",
      fontFamily: "var(--font-sans)",
      transition: "all var(--dur-base) var(--ease-standard)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "var(--accent)";
      e.currentTarget.style.color = "var(--accent-hover)";
      e.currentTarget.style.background = "var(--accent-quiet)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "var(--border-strong)";
      e.currentTarget.style.color = "var(--text-muted)";
      e.currentTarget.style.background = "transparent";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "var(--grad-blade)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "plus",
    s: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, "Mulai Case Baru"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Analisis perusahaan baru")), cases.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.id,
    interactive: true,
    onClick: () => onOpen(c),
    padding: "none",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CaseLogo, {
    c: c,
    size: 44,
    radius: 11
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: healthTone[c.health],
    dot: true
  }, c.health)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-muted)",
      letterSpacing: "0.02em"
    }
  }, c.id), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--text-strong)",
      marginTop: 3,
      letterSpacing: "-0.01em",
      lineHeight: 1.25
    }
  }, c.company)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, c.sector), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    size: "sm"
  }, c.status))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "11px 18px",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-sunken)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, c.revenue), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-faint)",
      marginLeft: 6
    }
  }, "revenue")), /*#__PURE__*/React.createElement(AgentDots, {
    agents: c.agents
  }))))));
}

/* ---------- New Case: name + Data Primer ---------- */
function NewCaseFlow({
  nextIndex,
  onCancel,
  onCreate
}) {
  const {
    Card,
    Input,
    Select,
    Button,
    Badge,
    Textarea,
    Alert,
    Switch
  } = LibNS;
  const [step, setStep] = React.useState(1);
  const [company, setCompany] = React.useState("");
  const [autofilled, setAutofilled] = React.useState(false);
  const [filling, setFilling] = React.useState(false);
  const [form, setForm] = React.useState({
    founded: "",
    sector: "",
    bidang: "",
    revenue: "",
    revenueDate: "",
    status: "",
    website: "",
    logo: null
  });
  const [primerDocs, setPrimerDocs] = React.useState([]);
  const [afErr, setAfErr] = React.useState("");
  const AI = window.STX_AI;
  const primerFileRef = React.useRef(null);
  const onPrimerDocs = async e => {
    const files = [...(e.target.files || [])].slice(0, 3 - primerDocs.length);
    if (!files.length || !AI) return;
    setAfErr("");
    for (const f of files) {
      const r = await AI.parseFile(f);
      setPrimerDocs(prev => [...prev, {
        name: r.name,
        ext: r.ext,
        chars: r.chars,
        text: r.text
      }]);
    }
    if (e.target) e.target.value = "";
  };
  const stripPT = n => n.replace(/^\s*PT\.?\s*/i, "").trim();
  const fmtRevenue = raw => {
    if (!raw) return "—";
    const n = parseFloat(String(raw).replace(/[^\d]/g, ""));
    if (!n || isNaN(n)) return String(raw);
    if (n >= 1e12) return "Rp " + (n / 1e12).toFixed(2).replace(".", ",") + " T";
    if (n >= 1e9) return "Rp " + (n / 1e9).toFixed(1).replace(".", ",") + " M";
    if (n >= 1e6) return "Rp " + (n / 1e6).toFixed(1).replace(".", ",") + " Jt";
    return "Rp " + n.toLocaleString("id-ID");
  };
  const initials = (stripPT(company).slice(0, 3) || "XXX").toUpperCase();
  const caseId = `Case-${String(nextIndex).padStart(3, "0")}-${initials}`;
  const [caseName, setCaseName] = React.useState("");
  React.useEffect(refreshIcons);
  const logoRef = React.useRef(null);
  const onLogoPick = e => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setForm(prev => ({
      ...prev,
      logo: r.result
    }));
    r.readAsDataURL(f);
  };
  const runAutofill = async () => {
    if (!AI || !AI.hasKey()) {
      setAfErr("API Key Anthropic belum diatur. Buka Pengaturan → API Key.");
      return;
    }
    const ctx = primerDocs.map(d => `## ${d.name}\n${d.text}`).join("\n\n");
    if (!ctx.trim() && !form.website.trim()) {
      setAfErr("Unggah dokumen atau masukkan website perusahaan terlebih dahulu.");
      return;
    }
    setFilling(true);
    setAfErr("");
    try {
      const r = await AI.analyzePrimer({
        company,
        contextText: ctx,
        website: form.website
      });
      setForm(f => ({
        ...f,
        founded: r.founded || f.founded,
        sector: r.sector || f.sector,
        bidang: r.bidang || f.bidang,
        revenue: r.revenue || f.revenue,
        revenueDate: r.revenueDate || f.revenueDate,
        status: r.status || f.status
      }));
      if (!company && r.company) setCompany(r.company);
      setAutofilled(true);
    } catch (e) {
      setAfErr("Isi otomatis gagal: " + e.message);
    } finally {
      setFilling(false);
    }
  };
  const field = (label, node, hint) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--text-body)",
      marginBottom: 6
    }
  }, label), node, hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-faint)",
      marginTop: 5
    }
  }, hint));
  if (step === 1) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 620,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "xl"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, "Langkah 1 dari 2"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 24,
        marginTop: 6
      }
    }, "Buat Case Baru"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: "var(--text-muted)",
        marginTop: 6,
        marginBottom: 22
      }
    }, "Indeks case dibuat otomatis dari nomor urut dan tiga huruf pertama nama perusahaan (tanpa \"PT\")."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, field("Nama perusahaan", /*#__PURE__*/React.createElement(Input, {
      value: company,
      onChange: e => setCompany(e.target.value),
      placeholder: "mis. PT Astra Sejahtera Tbk"
    }), "Awalan \"PT\" diabaikan saat membuat indeks."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, field("Indeks case (otomatis)", /*#__PURE__*/React.createElement(Input, {
      value: caseId,
      disabled: true,
      prefix: /*#__PURE__*/React.createElement(Icon, {
        n: "hash",
        s: 15
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1.4
      }
    }, field("Nama case (dapat diedit)", /*#__PURE__*/React.createElement(Input, {
      value: caseName,
      onChange: e => setCaseName(e.target.value),
      placeholder: company ? stripPT(company) : "Perusahaan"
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onCancel
    }, "Batal"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        n: "arrow-right",
        s: 16
      }),
      disabled: !company.trim(),
      onClick: () => setStep(2)
    }, "Lanjut ke Data Primer"))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "xl"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Langkah 2 dari 2"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      marginTop: 6
    }
  }, "Data Primer Perusahaan")), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, caseId))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      marginBottom: 20,
      padding: 16,
      borderRadius: "var(--radius-lg)",
      background: "var(--accent-quiet)",
      border: "1px solid var(--teal-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      background: "var(--grad-blade)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "sparkles",
    s: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--text-strong)",
      fontSize: 14
    }
  }, "Isi otomatis dengan AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-body)",
      marginTop: 2
    }
  }, "Unggah hingga 3 dokumen atau masukkan website \u2014 AI akan mengisi Data Primer. Anda tetap dapat mengedit sebelum menyimpan."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: form.website,
    onChange: e => setForm({
      ...form,
      website: e.target.value
    }),
    prefix: /*#__PURE__*/React.createElement(Icon, {
      n: "globe",
      s: 15
    }),
    placeholder: "website perusahaan"
  })), /*#__PURE__*/React.createElement("input", {
    ref: primerFileRef,
    type: "file",
    accept: ".pdf,.xlsx,.xls,.csv,.docx,.txt",
    multiple: true,
    style: {
      display: "none"
    },
    onChange: onPrimerDocs
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "upload",
      s: 15
    }),
    disabled: primerDocs.length >= 3,
    onClick: () => primerFileRef.current && primerFileRef.current.click()
  }, "Unggah (", primerDocs.length, "/3)"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    loading: filling,
    iconLeft: filling ? null : /*#__PURE__*/React.createElement(Icon, {
      n: "wand-2",
      s: 15
    }),
    onClick: runAutofill
  }, filling ? "Membaca…" : "Isi otomatis")), primerDocs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 10
    }
  }, primerDocs.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: "var(--text-body)",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      padding: "4px 8px",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "file-text",
    s: 13
  }), d.name, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPrimerDocs(p => p.filter((_, j) => j !== i)),
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-faint)",
      display: "inline-flex",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "x",
    s: 12
  }))))), afErr && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--negative-600)",
      marginTop: 10,
      display: "flex",
      gap: 6,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "alert-circle",
    s: 13
  }), " ", afErr)))), autofilled && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "positive",
    title: "Data Primer terisi otomatis"
  }, "Tinjau dan sesuaikan sebelum menyimpan.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 18,
      padding: 14,
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-sunken)"
    }
  }, form.logo ? /*#__PURE__*/React.createElement("img", {
    src: form.logo,
    alt: "logo",
    style: {
      width: 56,
      height: 56,
      borderRadius: 12,
      objectFit: "contain",
      background: "#fff",
      border: "1px solid var(--border)",
      padding: 4,
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement(CompanyMark, {
    initials: initials,
    color: "#0E7C8B",
    size: 56,
    radius: 12
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "Logo perusahaan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      marginTop: 2,
      lineHeight: 1.5
    }
  }, "Kosongkan agar AI mengenali logo otomatis dari website atau dokumen. Kini menampilkan inisial ", /*#__PURE__*/React.createElement("strong", null, initials), ".")), /*#__PURE__*/React.createElement("input", {
    ref: logoRef,
    type: "file",
    accept: "image/*",
    style: {
      display: "none"
    },
    onChange: onLogoPick
  }), form.logo && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setForm({
      ...form,
      logo: null
    })
  }, "Hapus"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "upload",
      s: 15
    }),
    onClick: () => logoRef.current && logoRef.current.click()
  }, "Unggah logo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, field("Nama perusahaan", /*#__PURE__*/React.createElement(Input, {
    value: company,
    onChange: e => setForm && setCompany(e.target.value)
  })), field("Tahun berdiri", /*#__PURE__*/React.createElement(Input, {
    value: form.founded,
    onChange: e => setForm({
      ...form,
      founded: e.target.value
    }),
    placeholder: "mis. 1994"
  })), field("Sektor Industri (BI)", /*#__PURE__*/React.createElement(Select, {
    value: form.sector,
    onChange: e => setForm({
      ...form,
      sector: e.target.value
    }),
    placeholder: "Pilih sektor (klasifikasi BI)",
    options: (window.STX_DATA.sectorsBI || []).concat(form.sector && !(window.STX_DATA.sectorsBI || []).includes(form.sector) ? [form.sector] : [])
  })), field("Bidang usaha", /*#__PURE__*/React.createElement(Select, {
    value: form.bidang,
    onChange: e => setForm({
      ...form,
      bidang: e.target.value
    }),
    placeholder: "Pilih bidang usaha",
    options: (window.STX_DATA.bidangUsaha || []).concat(form.bidang && !(window.STX_DATA.bidangUsaha || []).includes(form.bidang) ? [form.bidang] : [])
  })), field("Revenue tahunan", /*#__PURE__*/React.createElement(Input, {
    value: form.revenue,
    onChange: e => setForm({
      ...form,
      revenue: e.target.value
    }),
    prefix: "Rp",
    placeholder: "4.820.000.000.000"
  })), field("Per bulan / tahun", /*#__PURE__*/React.createElement(Input, {
    type: "month",
    value: form.revenueDate,
    onChange: e => setForm({
      ...form,
      revenueDate: e.target.value
    })
  }), "Periode acuan angka revenue."), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, field("Status perusahaan", /*#__PURE__*/React.createElement(Select, {
    value: form.status,
    onChange: e => setForm({
      ...form,
      status: e.target.value
    }),
    placeholder: "Pilih status",
    options: ["BUMN", "Multinasional", "Swasta Nasional", "SME", "UMKM"]
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-left",
      s: 16
    }),
    onClick: () => setStep(1)
  }, "Kembali"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "check",
      s: 16
    }),
    onClick: () => onCreate({
      id: caseId,
      name: caseName || company + " — Due Diligence",
      company,
      initials,
      logoColor: "#0E7C8B",
      logo: form.logo || null,
      sector: form.sector || "—",
      bidang: form.bidang || "",
      status: form.status || "—",
      founded: form.founded,
      website: form.website || "",
      revenue: fmtRevenue(form.revenue),
      revenueDate: form.revenueDate,
      docText: primerDocs,
      updated: "baru saja",
      agents: [],
      analysis: {},
      health: "Sehat"
    })
  }, "Simpan Data Primer"))));
}
Object.assign(window, {
  CaseLibrary,
  NewCaseFlow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/library.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/settings.jsx
try { (() => {
/* global React, Icon, refreshIcons, SectionTitle */
const SetNS = window.STRATIXDesignSystem_72cbdd;
function Settings() {
  const {
    Card,
    CardHeader,
    Input,
    Button,
    Badge,
    Switch,
    Alert,
    Tabs
  } = SetNS;
  const [provider, setProvider] = React.useState("anthropic");
  const [show, setShow] = React.useState(false);
  const [apiKey, setApiKey] = React.useState(() => window.STX_AI ? window.STX_AI.getKey() : "");
  const [saved, setSaved] = React.useState(false);
  const connected = !!apiKey;
  const saveKey = () => {
    if (window.STX_AI) window.STX_AI.setKey(apiKey.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };
  React.useEffect(refreshIcons);
  const providers = [{
    id: "anthropic",
    name: "Anthropic",
    model: "Claude Sonnet 4.5",
    icon: "sparkles",
    color: "#0E7C8B",
    note: "Direkomendasikan untuk analisis dokumen panjang."
  }, {
    id: "gemini",
    name: "Google Gemini",
    model: "Gemini 2.5 Pro",
    icon: "gem",
    color: "#2A578C",
    note: "Konteks sangat besar, multimodal."
  }, {
    id: "openai",
    name: "OpenAI",
    model: "GPT-4o",
    icon: "brain-circuit",
    color: "#12855A",
    note: "Serbaguna, cepat."
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: "ai",
      label: "Model AI",
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "cpu",
        s: 15
      })
    }, {
      value: "akun",
      label: "Akun",
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "user",
        s: 15
      })
    }, {
      value: "ekspor",
      label: "Ekspor",
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "file-output",
        s: 15
      })
    }]
  })), /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Konfigurasi",
    title: "Penyedia Model AI"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 12,
      marginBottom: 20
    }
  }, providers.map(p => {
    const on = provider === p.id;
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: () => setProvider(p.id),
      style: {
        textAlign: "left",
        padding: 16,
        borderRadius: "var(--radius-lg)",
        cursor: "pointer",
        background: on ? "var(--accent-quiet)" : "var(--surface)",
        border: on ? "1.5px solid var(--accent)" : "1px solid var(--border)",
        boxShadow: on ? "var(--shadow-sm)" : "none",
        transition: "all var(--dur-fast) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 10,
        background: "var(--navy-900)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: p.icon,
      s: 19
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 999,
        border: on ? "5px solid var(--accent)" : "2px solid var(--border-strong)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "var(--text-strong)",
        marginTop: 12
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--text-muted)",
        marginTop: 2
      }
    }, p.model), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--text-faint)",
        marginTop: 8,
        lineHeight: 1.4
      }
    }, p.note));
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "API Key",
    subtitle: `Kunci untuk ${providers.find(p => p.id === provider).name}`,
    action: /*#__PURE__*/React.createElement(Badge, {
      tone: connected ? "positive" : "neutral",
      dot: true
    }, connected ? "Terhubung" : "Belum diatur")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: show ? "text" : "password",
    value: apiKey,
    onChange: e => setApiKey(e.target.value),
    placeholder: provider === "anthropic" ? "sk-ant-api03-…" : "masukkan API key",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      n: "key-round",
      s: 15
    }),
    suffix: /*#__PURE__*/React.createElement("button", {
      onClick: () => setShow(!show),
      style: {
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--text-muted)",
        display: "inline-flex",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: show ? "eye-off" : "eye",
      s: 16
    }))
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: saved ? "check" : "save",
      s: 15
    }),
    onClick: saveKey
  }, saved ? "Tersimpan" : "Simpan")), provider !== "anthropic" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Baru Anthropic yang aktif"
  }, "Integrasi fungsional saat ini untuk Anthropic Claude. Gemini & OpenAI menyusul.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Kunci disimpan di perangkat Anda"
  }, "API Key hanya disimpan di browser ini (localStorage) untuk memanggil model. STRATIX tidak mengirim kunci ke server mana pun selain penyedia AI."))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Preferensi Analisis"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, [["Baca dokumen asli (bukan ringkasan)", true], ["Simpan riwayat setiap analisis", true], ["Sertakan sitasi halaman dokumen", true], ["Isi otomatis Data Primer via AI", false]].map(([label, def]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 0",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: def
  }))))));
}
Object.assign(window, {
  Settings
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/settings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/shared.jsx
try { (() => {
/* global React */
const {
  StatCard,
  Badge,
  IconButton,
  Tooltip,
  Button
} = window.STRATIXDesignSystem_72cbdd;

/* React-owned Lucide icon: builds an inline <svg> from lucide.icons and injects it
   into a span via ref. React only manages the span (no JSX children), so re-renders
   never touch the SVG internals — no removeChild crashes. */
function lucideSvg(name, size) {
  const L = window.lucide;
  if (!L || !L.icons) return "";
  const pascal = String(name).replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
  const node = L.icons[pascal];
  if (!node) return "";
  const body = (node[2] || []).map(([tag, attrs]) => `<${tag} ${Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(" ")}></${tag}>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
}
function Icon({
  n,
  s = 18,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.innerHTML = lucideSvg(n, s);
  }, [n, s]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      width: s,
      height: s,
      ...style
    }
  });
}
function refreshIcons() {/* no-op: icons are React-owned inline SVG now */}

/* Company mark — colored rounded square with initials */
function CompanyMark({
  initials,
  color,
  size = 40,
  radius = 10
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: radius,
      flexShrink: 0,
      background: color,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: size * 0.36,
      letterSpacing: "-0.01em",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)"
    }
  }, initials);
}

/* ---------- App shell ---------- */
function AppShell({
  active,
  onNav,
  openCases = [],
  activeCaseId,
  dirtyIds = {},
  jobs = {},
  onSelectCase,
  onCloseCase,
  theme,
  onToggleTheme,
  children,
  title,
  subtitle,
  actions,
  onBack
}) {
  const nav = [{
    id: "library",
    label: "Pustaka Case",
    icon: "folders"
  }, {
    id: "workspace",
    label: "Ruang Kerja",
    icon: "layout-panel-left",
    disabled: !activeCaseId
  }, {
    id: "settings",
    label: "Pengaturan",
    icon: "settings"
  }];
  React.useEffect(refreshIcons);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      background: "var(--bg-app)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--sidebar-w)",
      flexShrink: 0,
      background: "var(--surface)",
      borderRight: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--topbar-h)",
      display: "flex",
      alignItems: "center",
      padding: "0 18px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: theme === "dark" ? window.__resources && window.__resources.logoOnDark || "../../assets/stratix-logo-light.png" : window.__resources && window.__resources.logoOnLight || "../../assets/stratix-logo.png",
    alt: "STRATIX",
    style: {
      height: 40,
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 12px",
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      padding: "6px 10px 8px"
    }
  }, "Navigasi"), nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => !n.disabled && onNav(n.id),
    disabled: n.disabled,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 11,
      height: 40,
      padding: "0 10px",
      border: "none",
      borderRadius: "var(--radius-md)",
      marginBottom: 2,
      cursor: n.disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      fontWeight: 600,
      textAlign: "left",
      color: active === n.id ? "var(--text-strong)" : n.disabled ? "var(--text-faint)" : "var(--text-muted)",
      background: active === n.id ? "var(--accent-quiet)" : "transparent",
      boxShadow: active === n.id ? "inset 3px 0 0 var(--accent)" : "none",
      opacity: n.disabled ? 0.6 : 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: n.icon,
    s: 18,
    style: {
      color: active === n.id ? "var(--accent)" : "currentColor"
    }
  }), n.label)), openCases.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      padding: "6px 10px 8px"
    }
  }, "Case Aktif (", openCases.length, ")"), openCases.map(c => {
    const on = c.id === activeCaseId;
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      style: {
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => onSelectCase(c.id),
      style: {
        display: "flex",
        gap: 9,
        alignItems: "center",
        padding: "8px 8px 8px 10px",
        background: on ? "var(--accent-quiet)" : "var(--bg-subtle)",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        boxShadow: on ? "inset 3px 0 0 var(--accent)" : "none"
      }
    }, c.logo ? /*#__PURE__*/React.createElement("img", {
      src: c.logo,
      alt: "",
      style: {
        width: 30,
        height: 30,
        borderRadius: 7,
        objectFit: "contain",
        background: "#fff",
        border: "1px solid var(--border)",
        padding: 2,
        flexShrink: 0
      }
    }) : /*#__PURE__*/React.createElement(CompanyMark, {
      initials: c.initials,
      color: c.logoColor,
      size: 30,
      radius: 7
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: "var(--text-strong)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, c.company), dirtyIds[c.id] && /*#__PURE__*/React.createElement("span", {
      title: "Belum disimpan",
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: "var(--warning-500)",
        flexShrink: 0
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10.5,
        color: "var(--text-muted)"
      }
    }, c.id)), /*#__PURE__*/React.createElement("button", {
      onClick: e => {
        e.stopPropagation();
        onCloseCase(c.id);
      },
      title: "Tutup case",
      "aria-label": "Tutup case",
      style: {
        width: 22,
        height: 22,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        borderRadius: 6,
        background: "transparent",
        color: "var(--text-faint)",
        cursor: "pointer"
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = "var(--negative-050)";
        e.currentTarget.style.color = "var(--negative-600)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "var(--text-faint)";
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "x",
      s: 13
    }))), on && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 1,
        marginTop: 4,
        marginLeft: 6
      }
    }, [["finance", "Analis Keuangan", "line-chart"], ["risk", "Risiko & Fraud", "shield-alert"], ["transform", "Transformasi", "git-branch"]].map(([id, label, icon]) => {
      const ran = (c.agents || []).includes(id);
      const job = jobs[c.id + ":" + id] || {};
      const busy = job.status === "running";
      const sel = active === "agent-" + id;
      const clickable = ran || busy;
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onClick: () => clickable && onNav("agent-" + id),
        disabled: !clickable,
        title: clickable ? label : label + " — belum dijalankan",
        style: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          height: 32,
          padding: "0 10px",
          border: "none",
          background: sel ? "var(--accent-quiet)" : "transparent",
          borderRadius: "var(--radius-sm)",
          cursor: clickable ? "pointer" : "not-allowed",
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 500,
          color: !clickable ? "var(--text-faint)" : sel ? "var(--text-strong)" : "var(--text-muted)",
          opacity: clickable ? 1 : 0.55,
          textAlign: "left"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        n: icon,
        s: 15
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1
        }
      }, label), busy && /*#__PURE__*/React.createElement("span", {
        title: "Analisis berjalan",
        style: {
          width: 12,
          height: 12,
          borderRadius: "50%",
          border: "2px solid var(--accent)",
          borderTopColor: "transparent",
          display: "inline-block",
          animation: "stx-spin 0.7s linear infinite",
          flexShrink: 0
        }
      }), !busy && ran && /*#__PURE__*/React.createElement("span", {
        style: {
          width: 6,
          height: 6,
          borderRadius: 999,
          background: "var(--positive-500)",
          flexShrink: 0
        }
      }));
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      background: "var(--grad-navy)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 700
    }
  }, "RA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--text-body)"
    }
  }, "Rizky A."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11
    }
  }, "Analis"))), /*#__PURE__*/React.createElement(Tooltip, {
    label: theme === "dark" ? "Mode terang" : "Mode gelap",
    placement: "top"
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "tema",
    variant: "ghost",
    onClick: onToggleTheme
  }, /*#__PURE__*/React.createElement(Icon, {
    n: theme === "dark" ? "sun" : "moon",
    s: 17
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--topbar-h)",
      flexShrink: 0,
      background: "var(--surface)",
      borderBottom: "1px solid var(--border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      minWidth: 0
    }
  }, onBack && /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "kembali",
    variant: "ghost",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-left",
    s: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: 700,
      color: "var(--text-strong)",
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, actions)), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 24
    }
  }, children)));
}

/* ---------- Lightweight charts (SVG, data-viz) ---------- */
function LineChart({
  series,
  labels,
  height = 150,
  color = "var(--teal-500)",
  fill = true,
  area2
}) {
  const w = 520,
    h = height,
    pad = 8;
  const all = area2 ? series.concat(area2) : series;
  const max = Math.max(...all) * 1.08,
    min = Math.min(...all) * 0.9;
  const x = (i, arr) => pad + i * (w - pad * 2) / (arr.length - 1);
  const y = v => h - pad - (v - min) / (max - min) * (h - pad * 2 - 16);
  const path = arr => arr.map((v, i) => `${i ? "L" : "M"}${x(i, arr).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const areaPath = `${path(series)} L${x(series.length - 1, series)},${h - pad} L${x(0, series)},${h - pad} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    width: "100%",
    height: height,
    preserveAspectRatio: "none",
    style: {
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "stx-area",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: color,
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: color,
    stopOpacity: "0"
  }))), [0.25, 0.5, 0.75].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: pad,
    x2: w - pad,
    y1: pad + g * (h - pad * 2),
    y2: pad + g * (h - pad * 2),
    stroke: "var(--data-grid)",
    strokeWidth: "1"
  })), fill && /*#__PURE__*/React.createElement("path", {
    d: areaPath,
    fill: "url(#stx-area)"
  }), area2 && /*#__PURE__*/React.createElement("path", {
    d: path(area2),
    fill: "none",
    stroke: "var(--slate-400)",
    strokeWidth: "2",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: path(series),
    fill: "none",
    stroke: color,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), series.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i, series),
    cy: y(v),
    r: "3.2",
    fill: "var(--surface)",
    stroke: color,
    strokeWidth: "2"
  })));
}
function BarChart({
  series,
  labels,
  height = 150,
  color = "var(--navy-700)"
}) {
  const max = Math.max(...series) * 1.1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 10,
      height,
      paddingTop: 8
    }
  }, series.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-muted)",
      marginBottom: 5
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 46,
      height: `${v / max * 100}%`,
      background: i === series.length - 1 ? "var(--grad-blade)" : color,
      borderRadius: "5px 5px 0 0",
      transition: "height var(--dur-slow) var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-faint)",
      marginTop: 7
    }
  }, labels[i]))));
}
function Donut({
  value,
  size = 96,
  stroke = 11,
  color = "var(--teal-500)",
  track = "var(--bg-subtle)",
  label
}) {
  const r = (size - stroke) / 2,
    c = 2 * Math.PI * r,
    off = c - value / 100 * c;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: track,
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeDasharray: c,
    strokeDashoffset: off,
    strokeLinecap: "round",
    style: {
      transition: "stroke-dashoffset var(--dur-slower) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 22,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, value), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--text-muted)"
    }
  }, label)));
}

/* Section heading */
function SectionTitle({
  eyebrow,
  title,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 4
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xl)",
      fontWeight: 700,
      color: "var(--text-strong)",
      letterSpacing: "-0.01em"
    }
  }, title)), right);
}
Object.assign(window, {
  Icon,
  refreshIcons,
  CompanyMark,
  AppShell,
  LineChart,
  BarChart,
  Donut,
  SectionTitle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/workspace.jsx
try { (() => {
/* global React, Icon, refreshIcons, CompanyMark, SectionTitle */
const WsNS = window.STRATIXDesignSystem_72cbdd;
function CaseWorkspace({
  caseCtx,
  docs,
  agents,
  onRunAgent,
  dirty,
  jobs,
  onStartJob,
  onClearJob,
  onMarkDirty,
  onSave,
  onRequestClose
}) {
  const {
    Card,
    Badge,
    Button,
    Alert,
    Tag,
    ProgressBar,
    Input,
    Textarea,
    Select,
    Dialog
  } = WsNS;
  const [err, setErr] = React.useState("");
  const [parsing, setParsing] = React.useState(false);
  const docFileRef = React.useRef(null);
  const [, force] = React.useReducer(x => x + 1, 0);
  const mark = () => {
    onMarkDirty && onMarkDirty();
  };
  const AI = window.STX_AI;
  const uploaded = caseCtx.docText || [];
  const onDocs = async e => {
    const files = [...(e.target.files || [])];
    if (!files.length || !AI) return;
    setParsing(true);
    setErr("");
    caseCtx.docText = caseCtx.docText || [];
    for (const f of files) {
      const r = await AI.parseFile(f);
      caseCtx.docText.push({
        name: r.name,
        ext: r.ext,
        chars: r.chars,
        text: r.text
      });
      force();
    }
    setParsing(false);
    mark();
  };
  const removeDoc = i => {
    caseCtx.docText.splice(i, 1);
    mark();
    force();
  };
  const logoRef = React.useRef(null);
  const onLogo = e => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      caseCtx.logo = r.result;
      mark();
      force();
    };
    r.readAsDataURL(f);
  };

  // ---- Edit Data Primer ----
  const [editing, setEditing] = React.useState(false);
  const [ef, setEf] = React.useState({});
  const [filling, setFilling] = React.useState(false);
  const [fillErr, setFillErr] = React.useState("");
  const editLogoRef = React.useRef(null);
  const openEdit = () => {
    setEf({
      company: caseCtx.company || "",
      founded: caseCtx.founded || "",
      sector: caseCtx.sector || "",
      bidang: caseCtx.bidang || "",
      status: caseCtx.status || "",
      revenue: caseCtx.revenue || "",
      revenueDate: caseCtx.revenueDate || "",
      website: caseCtx.website || "",
      logo: caseCtx.logo || null
    });
    setFilling(false);
    setFillErr("");
    setEditing(true);
  };
  const runAiUpdate = async () => {
    if (!AI || !AI.hasKey()) {
      setFillErr("API Key Anthropic belum diatur. Buka Pengaturan → API Key.");
      return;
    }
    const ctx = (caseCtx.docText || []).map(d => `## ${d.name}\n${d.text}`).join("\n\n");
    if (!ctx.trim() && !(ef.website || "").trim()) {
      setFillErr("Masukkan website atau unggah dokumen pada Langkah 1 terlebih dahulu.");
      return;
    }
    setFilling(true);
    setFillErr("");
    try {
      const r = await AI.analyzePrimer({
        company: ef.company,
        contextText: ctx,
        website: ef.website
      });
      setEf(p => ({
        ...p,
        founded: r.founded || p.founded,
        sector: r.sector || p.sector,
        bidang: r.bidang || p.bidang,
        revenue: r.revenue || p.revenue,
        revenueDate: r.revenueDate || p.revenueDate,
        status: r.status || p.status,
        company: !p.company && r.company ? r.company : p.company
      }));
    } catch (e) {
      setFillErr("Update otomatis gagal: " + e.message);
    } finally {
      setFilling(false);
    }
  };
  const onEditLogo = e => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setEf(p => ({
      ...p,
      logo: r.result
    }));
    r.readAsDataURL(f);
  };
  const saveEdit = () => {
    Object.assign(caseCtx, {
      company: ef.company,
      founded: ef.founded,
      sector: ef.sector,
      bidang: ef.bidang,
      status: ef.status,
      revenue: ef.revenue,
      revenueDate: ef.revenueDate,
      website: ef.website,
      logo: ef.logo,
      updated: "baru saja"
    });
    setEditing(false);
    mark();
    force();
  };
  const efield = (label, node) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--text-body)",
      marginBottom: 6
    }
  }, label), node);
  React.useEffect(refreshIcons);
  const fileIcon = {
    pdf: "file-text",
    xls: "sheet",
    xlsx: "sheet",
    csv: "sheet",
    doc: "file-type-2",
    docx: "file-type-2",
    txt: "file-text"
  };
  const jobOf = id => (jobs || {})[caseCtx.id + ":" + id] || {};
  const startAgent = id => {
    setErr("");
    onStartJob && onStartJob(caseCtx, id);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, dirty ? /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    dot: true
  }, "Perubahan belum disimpan") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-faint)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "check",
    s: 13
  }), " Semua perubahan tersimpan")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, dirty && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "save",
      s: 14
    }),
    onClick: onSave
  }, "Simpan"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "x",
      s: 14
    }),
    onClick: onRequestClose
  }, "Tutup"))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, caseCtx.logo ? /*#__PURE__*/React.createElement("img", {
    src: caseCtx.logo,
    alt: "logo",
    style: {
      width: 56,
      height: 56,
      borderRadius: 14,
      objectFit: "contain",
      background: "#fff",
      border: "1px solid var(--border)",
      padding: 4
    }
  }) : /*#__PURE__*/React.createElement(CompanyMark, {
    initials: caseCtx.initials,
    color: caseCtx.logoColor,
    size: 56,
    radius: 14
  }), /*#__PURE__*/React.createElement("input", {
    ref: logoRef,
    type: "file",
    accept: "image/*",
    style: {
      display: "none"
    },
    onChange: onLogo
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => logoRef.current && logoRef.current.click(),
    title: "Ganti logo",
    style: {
      position: "absolute",
      right: -4,
      bottom: -4,
      width: 22,
      height: 22,
      borderRadius: 999,
      border: "2px solid var(--surface)",
      background: "var(--brand)",
      color: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "camera",
    s: 11
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, caseCtx.id), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    size: "sm"
  }, caseCtx.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "var(--text-strong)",
      letterSpacing: "-0.01em",
      marginTop: 2
    }
  }, caseCtx.company)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22
    }
  }, [["Sektor", caseCtx.sector], ["Berdiri", caseCtx.founded], ["Revenue", caseCtx.revenue]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "var(--text-faint)",
      fontWeight: 700
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-strong)",
      marginTop: 3,
      fontFamily: k === "Revenue" || k === "Berdiri" ? "var(--font-mono)" : "inherit"
    }
  }, v)))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "pencil",
      s: 14
    }),
    onClick: openEdit
  }, "Edit Data Primer"))), /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Langkah 1",
    title: "Dokumen & Keterangan",
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      dot: true
    }, uploaded.length ? `${uploaded.length} dokumen terunggah` : `${docs.length} contoh`)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, uploaded.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-faint)",
      padding: "2px 2px 6px"
    }
  }, "Belum ada dokumen diunggah. Contoh di bawah hanya ilustrasi \u2014 unggah dokumen asli untuk dianalisis AI."), uploaded.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 12px",
      border: "1px solid var(--teal-400)",
      borderRadius: "var(--radius-md)",
      background: "var(--accent-quiet)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      background: "var(--surface)",
      color: "var(--accent-hover)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: fileIcon[d.ext] || "file",
    s: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-strong)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, d.chars.toLocaleString("id-ID"), " karakter terbaca")), /*#__PURE__*/React.createElement(Badge, {
    tone: d.chars > 40 ? "positive" : "warning",
    size: "sm",
    dot: true
  }, d.chars > 40 ? "terbaca" : "kosong"), /*#__PURE__*/React.createElement("button", {
    onClick: () => removeDoc(i),
    title: "Hapus",
    style: {
      width: 24,
      height: 24,
      border: "none",
      background: "transparent",
      color: "var(--text-faint)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "x",
    s: 14
  })))), uploaded.length === 0 && docs.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 12px",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sunken)",
      opacity: 0.65
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      background: "var(--bg-subtle)",
      color: "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: fileIcon[d.type] || "file",
    s: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-muted)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-faint)",
      fontFamily: "var(--font-mono)"
    }
  }, d.size, " \xB7 contoh")), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, d.kind))), /*#__PURE__*/React.createElement("input", {
    ref: docFileRef,
    type: "file",
    accept: ".pdf,.xlsx,.xls,.csv,.docx,.txt",
    multiple: true,
    style: {
      display: "none"
    },
    onChange: onDocs
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => docFileRef.current && docFileRef.current.click(),
    disabled: parsing,
    style: {
      marginTop: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: 44,
      border: "1.5px dashed var(--border-strong)",
      borderRadius: "var(--radius-md)",
      background: parsing ? "var(--bg-subtle)" : "transparent",
      color: "var(--text-muted)",
      cursor: parsing ? "wait" : "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "upload-cloud",
    s: 17
  }), " ", parsing ? "Memproses dokumen…" : "Unggah dokumen (PDF, Excel, Word, teks)"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--text-strong)",
      marginBottom: 8
    }
  }, "Keterangan tambahan"), /*#__PURE__*/React.createElement(Textarea, {
    value: caseCtx.notes || "",
    onChange: e => {
      caseCtx.notes = e.target.value;
      mark();
      force();
    },
    rows: 4,
    placeholder: "mis. Fokuskan pada siklus pendapatan dan piutang; soroti transaksi pihak berelasi."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-faint)",
      marginTop: 6
    }
  }, "Keterangan ini disertakan sebagai konteks tambahan saat agen berjalan."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 12,
      fontWeight: 700,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: "0.06em"
    }
  }, "Dokumen dikenali"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 8
    }
  }, uploaded.length ? uploaded.map((d, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "file-text",
      s: 12
    })
  }, d.name)) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-faint)"
    }
  }, "Belum ada dokumen \u2014 unggah untuk dianalisis.")))), err && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "negative",
    title: "Tidak dapat menjalankan analisis",
    onClose: () => setErr("")
  }, err)), /*#__PURE__*/React.createElement(SectionTitle, {
    eyebrow: "Langkah 2",
    title: "Pilih Agen Analisis",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, "Setiap agen membaca dokumen asli \u2014 bukan ringkasan.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, agents.map(a => {
    const job = jobOf(a.id);
    const isRun = job.status === "running";
    const done = caseCtx.agents.includes(a.id);
    return /*#__PURE__*/React.createElement(Card, {
      key: a.id,
      padding: "lg",
      style: {
        position: "relative",
        overflow: "hidden",
        borderColor: isRun ? a.color : "var(--border)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 12,
        background: a.bg,
        color: a.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: a.icon,
      s: 24
    })), isRun ? /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      size: "sm",
      dot: true
    }, "Berjalan") : done && /*#__PURE__*/React.createElement(Badge, {
      tone: "positive",
      size: "sm",
      dot: true
    }, "Selesai")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        color: "var(--text-strong)",
        marginTop: 14,
        letterSpacing: "-0.01em"
      }
    }, a.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        lineHeight: 1.55,
        marginTop: 7,
        minHeight: 74
      }
    }, a.desc), job.status === "error" && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--negative-600)",
        marginBottom: 8,
        display: "flex",
        gap: 6,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "alert-circle",
      s: 13
    }), " ", job.error), isRun ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      value: job.progress || 10,
      tone: "blade",
      showLabel: true,
      label: "Menganalisis dokumen\u2026"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 11.5,
        color: "var(--text-muted)",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "info",
      s: 12
    }), " Berjalan di latar belakang \u2014 boleh pindah menu.")) : done ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        n: "eye",
        s: 15
      }),
      onClick: () => onRunAgent(a.id)
    }, "Lihat Analisis"), /*#__PURE__*/React.createElement("button", {
      onClick: () => startAgent(a.id),
      style: {
        width: "100%",
        marginTop: 8,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        fontWeight: 600,
        color: "var(--text-muted)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        padding: "4px 0"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "refresh-cw",
      s: 13
    }), " Analisis ulang")) : /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        n: "play",
        s: 15
      }),
      onClick: () => startAgent(a.id),
      style: {
        marginTop: 12
      }
    }, "Jalankan agen"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        right: -20,
        bottom: -20,
        opacity: 0.05,
        color: a.color
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: a.icon,
      s: 120
    })));
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: editing,
    onClose: () => setEditing(false),
    title: "Edit Data Primer",
    description: caseCtx.id,
    width: 660,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setEditing(false)
    }, "Batal"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        n: "check",
        s: 15
      }),
      onClick: saveEdit
    }, "Simpan Perubahan"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: "58vh",
      overflowY: "auto",
      paddingRight: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderRadius: "var(--radius-md)",
      background: "var(--accent-quiet)",
      border: "1px solid var(--teal-400)",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: "var(--grad-blade)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "sparkles",
    s: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "Perbarui via AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-body)",
      marginTop: 2
    }
  }, "Masukkan atau ubah website perusahaan, AI akan memperbarui Data Primer. Tinjau sebelum menyimpan."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: ef.website,
    onChange: e => setEf(p => ({
      ...p,
      website: e.target.value
    })),
    prefix: /*#__PURE__*/React.createElement(Icon, {
      n: "globe",
      s: 15
    }),
    placeholder: "website perusahaan"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    loading: filling,
    iconLeft: filling ? null : /*#__PURE__*/React.createElement(Icon, {
      n: "wand-2",
      s: 14
    }),
    onClick: runAiUpdate
  }, filling ? "Memperbarui…" : "Update otomatis")), fillErr && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--negative-600)",
      marginTop: 10,
      display: "flex",
      gap: 6,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "alert-circle",
    s: 13
  }), " ", fillErr)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 16,
      padding: 12,
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sunken)"
    }
  }, ef.logo ? /*#__PURE__*/React.createElement("img", {
    src: ef.logo,
    alt: "logo",
    style: {
      width: 48,
      height: 48,
      borderRadius: 11,
      objectFit: "contain",
      background: "#fff",
      border: "1px solid var(--border)",
      padding: 3,
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement(CompanyMark, {
    initials: caseCtx.initials,
    color: caseCtx.logoColor,
    size: 48,
    radius: 11
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "Logo perusahaan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, "Ganti logo, atau kosongkan agar AI mengenali otomatis.")), /*#__PURE__*/React.createElement("input", {
    ref: editLogoRef,
    type: "file",
    accept: "image/*",
    style: {
      display: "none"
    },
    onChange: onEditLogo
  }), ef.logo && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setEf(p => ({
      ...p,
      logo: null
    }))
  }, "Hapus"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "upload",
      s: 14
    }),
    onClick: () => editLogoRef.current && editLogoRef.current.click()
  }, "Unggah")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, efield("Nama perusahaan", /*#__PURE__*/React.createElement(Input, {
    value: ef.company,
    onChange: e => setEf(p => ({
      ...p,
      company: e.target.value
    }))
  })), efield("Tahun berdiri", /*#__PURE__*/React.createElement(Input, {
    value: ef.founded,
    onChange: e => setEf(p => ({
      ...p,
      founded: e.target.value
    }))
  })), efield("Sektor Industri (BI)", /*#__PURE__*/React.createElement(Select, {
    value: ef.sector,
    onChange: e => setEf(p => ({
      ...p,
      sector: e.target.value
    })),
    placeholder: "Pilih sektor (klasifikasi BI)",
    options: (window.STX_DATA.sectorsBI || []).concat(ef.sector && !(window.STX_DATA.sectorsBI || []).includes(ef.sector) ? [ef.sector] : [])
  })), efield("Bidang usaha", /*#__PURE__*/React.createElement(Select, {
    value: ef.bidang,
    onChange: e => setEf(p => ({
      ...p,
      bidang: e.target.value
    })),
    placeholder: "Pilih bidang usaha",
    options: (window.STX_DATA.bidangUsaha || []).concat(ef.bidang && !(window.STX_DATA.bidangUsaha || []).includes(ef.bidang) ? [ef.bidang] : [])
  })), efield("Revenue tahunan", /*#__PURE__*/React.createElement(Input, {
    value: ef.revenue,
    onChange: e => setEf(p => ({
      ...p,
      revenue: e.target.value
    }))
  })), efield("Per bulan / tahun", /*#__PURE__*/React.createElement(Input, {
    type: "month",
    value: ef.revenueDate,
    onChange: e => setEf(p => ({
      ...p,
      revenueDate: e.target.value
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, efield("Status perusahaan", /*#__PURE__*/React.createElement(Select, {
    value: ef.status,
    onChange: e => setEf(p => ({
      ...p,
      status: e.target.value
    })),
    options: ["BUMN", "Multinasional", "Swasta Nasional", "SME", "UMKM"]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, efield("Website perusahaan", /*#__PURE__*/React.createElement(Input, {
    value: ef.website,
    onChange: e => setEf(p => ({
      ...p,
      website: e.target.value
    })),
    prefix: /*#__PURE__*/React.createElement(Icon, {
      n: "globe",
      s: 15
    }),
    placeholder: "mis. perusahaan.co.id"
  })))))));
}
Object.assign(window, {
  CaseWorkspace
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/workspace.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.RiskBadge = __ds_scope.RiskBadge;

__ds_ns.RiskCell = __ds_scope.RiskCell;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
