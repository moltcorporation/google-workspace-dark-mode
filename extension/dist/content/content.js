// src/content/content.ts
function buildCustomTheme(custom) {
  const lighten = (hex, amt) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const r = Math.min(255, (num >> 16) + amt);
    const g = Math.min(255, (num >> 8 & 255) + amt);
    const b = Math.min(255, (num & 255) + amt);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };
  const darken = (hex, amt) => lighten(hex, -amt);
  return {
    bg: custom.bg,
    bgSecondary: lighten(custom.bg, 16),
    bgTertiary: lighten(custom.bg, 28),
    text: custom.text,
    textSecondary: darken(custom.text, 40),
    border: lighten(custom.bg, 32),
    accent: custom.accent,
    canvasBg: lighten(custom.bg, 12)
  };
}
var themes = {
  dim: {
    bg: "#1e1e2e",
    bgSecondary: "#2a2a3c",
    bgTertiary: "#353548",
    text: "#e0e0e8",
    textSecondary: "#a0a0b0",
    border: "#3a3a4c",
    accent: "#7c9cff",
    canvasBg: "#2a2a3c"
  },
  midnight: {
    bg: "#121220",
    bgSecondary: "#1a1a2e",
    bgTertiary: "#252538",
    text: "#d4d4e0",
    textSecondary: "#8888a0",
    border: "#2a2a40",
    accent: "#6b8aff",
    canvasBg: "#1a1a2e"
  },
  oled: {
    bg: "#000000",
    bgSecondary: "#0a0a0a",
    bgTertiary: "#1a1a1a",
    text: "#e0e0e0",
    textSecondary: "#808080",
    border: "#222222",
    accent: "#5b7bff",
    canvasBg: "#0a0a0a"
  }
};
function generateCSS(colors) {
  return `
    /* === Google Workspace Dark Mode v1.1 === */

    /* Global overrides */
    html, body {
      background-color: ${colors.bg} !important;
      color: ${colors.text} !important;
    }

    /* Top toolbar / app bar \u2014 Docs, Sheets, Slides, Drive */
    .docs-titlebar-buttons,
    .docs-menubar,
    .docs-menubar-menu,
    .docs-title-outer,
    .docs-toolbar-wrapper,
    .docs-material,
    #docs-chrome,
    .goog-toolbar,
    .goog-menubar,
    [role="toolbar"],
    [role="menubar"],
    header,
    .gb_Td, .gb_Ed, .gb_3d,
    .docs-branding-bar,
    .docs-primary-toolbars,
    .docs-titlebar-container,
    #gb,
    .gb_Fc, .gb_Gc, .gb_Hc {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
    }

    /* Menu dropdowns */
    .goog-menu,
    .goog-menuitem,
    .goog-submenu,
    [role="menu"],
    [role="menuitem"],
    [role="listbox"],
    [role="option"],
    .docs-material .goog-menu,
    .goog-menuitem-content,
    .goog-option,
    .apps-menu-hide-mnemonics {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
      border-color: ${colors.border} !important;
    }

    [role="menuitem"]:hover,
    .goog-menuitem-highlight,
    .goog-option-selected,
    .goog-menuitem-hover {
      background-color: ${colors.bgTertiary} !important;
    }

    /* Sidebar panels */
    .docs-explore-widget,
    .companion-widget,
    [role="complementary"],
    .script-application-sidebar,
    .docs-side-panel,
    .navigation-widget-hat,
    .kix-appview-editor-container,
    .docs-companion-app-container,
    .docs-dictionary-widget,
    .docs-outline-container {
      background-color: ${colors.bg} !important;
      color: ${colors.text} !important;
    }

    /* Document canvas area \u2014 editor background */
    .kix-appview-editor,
    .docs-editor,
    .kix-page-paginated,
    .docs-editor-container,
    .kix-paginateddocumentplugin {
      background-color: ${colors.bg} !important;
    }

    /* The actual page/canvas in Docs */
    .kix-page-content-wrapper,
    .kix-page {
      background-color: ${colors.canvasBg} !important;
    }

    /* Docs ruler */
    .kix-ruler,
    .kix-ruler-top-container,
    .kix-horizontal-ruler-container {
      background-color: ${colors.bgSecondary} !important;
      border-color: ${colors.border} !important;
    }

    /* ---- Sheets specific ---- */
    .waffle-content-container,
    .grid-container,
    .native-scrollbar,
    .docs-sheet-container-bar,
    .docs-sheet-tab,
    .docs-sheet-active-tab,
    .docs-sheet-tab-caption,
    .waffle,
    .waffle-collaborator-marker-stripe,
    .docs-sheet-toolbar-bar {
      background-color: ${colors.bg} !important;
      color: ${colors.text} !important;
    }

    /* Sheets cells and headers */
    .cell-input,
    .cell-input > div,
    .waffle td,
    .waffle th,
    .row-header-wrapper,
    .column-headers-container,
    .row-headers-container {
      color: ${colors.text} !important;
    }

    /* Sheets frozen rows/columns background */
    .frozen-row, .frozen-column,
    .row-header, .column-header {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
      border-color: ${colors.border} !important;
    }

    /* Sheets formula bar */
    .formulabar-input-container,
    .cell-name,
    .formulabar-formula,
    .waffle-name-box {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
    }

    /* Sheets bottom toolbar / tab bar */
    .docs-sheet-tab-bar,
    .docs-sheet-add-button,
    .docs-sheet-menu-button,
    .docs-sheet-status-bar {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
      border-color: ${colors.border} !important;
    }

    /* ---- Slides specific ---- */
    .punch-viewer-container,
    .punch-viewer-background,
    .punch-filmstrip-scroll,
    .punch-filmstrip,
    .punch-viewer-speakernotes-text-body,
    .punch-viewer-speakernotes-background,
    .punch-viewer-right-toolbox,
    .punch-viewer-left-toolbox,
    .punch-filmstrip-thumbnail,
    .punch-viewer-navbar,
    .punch-viewer-content {
      background-color: ${colors.bg} !important;
      color: ${colors.text} !important;
    }

    /* Slides panel and animations sidebar */
    .punch-animations-panel,
    .punch-transitions-panel,
    .punch-view-explore-panel {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
    }

    /* ---- Drive specific ---- */
    .a-s-tb-lc,
    [data-view-type],
    .a-s-La-N,
    .a-La-N,
    .a-b-nf-gjns,
    .a-nf-gjns,
    .a-s-tb-sc,
    .a-b-c,
    .a-J-ji,
    .a-t-R,
    .a-s-Li,
    .a-b-La-Nm,
    .a-s-Le-je,
    .a-s-tb-th {
      background-color: ${colors.bg} !important;
      color: ${colors.text} !important;
    }

    /* Drive file list */
    .a-s-tb-sc-Ye-bj,
    [role="row"],
    [role="gridcell"],
    [role="rowheader"],
    .a-s-gd,
    .a-b-gb-n,
    [data-target="doc"] {
      color: ${colors.text} !important;
    }

    /* Drive left nav */
    .a-b-nf,
    .a-b-nf-hd,
    .a-b-nf-hd-Ae {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
    }

    /* Drive hover states */
    .a-b-gb-n:hover,
    .a-b-gb-n.a-b-gb-n-Wd {
      background-color: ${colors.bgTertiary} !important;
    }

    /* ---- Shared UI elements ---- */

    /* Dialogs and modals */
    [role="dialog"],
    [role="alertdialog"],
    .modal-dialog,
    .docs-dialog,
    .goog-dialog,
    .modal-dialog-content,
    .picker-dialog,
    .picker-dialog-content {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
      border-color: ${colors.border} !important;
    }

    /* Buttons */
    .goog-button,
    .goog-flat-button,
    [role="button"],
    .goog-toolbar-button,
    .jfk-button {
      color: ${colors.text} !important;
    }

    /* Input fields */
    input, textarea, select,
    .docs-title-input,
    .docs-findinput-input,
    .docs-findbar-input {
      background-color: ${colors.bgTertiary} !important;
      color: ${colors.text} !important;
      border-color: ${colors.border} !important;
    }

    /* Find and replace bar */
    .docs-findbar,
    .docs-findinput-container {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
      border-color: ${colors.border} !important;
    }

    /* Tooltips */
    .goog-tooltip,
    [role="tooltip"],
    .docs-tp-popup {
      background-color: ${colors.bgTertiary} !important;
      color: ${colors.text} !important;
    }

    /* Links */
    a {
      color: ${colors.accent} !important;
    }

    /* Scrollbar styling */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background: ${colors.bg};
    }
    ::-webkit-scrollbar-thumb {
      background: ${colors.bgTertiary};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${colors.textSecondary};
    }

    /* Icons and SVGs \u2014 invert to work on dark bg */
    .docs-icon-img,
    .docs-icon-img-container img,
    .goog-toolbar-button .goog-toolbar-separator {
      filter: invert(0.85) !important;
    }

    /* Tab separators and borders */
    .docs-sheet-tab,
    .goog-tab,
    .goog-toolbar-separator {
      border-color: ${colors.border} !important;
    }

    /* Status bar / butterbar */
    .docs-butterbar-container,
    .docs-butterbar-wrap,
    .docs-butterbar-message {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
    }

    /* Comment threads */
    .docos-anchoreddocoview,
    .docos-docoview,
    .docos-replyview,
    .docos-input-textarea,
    .docos-streamdocoview,
    .docos-anchoredcontentreplyview {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
    }

    /* Share dialog and people chips */
    .docs-share-dialog,
    .docs-share-dialog-content,
    .docs-collab-bubble,
    .docs-collab-caret-label {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
    }

    /* Google account menu bar items */
    .gb_Nc, .gb_Oc, .gb_Pc, .gb_Rc {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
    }

    /* Prevent white flash on page load */
    html {
      color-scheme: dark !important;
    }
  `;
}
var STYLE_ID = "gws-dark-mode-styles";
var observer = null;
function resolveColors(themeName, customTheme) {
  if (themeName === "custom" && customTheme) {
    return buildCustomTheme(customTheme);
  }
  return themes[themeName] || null;
}
function applyTheme(themeName, customTheme) {
  const colors = resolveColors(themeName, customTheme);
  if (!colors) return;
  let styleEl = document.getElementById(STYLE_ID);
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = STYLE_ID;
    (document.head || document.documentElement).appendChild(styleEl);
  }
  styleEl.textContent = generateCSS(colors);
  startObserver(themeName, customTheme);
}
function removeTheme() {
  const styleEl = document.getElementById(STYLE_ID);
  if (styleEl) styleEl.remove();
  stopObserver();
}
function startObserver(themeName, customTheme) {
  stopObserver();
  const colors = resolveColors(themeName, customTheme);
  if (!colors) return;
  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;
        if (!document.getElementById(STYLE_ID)) {
          applyTheme(themeName, customTheme);
          return;
        }
        const iframes = node.tagName === "IFRAME" ? [node] : node.querySelectorAll("iframe");
        for (const iframe of iframes) {
          injectIntoIframe(iframe, themeName, customTheme);
        }
      }
    }
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}
function stopObserver() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
}
function injectIntoIframe(iframe, themeName, customTheme) {
  const colors = resolveColors(themeName, customTheme);
  if (!colors) return;
  const inject = () => {
    try {
      const doc = iframe.contentDocument;
      if (!doc) return;
      if (doc.getElementById(STYLE_ID)) return;
      const styleEl = doc.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = generateCSS(colors);
      (doc.head || doc.documentElement).appendChild(styleEl);
    } catch {
    }
  };
  if (iframe.contentDocument?.readyState === "complete") {
    inject();
  } else {
    iframe.addEventListener("load", inject, { once: true });
  }
}
function getCurrentApp() {
  const host = window.location.hostname;
  if (host === "docs.google.com") {
    if (window.location.pathname.startsWith("/spreadsheets")) return "sheets";
    if (window.location.pathname.startsWith("/presentation")) return "slides";
    return "docs";
  }
  if (host === "sheets.google.com") return "sheets";
  if (host === "slides.google.com") return "slides";
  if (host === "drive.google.com") return "drive";
  return "unknown";
}
function isInSchedule(schedule) {
  if (!schedule?.enabled) return true;
  const now = /* @__PURE__ */ new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const [startH, startM] = schedule.start.split(":").map(Number);
  const [endH, endM] = schedule.end.split(":").map(Number);
  const startMinutes = startH * 60 + startM;
  const endMinutes = endH * 60 + endM;
  if (startMinutes <= endMinutes) {
    return currentMinutes >= startMinutes && currentMinutes < endMinutes;
  } else {
    return currentMinutes >= startMinutes || currentMinutes < endMinutes;
  }
}
function getDocumentKey() {
  return window.location.pathname.split("/")[3] || window.location.pathname;
}
async function init() {
  const result = await chrome.storage.sync.get([
    "enabled",
    "theme",
    "isPro",
    "customTheme",
    "scheduledDarkMode",
    "perDocumentEnabled"
  ]);
  let enabled = result.enabled !== false;
  const theme = result.theme || "dim";
  const isPro = result.isPro === true;
  if (isPro && result.scheduledDarkMode?.enabled) {
    enabled = enabled && isInSchedule(result.scheduledDarkMode);
  }
  if (isPro && result.perDocumentEnabled) {
    const docKey = getDocumentKey();
    const docPrefs = await chrome.storage.sync.get(`doc_${docKey}`);
    const docPref = docPrefs[`doc_${docKey}`];
    if (docPref !== void 0) {
      enabled = docPref;
    }
  }
  if (enabled) {
    applyTheme(theme, isPro ? result.customTheme : void 0);
  }
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "sync") return;
    const newEnabled = changes.enabled?.newValue;
    const newTheme = changes.theme?.newValue;
    const newCustomTheme = changes.customTheme?.newValue;
    if (newEnabled === false) {
      chrome.storage.sync.get(["perDocumentEnabled", "isPro"], (data) => {
        if (data.isPro && data.perDocumentEnabled) {
          const docKey = getDocumentKey();
          chrome.storage.sync.set({ [`doc_${docKey}`]: false });
        }
      });
      removeTheme();
      return;
    }
    if (newEnabled === true || newTheme || newCustomTheme) {
      chrome.storage.sync.get(["enabled", "theme", "isPro", "customTheme", "scheduledDarkMode", "perDocumentEnabled"], (data) => {
        if (data.enabled === false) return;
        let shouldApply = true;
        if (data.isPro && data.scheduledDarkMode?.enabled) {
          shouldApply = isInSchedule(data.scheduledDarkMode);
        }
        if (shouldApply) {
          applyTheme(data.theme || "dim", data.isPro ? data.customTheme : void 0);
          if (data.isPro && data.perDocumentEnabled) {
            const docKey = getDocumentKey();
            chrome.storage.sync.set({ [`doc_${docKey}`]: true });
          }
        }
      });
    }
  });
  chrome.runtime.sendMessage({ type: "content-loaded", app: getCurrentApp() });
  if (isPro && result.scheduledDarkMode?.enabled) {
    setInterval(() => {
      chrome.storage.sync.get(["enabled", "theme", "isPro", "customTheme", "scheduledDarkMode"], (data) => {
        if (!data.isPro || !data.scheduledDarkMode?.enabled || data.enabled === false) return;
        const shouldBeOn = isInSchedule(data.scheduledDarkMode);
        const isOn = !!document.getElementById(STYLE_ID);
        if (shouldBeOn && !isOn) {
          applyTheme(data.theme || "dim", data.customTheme);
        } else if (!shouldBeOn && isOn) {
          removeTheme();
        }
      });
    }, 6e4);
  }
}
init();
