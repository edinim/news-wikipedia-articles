function sendArticleToNewsSite(title, content) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { title: 'WikipediaArticle', article: { title: title, content: content } }, function (response) {
        });
    });
}

function sendErrorToNewsSite(title, content) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { title: 'Error', error: "Leximi i artikullit te Wikipedia-se deshtoi!" }, function (response) {
            console.log(response);
        });
    });
}

function sendArticlesToChromeStore(articlesIds, cmcontinue, category) {
    chrome.storage.sync.get('categories', function (data) {
        let categories = data.categories;
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].name == category) {
                categories[i].articles = categories[i].articles.concat(articlesIds);
                categories[i].cmcontinue = cmcontinue;

                chrome.storage.sync.set({
                    categories: categories
                }, function () {
                });

                return;
            }
        }
    });
}

