chrome.action.onClicked.addListener(async function (tab) {
  chrome.scripting
    .insertCSS({
      target: { tabId: tab.id },
      files: ["assets/index.css"],
    })
    .then(() => console.log("css injected!"));
  chrome.scripting.executeScript(
    { target: { tabId: tab.id }, files: ["app.js"] },
    function (injectionResults) {
      console.log(injectionResults);
      chrome.tabs.sendMessage(tab.id, {}, function (response) {
        console.log(response.loaded);
      });
    }
  );
});
