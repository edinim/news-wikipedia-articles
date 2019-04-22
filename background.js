chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {
        chrome.storage.sync.set({
            categories: [
                { name: 'Historia', checked: true },
                { name: 'Gjeografia', checked: true },
                { name: 'Ekonomia', checked: true },
                { name: 'Filozofia', checked: true },
                { name: 'Arti', checked: true },
                { name: 'Kultura', checked: true },
                { name: 'Feja', checked: true },
                { name: 'Shkenca', checked: true },
                { name: 'Teknologjia', checked: true },
                { name: 'Sporti', checked: true }
            ]
        }, function () {
        });
    }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.title == "getWikipediaArticle") {
        getWikipediaArticleByPageId(78897);
    }
});