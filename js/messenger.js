function sendArticleToNewsSite(title, content) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { title: 'WikipediaArticle', article: { title: title, content: content } }, function (response) {
            console.log(response);
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

