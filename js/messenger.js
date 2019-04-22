function sendArticleAsMessage(title, content) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { title: 'WikipediaArticle', article: { title: title, content: content } }, function (response) {
            console.log(response);
        });
    });
}
