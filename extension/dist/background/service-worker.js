// src/background/service-worker.ts
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["enabled", "theme"], (data) => {
    if (data.enabled === void 0) {
      chrome.storage.sync.set({ enabled: true, theme: "dim" });
    }
  });
});
chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-dark-mode") {
    chrome.storage.sync.get(["enabled"], (data) => {
      chrome.storage.sync.set({ enabled: !data.enabled });
    });
  }
});
chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  if (message.type === "content-loaded") {
  }
});
