const site = newsSites[window.location.host];

$(site.changeArticleDiv)
    .prepend(`
    <div class="changeArticleDiv">
            <span>
            Nuk te pelqen artikulli? 
            Ndrysho ate me nje artikull te <b>Wikipedia</b>
            </span>
            <a class="changeArticleLink">&#187; Kliko ketu</a>
    </div>
    `)

$(`.changeArticleLink`)
    .on('click', function () {
        $('.changeArticleDiv').fadeTo("slow", 0, function () {
            $('.changeArticleDiv').hide();
            chrome.runtime.sendMessage({
                title: 'getWikipediaArticle'
            }, function () {
            });
        });
    });

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.title == 'WikipediaArticle') {
        $(site.articleTitle).text(message.article.title);
        $(site.articleContent).html(message.article.content);
        $(site.articleImage).hide();
        fadeInChangeArticleDiv('success', 'Lexim te kendshem!');
    } else if (message.title == 'Error') {
        fadeInChangeArticleDiv('error', message.error);
    }
});

function fadeInChangeArticleDiv(responseClass, message) {
    $('.changeArticleDiv').css('opacity', '').addClass(responseClass).fadeIn("slow");;
    $('.changeArticleDiv > span')
        .text(`${message}`);
    $('.changeArticleLink').text('Provo perseri');
}
