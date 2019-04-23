function getWikiArticleResponseHandler(resp) {
    const article = resp.parse;
    const articlePageId = article.pageid;
    if (resp.error) {
        console.log(resp.error.info);
        sendErrorToNewsSite();
        return;
    }
    sendArticleToNewsSite(article.displaytitle, article.text['*']);
}

function getWikipediaArticlesResponseHandler(resp, category) {
    const articles = resp.query.categorymembers;
    const cmcontinue = resp.continue ? resp.continue.cmcontinue : '';
    if (articles.length == 0) {
        sendErrorToNewsSite();
        return;
    }
    const articlesIds = articles.map(article => article.pageid);
    sendArticlesToChromeStore(articlesIds, cmcontinue, category);
}
