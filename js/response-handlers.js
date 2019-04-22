function getWikiArticleResponseHandler(resp) {
    const article = resp.parse;
    if (resp.error) {
        console.log(resp.error.info);
        sendErrorToNewsSite();
        return;
    }
    sendArticleToNewsSite(article.displaytitle, article.text['*']);
}
