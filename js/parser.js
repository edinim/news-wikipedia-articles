function parseArticle(site) {
    $(site.articleContent + ' a').removeAttr("href");
    $(site.articleContent + ' .mw-editsection').remove();
    $(site.articleContent + ' .reference').remove();
    $(site.articleContent + ' .metadata .plainlinks').remove();
    $(site.articleContent + ' .toc').remove();
}