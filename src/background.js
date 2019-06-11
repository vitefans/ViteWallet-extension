chrome.runtime.onInstalled.addListener(function () {
    console.log('hello vite wallet');
});

chrome.omnibox.onInputEntered.addListener(function (text) {
    // Encode user input for special characters , / ? : @ & = + $ #
    const newURL = `https://www.google.com/search?q=${ encodeURIComponent(text) }`;
    chrome.tabs.create({ url: newURL });
});
