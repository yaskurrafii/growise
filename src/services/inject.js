import { injectCssScript, sendMessageToTab } from "./utils";

const tabs = new Map();

chrome.action.onClicked.addListener(async function (tab) {
  if (!tabs.has(tab.id)) {
    if (!tabs.get(tab.id)) {
      const tabId = await injectCssScript(tab.id);
      tabs.set(tabId, true);
    } else {
      const response = await sendMessageToTab(tab.id, {
        action: "open",
      });
      if (response.status === "opened") {
        tabs.set(tab.id, true);
        setTabs.add(tab.id);
      }
    }
  } else {
    const response = await sendMessageToTab(tab.id, { action: "close" });
    if (response.status === "closed") {
      tabs.delete(tab.id);
      setTabs.delete(tab.id);
    }
  }
});
