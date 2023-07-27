async function getCurrentTab() {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  return tab;
}

async function injectCssScript(tabId) {
  try {
    await chrome.scripting.insertCSS({
      target: { tabId },
      files: ["assets/main.css"],
    });
    console.log("CSS injected!");

    const injectionResults = await chrome.scripting.executeScript({
      target: { tabId },
      files: ["app.js"],
    });
    console.log(injectionResults);

    const response = await sendMessageToTab(tabId, { action: "init" });
    console.log(response)
    if (response.status === "opened") {
      return tabId;
    }
  } catch (error) {
    console.error("Error injecting CSS or executing script:", error);
  }
}

async function sendMessageToTab(tabId, message) {
  return new Promise((resolve) => {
    chrome.tabs.sendMessage(tabId, message, (response) => resolve(response));
  });
}
export { getCurrentTab, injectCssScript, sendMessageToTab };
