chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
      console.log("New URL:", changeInfo.url);
    }
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "executeAction") {
      console.log("Action executed!");
    }
  });
  