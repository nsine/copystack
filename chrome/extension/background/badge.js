chrome.storage.local.get('helloworld_extension', (obj) => {
  chrome.browserAction.setBadgeText({ text: '99' });
});
