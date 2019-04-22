function getWikiArticleResponseHandler(resp) {
    const article = resp.parse;
    if (resp.error) {
        console.log(resp.error.info);
        return;
    }
    console.log(article);
}
