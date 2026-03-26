// src/content/content.ts
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
    /* === Google Workspace Dark Mode === */

    /* Global overrides for all Google Workspace apps */
    html, body {
      background-color: ${colors.bg} !important;
      color: ${colors.text} !important;
    }

    /* Top toolbar / app bar */
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
    .gb_Td,
    .gb_Ed,
    .gb_3d {
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
    .docs-material .goog-menu {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
      border-color: ${colors.border} !important;
    }

    [role="menuitem"]:hover,
    .goog-menuitem-highlight,
    .goog-option-selected {
      background-color: ${colors.bgTertiary} !important;
    }

    /* Sidebar panels */
    .docs-explore-widget,
    .companion-widget,
    [role="complementary"],
    .script-application-sidebar,
    .docs-side-panel,
    .navigation-widget-hat,
    .kix-appview-editor-container {
      background-color: ${colors.bg} !important;
      color: ${colors.text} !important;
    }

    /* Document canvas area \u2014 editor background */
    .kix-appview-editor,
    .docs-editor,
    .kix-page-paginated,
    .docs-editor-container {
      background-color: ${colors.bg} !important;
    }

    /* The actual page/canvas in Docs */
    .kix-page-content-wrapper,
    .kix-page {
      background-color: ${colors.canvasBg} !important;
    }

    /* Sheets specific */
    .waffle-content-container,
    .grid-container,
    .native-scrollbar,
    .docs-sheet-container-bar,
    .docs-sheet-tab,
    .docs-sheet-active-tab {
      background-color: ${colors.bg} !important;
      color: ${colors.text} !important;
    }

    /* Sheets cells */
    .cell-input,
    .cell-input > div {
      color: ${colors.text} !important;
    }

    /* Sheets formula bar */
    .formulabar-input-container,
    .cell-name {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
    }

    /* Slides specific */
    .punch-viewer-container,
    .punch-viewer-background,
    .punch-filmstrip-scroll,
    .punch-filmstrip,
    .punch-viewer-speakernotes-text-body {
      background-color: ${colors.bg} !important;
      color: ${colors.text} !important;
    }

    /* Drive specific */
    .a-s-tb-lc,
    [data-view-type],
    .a-s-La-N,
    .a-La-N,
    .a-b-nf-gjns,
    .a-nf-gjns,
    .a-s-tb-sc,
    .a-b-c,
    .a-J-ji {
      background-color: ${colors.bg} !important;
      color: ${colors.text} !important;
    }

    /* Drive file list */
    .a-s-tb-sc-Ye-bj,
    [role="row"],
    [role="gridcell"],
    [role="rowheader"] {
      color: ${colors.text} !important;
    }

    /* Dialogs and modals */
    [role="dialog"],
    [role="alertdialog"],
    .modal-dialog,
    .docs-dialog,
    .goog-dialog {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
      border-color: ${colors.border} !important;
    }

    /* Buttons */
    .goog-button,
    .goog-flat-button,
    [role="button"],
    .goog-toolbar-button {
      color: ${colors.text} !important;
    }

    /* Input fields */
    input, textarea, select,
    .docs-title-input {
      background-color: ${colors.bgTertiary} !important;
      color: ${colors.text} !important;
      border-color: ${colors.border} !important;
    }

    /* Tooltips */
    .goog-tooltip,
    [role="tooltip"] {
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

    /* Status bar */
    .docs-butterbar-container,
    .docs-butterbar-wrap {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
    }

    /* Comment threads */
    .docos-anchoreddocoview,
    .docos-docoview,
    .docos-replyview {
      background-color: ${colors.bgSecondary} !important;
      color: ${colors.text} !important;
    }
  `;
}
var STYLE_ID = "gws-dark-mode-styles";
function applyTheme(themeName) {
  const colors = themes[themeName];
  if (!colors) return;
  let styleEl = document.getElementById(STYLE_ID);
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = STYLE_ID;
    (document.head || document.documentElement).appendChild(styleEl);
  }
  styleEl.textContent = generateCSS(colors);
}
function removeTheme() {
  const styleEl = document.getElementById(STYLE_ID);
  if (styleEl) styleEl.remove();
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
async function init() {
  const result = await chrome.storage.sync.get(["enabled", "theme"]);
  const enabled = result.enabled !== false;
  const theme = result.theme || "dim";
  if (enabled) {
    applyTheme(theme);
  }
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "sync") return;
    const newEnabled = changes.enabled?.newValue;
    const newTheme = changes.theme?.newValue;
    if (newEnabled === false) {
      removeTheme();
      return;
    }
    if (newEnabled === true || newTheme) {
      chrome.storage.sync.get(["enabled", "theme"], (data) => {
        if (data.enabled !== false) {
          applyTheme(data.theme || "dim");
        }
      });
    }
  });
  chrome.runtime.sendMessage({ type: "content-loaded", app: getCurrentApp() });
}
init();
