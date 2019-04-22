const site = newsSites[window.location.host];

$(site.changeArticleDiv)
    .prepend(`
    <div>
        <p>
            Nuk te pelqen artikulli? 
            Ndrysho ate me nje artikull te <b>Wikipedia</b>  
            <a id='changeArticleWikipedia'>Kliko ketu</a>
        </p>
    </div>
    `)