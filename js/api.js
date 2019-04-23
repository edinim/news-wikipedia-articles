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

function getWikipediaArticlesByCategory(category, cmcontinue) {
    $.ajax({
        url: "https://sq.wikipedia.org/w/api.php",
        data: {
            action: 'query',
            list: 'categorymembers',
            cmtitle: `Category:${category}`,
            cmcontinue: cmcontinue,
            format: 'json',
            origin: '*'
        },
        type: 'GET',
        contentType: 'application/json',
        success: function (resp) {
            getWikipediaArticlesResponseHandler(resp, category);
        }
    });
}