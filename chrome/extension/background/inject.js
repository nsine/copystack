function isInjected(tabId, callback) {
  return chrome.tabs.executeScript(tabId, {
    code: `var injected = window.reactExampleInjected;
      window.reactExampleInjected = true;
      injected;`,
    runAt: 'document_start',
  }, callback);
}

function loadScript(name, tabId, callback) {
  if (process.env.NODE_ENV === 'production') {
    chrome.tabs.executeScript(tabId, {
      file: `/js/${name}.bundle.js`,
      runAt: 'document_end',
    }, callback);
  } else {
    // dev: async fetch bundle
    fetch(`http://localhost:3000/js/${name}.bundle.js`)
      .then(res => res.text())
      .then((fetchRes) => {
        // Load redux-devtools-extension inject bundle,
        // because inject script and page is in a different context
        const request = new XMLHttpRequest();
        request.open('GET', 'chrome-extension://lmhkpmbekcpmknklioeibfkpmmfibljd/js/redux-devtools-extension.js'); // sync
        request.send();
        request.onload = () => {
          if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            chrome.tabs.executeScript(tabId, {
              code: request.responseText,
              runAt: 'document_start',
            });
          }
        };
        chrome.tabs.executeScript(tabId, {
          code: fetchRes,
          runAt: 'document_end',
        }, callback);
      });
  }
}

const arrowURLs = ['^https://stackoverflow\\.com'];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'loading' || !tab.url.match(arrowURLs.join('|'))) return;

  isInjected(tabId, (result) => {
    if (chrome.runtime.lastError || result[0]) return;

    loadScript('inject', tabId);
  });
});
