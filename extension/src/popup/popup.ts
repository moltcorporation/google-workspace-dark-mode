document.addEventListener("DOMContentLoaded", async () => {
  const toggleEl = document.getElementById("toggle-enabled") as HTMLInputElement;
  const themeBtns = document.querySelectorAll<HTMLButtonElement>(".theme-btn");
  const statusEl = document.getElementById("status") as HTMLElement;

  // Load current state
  const data = await chrome.storage.sync.get(["enabled", "theme"]);
  const enabled = data.enabled !== false;
  const theme = data.theme || "dim";

  toggleEl.checked = enabled;
  setActiveTheme(theme);

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
