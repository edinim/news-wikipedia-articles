function getWikipediaArticleByPageId(pageId) {
    $.ajax({
        url: "https://sq.wikipedia.org/w/api.php",
        data: {
            action: 'parse',
            pageid: pageId,
            format: 'json',
            origin: '*'
        },
        type: 'GET',
        contentType: 'application/json',
    }).done(getWikiArticleResponseHandler);
}