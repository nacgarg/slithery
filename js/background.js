chrome.browserAction.onClicked.addListener(function(tab) {
    var slitherURL = "http://slither.io/";
    chrome.tabs.create({ url: slitherURL });
});

chrome.webRequest.onBeforeRequest.addListener(function(details) {
	console.log(details.url);
    if (details.url.startsWith("http://slither.io/s/game")) return { redirectUrl: chrome.extension.getURL("js/game_modified.js") };
}, { urls: ["http://slither.io/*"] }, ["blocking"]);
