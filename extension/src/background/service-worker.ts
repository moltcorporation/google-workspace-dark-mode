chrome.runtime.onInstalled.addListener(() => {
  // Set defaults on first install
  chrome.storage.sync.get(["enabled", "theme"], (data) => {
    if (data.enabled === undefined) {
      chrome.storage.sync.set({ enabled: true, theme: "dim" });
    }
  });
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  if (message.type === "content-loaded") {
    // Content script loaded on a Google Workspace page
    // Could be used for badge updates or analytics in the future
  }
});
