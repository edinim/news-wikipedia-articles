chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {
        chrome.storage.sync.set({
            categories: [
                { name: 'Histori', checked: true, articles: [], cmcontinue: '' },
                { name: 'Gjeografi', checked: true, articles: [], cmcontinue: '' },
                { name: 'Ekonomi', checked: true, articles: [], cmcontinue: '' },
                { name: 'Filozofi', checked: true, articles: [], cmcontinue: '' },
                { name: 'Arti', checked: true, articles: [], cmcontinue: '' },
                { name: 'Kulturë', checked: true, articles: [], cmcontinue: '' },
                { name: 'Shkencë', checked: true, articles: [], cmcontinue: '' },
                { name: 'Teknologji', checked: true, articles: [], cmcontinue: '' },
                { name: 'Sport', checked: true, articles: [], cmcontinue: '' }
            ]
        }, function () {
        });
    }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.title == "getWikipediaArticle") {
        console.log(message.pageId);
        getWikipediaArticleByPageId(message.pageId);
    } else if (message.title == "getWikipediaArticleByCategory") {
        getWikipediaArticlesByCategory(message.category, message.cmcontinue);
    }
});