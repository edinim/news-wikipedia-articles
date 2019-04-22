const site = newsSites[window.location.host];

$(site.changeArticleDiv)
    .prepend(`
    <div>
        <p>
            Nuk te pelqen artikulli? 
            Ndrysho ate me nje artikull te <b>Wikipedia</b>  
            <a id='${site.name}changeArticle' class="changeArticleLink">Kliko ketu</a>
        </p>
    </div>
    `)

$(`#${site.name}changeArticle`)
    .click(function () {
        chrome.runtime.sendMessage({
            title: 'getWikipediaArticle'
        }, function () {

        });
    });

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.title == 'WikipediaArticle') {
        $(site.articleTitle).text(message.article.title);
        $(site.articleContent).html(message.article.content);
        $(site.articleImage).hide();
    }
});