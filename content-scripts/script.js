const site = newsSites[window.location.host];

$(site.changeArticleDiv)
    .prepend(`
    <div>
        <p>
            Nuk te pelqen artikulli? 
            Ndrysho ate me nje artikull te <b>Wikipedia</b>  
            <a id='${site.name}changeArticle'>Kliko ketu</a>
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