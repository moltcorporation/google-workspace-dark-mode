chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["enabled", "theme"], (data) => {
    if (data.enabled === undefined) {
      chrome.storage.sync.set({ enabled: true, theme: "dim" });
    }
  });
});

// Keyboard shortcut: toggle dark mode on/off
chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-dark-mode") {
    chrome.storage.sync.get(["enabled"], (data) => {
      chrome.storage.sync.set({ enabled: !data.enabled });
    });
  }
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  if (message.type === "content-loaded") {
    // Content script loaded on a Google Workspace page
  }
});
