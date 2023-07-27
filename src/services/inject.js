import { injectCssScript, sendMessageToTab } from "./utils";

const setTabs = new Set();
let init;

chrome.action.onClicked.addListener(async function (tab) {
  console.log(tab)
  if (!setTabs.has(tab.id)) {
    if (!init) {
      init = true;
      const tabId = await injectCssScript(tab.id);
      setTabs.add(tabId);
    } else {
      const response = await sendMessageToTab(tab.id, {
        action: "open",
      });
      if (response.status === "opened") {
        setTabs.add(tab.id);
      }
    }
  } else {
    const response = await sendMessageToTab(tab.id, { action: "close" });
    if (response.status === "closed") {
      setTabs.delete(tab.id);
    }
  }
});
