const site = newsSites[window.location.host];

init();

function init() {
    chrome.storage.sync.get('categories', function (data) {
        const category = randomCheckedCategory(data.categories);
        if (category.articles.length <= 1) {
            chrome.runtime.sendMessage({
                title: 'getWikipediaArticleByCategory',
                category: category.name,
                cmcontinue: category.cmcontinue
            });
        }
        addChangeArticleDiv(category);
    });
}

function addChangeArticleDiv(category) {
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
                    title: 'getWikipediaArticle',
                    pageId: category.articles[0]
                }, function () {
                    removeFirstArticleFromCategoryArticles(category.name);
                });
            });
        });
}


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.title == 'WikipediaArticle') {
        $(site.articleTitle).text(message.article.title);
        $(site.articleContent).html(message.article.content);
        $(site.articleImage).hide();
        parseArticle(site);
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

function randomCheckedCategory(categories) {
    const checkedCategories = categories.filter(category => category.checked);

    return checkedCategories[Math.floor(Math.random() * checkedCategories.length)];
}

function removeFirstArticleFromCategoryArticles(category) {
    chrome.storage.sync.get('categories', function (data) {
        let categories = data.categories;
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].name == category) {
                categories[i].articles.shift();
                chrome.storage.sync.set({
                    categories: categories
                }, function () {
                });

                return;
            }
        }
    });
}