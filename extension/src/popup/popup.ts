const API_BASE = "https://google-workspace-dark-mode-moltcorporation.vercel.app";

document.addEventListener("DOMContentLoaded", async () => {
  const toggleEl = document.getElementById("toggle-enabled") as HTMLInputElement;
  const themeBtns = document.querySelectorAll<HTMLButtonElement>(".theme-btn");
  const statusEl = document.getElementById("status") as HTMLElement;
  const proSection = document.getElementById("pro-section") as HTMLElement;
  const upgradeBanner = document.getElementById("upgrade-banner") as HTMLElement;
  const upgradeBtn = document.getElementById("upgrade-btn") as HTMLElement;
  const licenseSection = document.getElementById("license-section") as HTMLElement;
  const licenseInput = document.getElementById("license-key-input") as HTMLInputElement;
  const activateBtn = document.getElementById("activate-btn") as HTMLElement;
  const scheduleEnabled = document.getElementById("schedule-enabled") as HTMLInputElement;
  const scheduleTimes = document.getElementById("schedule-times") as HTMLElement;
  const scheduleStart = document.getElementById("schedule-start") as HTMLInputElement;
  const scheduleEnd = document.getElementById("schedule-end") as HTMLInputElement;
  const perDocEnabled = document.getElementById("per-doc-enabled") as HTMLInputElement;
  const customBg = document.getElementById("custom-bg") as HTMLInputElement;
  const customText = document.getElementById("custom-text") as HTMLInputElement;
  const customAccent = document.getElementById("custom-accent") as HTMLInputElement;
  const applyCustomColors = document.getElementById("apply-custom-colors") as HTMLElement;

  // Load current state
  const data = await chrome.storage.sync.get([
    "enabled", "theme", "licenseKey", "isPro",
    "customTheme", "scheduledDarkMode", "perDocumentEnabled",
  ]);
  const enabled = data.enabled !== false;
  const theme = data.theme || "dim";

  toggleEl.checked = enabled;
  setActiveTheme(theme);

  // Check Pro status
  if (data.licenseKey && data.isPro) {
    showProUI(data);
  } else if (data.licenseKey) {
    // License exists but might have expired, recheck
    checkLicense(data.licenseKey);
  }

  // Toggle handler
  toggleEl.addEventListener("change", async () => {
    await chrome.storage.sync.set({ enabled: toggleEl.checked });
    showStatus(toggleEl.checked ? "Dark mode enabled" : "Dark mode disabled");
  });

  // Theme selection handlers
  themeBtns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const selectedTheme = btn.dataset.theme;
      if (!selectedTheme) return;
      await chrome.storage.sync.set({ theme: selectedTheme });
      setActiveTheme(selectedTheme);
      showStatus(`Theme: ${selectedTheme}`);
    });
  });

  // Upgrade button opens checkout
  upgradeBtn.addEventListener("click", () => {
    upgradeBanner.style.display = "none";
    licenseSection.style.display = "block";
    chrome.tabs.create({ url: `${API_BASE}/#pricing` });
  });

  // Activate license key
  activateBtn.addEventListener("click", async () => {
    const key = licenseInput.value.trim();
    if (!key) {
      showStatus("Enter a license key");
      return;
    }
    await checkLicense(key);
  });

  // Schedule toggle
  scheduleEnabled.addEventListener("change", async () => {
    scheduleTimes.style.display = scheduleEnabled.checked ? "flex" : "none";
    await chrome.storage.sync.set({
      scheduledDarkMode: scheduleEnabled.checked
        ? { enabled: true, start: scheduleStart.value, end: scheduleEnd.value }
        : { enabled: false },
    });
    showStatus(scheduleEnabled.checked ? "Schedule enabled" : "Schedule disabled");
  });

  // Schedule time changes
  const saveSchedule = async () => {
    if (!scheduleEnabled.checked) return;
    await chrome.storage.sync.set({
      scheduledDarkMode: { enabled: true, start: scheduleStart.value, end: scheduleEnd.value },
    });
  };
  scheduleStart.addEventListener("change", saveSchedule);
  scheduleEnd.addEventListener("change", saveSchedule);

  // Per-document toggle
  perDocEnabled.addEventListener("change", async () => {
    await chrome.storage.sync.set({ perDocumentEnabled: perDocEnabled.checked });
    showStatus(perDocEnabled.checked ? "Per-document mode on" : "Per-document mode off");
  });

  // Apply custom colors
  applyCustomColors.addEventListener("click", async () => {
    const customTheme = {
      bg: customBg.value,
      text: customText.value,
      accent: customAccent.value,
    };
    await chrome.storage.sync.set({ theme: "custom", customTheme });
    setActiveTheme("custom");
    showStatus("Custom colors applied");
  });

  async function checkLicense(key: string) {
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

  function showProUI(proData: Record<string, unknown>) {
    upgradeBanner.style.display = "none";
    licenseSection.style.display = "none";
    proSection.style.display = "block";

    // Load Pro settings
    if (proData.customTheme) {
      const ct = proData.customTheme as { bg: string; text: string; accent: string };
      customBg.value = ct.bg || "#1e1e2e";
      customText.value = ct.text || "#e0e0e8";
      customAccent.value = ct.accent || "#6b8aff";
    }

    const schedule = proData.scheduledDarkMode as { enabled: boolean; start: string; end: string } | null;
    if (schedule?.enabled) {
      scheduleEnabled.checked = true;
      scheduleTimes.style.display = "flex";
      scheduleStart.value = schedule.start || "18:00";
      scheduleEnd.value = schedule.end || "08:00";
    }

    perDocEnabled.checked = !!proData.perDocumentEnabled;
  }

  function setActiveTheme(activeTheme: string): void {
    themeBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.theme === activeTheme);
    });
  }

  function showStatus(message: string): void {
    statusEl.textContent = message;
    setTimeout(() => {
      statusEl.textContent = "";
    }, 2000);
  }
});
