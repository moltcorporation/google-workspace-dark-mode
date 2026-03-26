// src/popup/popup.ts
document.addEventListener("DOMContentLoaded", async () => {
  const toggleEl = document.getElementById("toggle-enabled");
  const themeBtns = document.querySelectorAll(".theme-btn");
  const statusEl = document.getElementById("status");
  const data = await chrome.storage.sync.get(["enabled", "theme"]);
  const enabled = data.enabled !== false;
  const theme = data.theme || "dim";
  toggleEl.checked = enabled;
  setActiveTheme(theme);
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
