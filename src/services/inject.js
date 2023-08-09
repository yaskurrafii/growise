import { injectCssScript, sendMessageToTab } from "./utils";

const tabs = new Set();
chrome.action.onClicked.addListener(async function (tab) {
  if (!tabs.has(tab.id)) {
    await injectCssScript(tab.id);
    tabs.add(tab.id);
  } else {
    sendMessageToTab(tab.id, { action: "toggle" });
  }
});

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (changeInfo.url === undefined) {
    tabs.delete(tab.id);
  }
});
