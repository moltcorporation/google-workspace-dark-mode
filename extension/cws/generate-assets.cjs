/**
 * CWS Asset Generator
 * Generates promotional images for Chrome Web Store listing.
 * Run: node generate-assets.js
 * Requires: none (uses built-in canvas-like SVG generation)
 * Outputs: screenshot.svg (1280x800), promo-tile.svg (440x280)
 */

const fs = require("fs");
const path = require("path");

// Theme colors matching the extension's "dim" theme
const colors = {
  bg: "#1e1e2e",
  bgSecondary: "#2a2a3c",
  bgTertiary: "#353548",
  text: "#e0e0e8",
  textSecondary: "#a0a0b0",
  border: "#3a3a4c",
  accent: "#7c9cff",
};

function generateScreenshot() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 1280 800">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap');
      text { font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="1280" height="800" fill="${colors.bg}"/>

  <!-- Browser chrome mockup -->
  <rect x="40" y="30" width="1200" height="740" rx="12" fill="${colors.bgSecondary}" stroke="${colors.border}" stroke-width="1"/>

  <!-- Tab bar -->
  <rect x="40" y="30" width="1200" height="44" rx="12" fill="${colors.bgTertiary}"/>
  <rect x="40" y="62" width="1200" height="12" fill="${colors.bgTertiary}"/>

  <!-- Active tab -->
  <rect x="56" y="38" width="200" height="30" rx="6" fill="${colors.bgSecondary}"/>
  <circle cx="72" cy="53" r="6" fill="${colors.accent}" opacity="0.6"/>
  <text x="86" y="58" fill="${colors.text}" font-size="12" font-weight="500">Untitled document - Google Docs</text>

  <!-- Address bar -->
  <rect x="56" y="78" width="1168" height="30" rx="15" fill="${colors.bg}"/>
  <text x="80" y="98" fill="${colors.textSecondary}" font-size="12">docs.google.com/document/d/...</text>

  <!-- Google Docs mockup -->
  <!-- Toolbar area -->
  <rect x="56" y="118" width="1168" height="40" fill="${colors.bgSecondary}"/>

  <!-- Menu bar -->
  <text x="72" y="143" fill="${colors.text}" font-size="13" font-weight="500">File</text>
  <text x="112" y="143" fill="${colors.text}" font-size="13" font-weight="500">Edit</text>
  <text x="152" y="143" fill="${colors.text}" font-size="13" font-weight="500">View</text>
  <text x="196" y="143" fill="${colors.text}" font-size="13" font-weight="500">Insert</text>
  <text x="250" y="143" fill="${colors.text}" font-size="13" font-weight="500">Format</text>
  <text x="314" y="143" fill="${colors.text}" font-size="13" font-weight="500">Tools</text>

  <!-- Formatting toolbar -->
  <rect x="56" y="158" width="1168" height="36" fill="${colors.bgSecondary}" stroke="${colors.border}" stroke-width="0.5"/>

  <!-- Toolbar buttons mockup -->
  <rect x="72" y="166" width="60" height="20" rx="3" fill="${colors.bgTertiary}"/>
  <text x="82" y="180" fill="${colors.textSecondary}" font-size="11">Normal</text>
  <rect x="142" y="166" width="80" height="20" rx="3" fill="${colors.bgTertiary}"/>
  <text x="152" y="180" fill="${colors.textSecondary}" font-size="11">Arial</text>
  <rect x="232" y="166" width="36" height="20" rx="3" fill="${colors.bgTertiary}"/>
  <text x="242" y="180" fill="${colors.textSecondary}" font-size="11">11</text>

  <!-- Bold/Italic/Underline -->
  <text x="282" y="181" fill="${colors.text}" font-size="14" font-weight="700">B</text>
  <text x="304" y="181" fill="${colors.textSecondary}" font-size="14" font-style="italic">I</text>
  <text x="324" y="181" fill="${colors.textSecondary}" font-size="14" text-decoration="underline">U</text>

  <!-- Document area -->
  <rect x="56" y="194" width="1168" height="576" fill="${colors.bg}"/>

  <!-- Page/canvas -->
  <rect x="240" y="214" width="800" height="536" rx="2" fill="${colors.bgSecondary}" stroke="${colors.border}" stroke-width="0.5"/>

  <!-- Document content -->
  <text x="300" y="280" fill="${colors.text}" font-size="28" font-weight="700">Project Proposal</text>

  <text x="300" y="320" fill="${colors.textSecondary}" font-size="14">Last updated: March 2026</text>

  <rect x="300" y="340" width="680" height="1" fill="${colors.border}"/>

  <text x="300" y="375" fill="${colors.text}" font-size="20" font-weight="600">Executive Summary</text>

  <text x="300" y="405" fill="${colors.text}" font-size="14">This document outlines the proposed strategy for Q2 2026. Our team has</text>
  <text x="300" y="425" fill="${colors.text}" font-size="14">identified three key opportunities in the current market landscape that</text>
  <text x="300" y="445" fill="${colors.text}" font-size="14">align with our core competencies and growth objectives.</text>

  <text x="300" y="485" fill="${colors.text}" font-size="20" font-weight="600">Key Objectives</text>

  <text x="300" y="515" fill="${colors.text}" font-size="14">1. Expand market presence in the enterprise segment</text>
  <text x="300" y="540" fill="${colors.text}" font-size="14">2. Launch three new product features by end of quarter</text>
  <text x="300" y="565" fill="${colors.text}" font-size="14">3. Achieve 25% reduction in customer churn rate</text>

  <text x="300" y="605" fill="${colors.text}" font-size="20" font-weight="600">Budget Allocation</text>

  <text x="300" y="635" fill="${colors.text}" font-size="14">The proposed budget for this initiative is structured across three main</text>
  <text x="300" y="655" fill="${colors.text}" font-size="14">categories, with flexibility built in for market conditions.</text>

  <!-- Extension popup overlay -->
  <rect x="920" y="108" width="220" height="260" rx="12" fill="${colors.bg}" stroke="${colors.border}" stroke-width="1.5" filter="url(#shadow)"/>

  <!-- Popup header -->
  <text x="950" y="140" fill="${colors.text}" font-size="16" font-weight="700">Dark Mode</text>
  <text x="950" y="158" fill="${colors.textSecondary}" font-size="11">for Google Workspace</text>

  <!-- Toggle row -->
  <text x="950" y="190" fill="${colors.text}" font-size="13">Dark Mode</text>
  <rect x="1080" y="178" width="40" height="20" rx="10" fill="${colors.accent}"/>
  <circle cx="1108" cy="188" r="8" fill="white"/>

  <!-- Theme section -->
  <text x="950" y="220" fill="${colors.text}" font-size="12" font-weight="600">Theme</text>

  <!-- Theme buttons -->
  <rect x="950" y="230" width="56" height="56" rx="8" fill="#1e1e2e" stroke="${colors.accent}" stroke-width="2"/>
  <text x="960" y="300" fill="${colors.text}" font-size="10">Dim</text>

  <rect x="1016" y="230" width="56" height="56" rx="8" fill="#121220" stroke="${colors.border}" stroke-width="1"/>
  <text x="1020" y="300" fill="${colors.textSecondary}" font-size="10">Midnight</text>

  <rect x="1082" y="230" width="56" height="56" rx="8" fill="#000000" stroke="${colors.border}" stroke-width="1"/>
  <text x="1084" y="300" fill="${colors.textSecondary}" font-size="10">OLED Black</text>

  <!-- Shortcut hint -->
  <text x="965" y="335" fill="${colors.textSecondary}" font-size="10">Toggle: </text>
  <rect x="1005" y="324" width="48" height="16" rx="3" fill="${colors.bgTertiary}" stroke="${colors.border}" stroke-width="0.5"/>
  <text x="1014" y="336" fill="${colors.textSecondary}" font-size="10">Alt+D</text>

  <!-- Badge: "3 Themes" -->
  <rect x="60" y="720" width="160" height="36" rx="18" fill="${colors.accent}" opacity="0.15"/>
  <text x="96" y="743" fill="${colors.accent}" font-size="13" font-weight="600">3 Dark Themes</text>

  <rect x="236" y="720" width="200" height="36" rx="18" fill="${colors.accent}" opacity="0.15"/>
  <text x="268" y="743" fill="${colors.accent}" font-size="13" font-weight="600">Docs Sheets Slides Drive</text>

  <rect x="452" y="720" width="140" height="36" rx="18" fill="${colors.accent}" opacity="0.15"/>
  <text x="478" y="743" fill="${colors.accent}" font-size="13" font-weight="600">Alt+D Toggle</text>

  <!-- Drop shadow filter -->
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000" flood-opacity="0.4"/>
    </filter>
  </defs>
</svg>`;
}

function generatePromoTile() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="440" height="280" viewBox="0 0 440 280">
  <!-- Background gradient -->
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1e2e"/>
      <stop offset="100%" stop-color="#121220"/>
    </linearGradient>
  </defs>
  <rect width="440" height="280" fill="url(#bgGrad)"/>

  <!-- Decorative circles -->
  <circle cx="380" cy="40" r="120" fill="${colors.accent}" opacity="0.06"/>
  <circle cx="60" cy="240" r="80" fill="${colors.accent}" opacity="0.04"/>

  <!-- Moon icon -->
  <circle cx="220" cy="90" r="28" fill="${colors.accent}" opacity="0.2"/>
  <circle cx="220" cy="90" r="22" fill="none" stroke="${colors.accent}" stroke-width="2.5"/>
  <circle cx="230" cy="82" r="18" fill="#1e1e2e"/>

  <!-- Title -->
  <text x="220" y="150" fill="${colors.text}" font-size="22" font-weight="700" text-anchor="middle" font-family="Inter, system-ui, sans-serif">Dark Mode</text>
  <text x="220" y="175" fill="${colors.textSecondary}" font-size="14" text-anchor="middle" font-family="Inter, system-ui, sans-serif">for Google Workspace</text>

  <!-- App pills -->
  <rect x="68" y="200" width="68" height="26" rx="13" fill="${colors.bgTertiary}" stroke="${colors.border}" stroke-width="0.5"/>
  <text x="102" y="217" fill="${colors.text}" font-size="11" text-anchor="middle" font-family="Inter, system-ui, sans-serif">Docs</text>

  <rect x="146" y="200" width="72" height="26" rx="13" fill="${colors.bgTertiary}" stroke="${colors.border}" stroke-width="0.5"/>
  <text x="182" y="217" fill="${colors.text}" font-size="11" text-anchor="middle" font-family="Inter, system-ui, sans-serif">Sheets</text>

  <rect x="228" y="200" width="72" height="26" rx="13" fill="${colors.bgTertiary}" stroke="${colors.border}" stroke-width="0.5"/>
  <text x="264" y="217" fill="${colors.text}" font-size="11" text-anchor="middle" font-family="Inter, system-ui, sans-serif">Slides</text>

  <rect x="310" y="200" width="68" height="26" rx="13" fill="${colors.bgTertiary}" stroke="${colors.border}" stroke-width="0.5"/>
  <text x="344" y="217" fill="${colors.text}" font-size="11" text-anchor="middle" font-family="Inter, system-ui, sans-serif">Drive</text>

  <!-- Tagline -->
  <text x="220" y="258" fill="${colors.textSecondary}" font-size="11" text-anchor="middle" font-family="Inter, system-ui, sans-serif">3 Themes • Keyboard Shortcut • Zero Data Collection</text>
</svg>`;
}

// Write SVG files
fs.writeFileSync(path.join(__dirname, "screenshot-1280x800.svg"), generateScreenshot());
fs.writeFileSync(path.join(__dirname, "promo-tile-440x280.svg"), generatePromoTile());

console.log("Generated: screenshot-1280x800.svg (1280x800)");
console.log("Generated: promo-tile-440x280.svg (440x280)");
console.log("\nTo convert to PNG for CWS upload:");
console.log("  npx svg2png screenshot-1280x800.svg -o screenshot-1280x800.png -w 1280 -h 800");
console.log("  npx svg2png promo-tile-440x280.svg -o promo-tile-440x280.png -w 440 -h 280");
console.log("\nOr use any SVG-to-PNG tool (Inkscape, browser screenshot, etc.)");
