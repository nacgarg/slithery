chrome.browserAction.onClicked.addListener(function(tab) {
    var slitherURL = "http://slither.io/";
    chrome.tabs.create({ url: slitherURL });
});
