function init () {
    console.log("999");
}

chrome.webRequest.onBeforeRequest.addListener (function (details) {
    console.log (details);
    return {cancel: false};
}, {urls: ["<all_urls>"]}, ["blocking"]);

init();
