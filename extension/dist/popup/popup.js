// src/popup/popup.ts
var API_BASE = "https://google-workspace-dark-mode-moltcorporation.vercel.app";
document.addEventListener("DOMContentLoaded", async () => {
  const toggleEl = document.getElementById("toggle-enabled");
  const themeBtns = document.querySelectorAll(".theme-btn");
  const statusEl = document.getElementById("status");
  const proSection = document.getElementById("pro-section");
  const upgradeBanner = document.getElementById("upgrade-banner");
  const upgradeBtn = document.getElementById("upgrade-btn");
  const licenseSection = document.getElementById("license-section");
  const licenseInput = document.getElementById("license-key-input");
  const activateBtn = document.getElementById("activate-btn");
  const scheduleEnabled = document.getElementById("schedule-enabled");
  const scheduleTimes = document.getElementById("schedule-times");
  const scheduleStart = document.getElementById("schedule-start");
  const scheduleEnd = document.getElementById("schedule-end");
  const perDocEnabled = document.getElementById("per-doc-enabled");
  const customBg = document.getElementById("custom-bg");
  const customText = document.getElementById("custom-text");
  const customAccent = document.getElementById("custom-accent");
  const applyCustomColors = document.getElementById("apply-custom-colors");
  const data = await chrome.storage.sync.get([
    "enabled",
    "theme",
    "licenseKey",
    "isPro",
    "customTheme",
    "scheduledDarkMode",
    "perDocumentEnabled"
  ]);
  const enabled = data.enabled !== false;
  const theme = data.theme || "dim";
  toggleEl.checked = enabled;
  setActiveTheme(theme);
  if (data.licenseKey && data.isPro) {
    showProUI(data);
  } else if (data.licenseKey) {
    checkLicense(data.licenseKey);
  }
  toggleEl.addEventListener("change", async () => {
    await chrome.storage.sync.set({ enabled: toggleEl.checked });
    showStatus(toggleEl.checked ? "Dark mode enabled" : "Dark mode disabled");
  });
  themeBtns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const selectedTheme = btn.dataset.theme;
      if (!selectedTheme) return;
      await chrome.storage.sync.set({ theme: selectedTheme });
      setActiveTheme(selectedTheme);
      showStatus(`Theme: ${selectedTheme}`);
    });
  });
  upgradeBtn.addEventListener("click", () => {
    upgradeBanner.style.display = "none";
    licenseSection.style.display = "block";
    chrome.tabs.create({ url: `${API_BASE}/#pricing` });
  });
  activateBtn.addEventListener("click", async () => {
    const key = licenseInput.value.trim();
    if (!key) {
      showStatus("Enter a license key");
      return;
    }
    await checkLicense(key);
  });
  scheduleEnabled.addEventListener("change", async () => {
    scheduleTimes.style.display = scheduleEnabled.checked ? "flex" : "none";
    await chrome.storage.sync.set({
      scheduledDarkMode: scheduleEnabled.checked ? { enabled: true, start: scheduleStart.value, end: scheduleEnd.value } : { enabled: false }
    });
    showStatus(scheduleEnabled.checked ? "Schedule enabled" : "Schedule disabled");
  });
  const saveSchedule = async () => {
    if (!scheduleEnabled.checked) return;
    await chrome.storage.sync.set({
      scheduledDarkMode: { enabled: true, start: scheduleStart.value, end: scheduleEnd.value }
    });
  };
  scheduleStart.addEventListener("change", saveSchedule);
  scheduleEnd.addEventListener("change", saveSchedule);
  perDocEnabled.addEventListener("change", async () => {
    await chrome.storage.sync.set({ perDocumentEnabled: perDocEnabled.checked });
    showStatus(perDocEnabled.checked ? "Per-document mode on" : "Per-document mode off");
  });
  applyCustomColors.addEventListener("click", async () => {
    const customTheme = {
      bg: customBg.value,
      text: customText.value,
      accent: customAccent.value
    };
    await chrome.storage.sync.set({ theme: "custom", customTheme });
    setActiveTheme("custom");
    showStatus("Custom colors applied");
  });
  async function checkLicense(key) {
    try {
      const res = await fetch(`${API_BASE}/api/license/check?key=${encodeURIComponent(key)}`);
      const result = await res.json();
      if (result.valid) {
        await chrome.storage.sync.set({ licenseKey: key, isPro: true });
        showStatus("Pro activated!");
        showProUI({ licenseKey: key, ...result });
      } else {
        showStatus("Invalid or expired license");
        await chrome.storage.sync.set({ isPro: false });
      }
    } catch {
      showStatus("Could not verify license");
    }
  }
  function showProUI(proData) {
    upgradeBanner.style.display = "none";
    licenseSection.style.display = "none";
    proSection.style.display = "block";
    if (proData.customTheme) {
      const ct = proData.customTheme;
      customBg.value = ct.bg || "#1e1e2e";
      customText.value = ct.text || "#e0e0e8";
      customAccent.value = ct.accent || "#6b8aff";
    }
    const schedule = proData.scheduledDarkMode;
    if (schedule?.enabled) {
      scheduleEnabled.checked = true;
      scheduleTimes.style.display = "flex";
      scheduleStart.value = schedule.start || "18:00";
      scheduleEnd.value = schedule.end || "08:00";
    }
    perDocEnabled.checked = !!proData.perDocumentEnabled;
  }
  function setActiveTheme(activeTheme) {
    themeBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.theme === activeTheme);
    });
  }
  function showStatus(message) {
    statusEl.textContent = message;
    setTimeout(() => {
      statusEl.textContent = "";
    }, 2e3);
  }
});
