(function () {
    Array.prototype.randomElement = function () {
        return this[Math.floor(Math.random() * this.length)];
    }

    let fonts = {
        'roboto': 'Roboto',
        'open-sans': 'Open Sans',
        'droid-serif': 'Droid Serif',
        'indie-flower': 'Indie Flower',
        'lobster': 'Lobster',
        'pacifico': 'Pacifico',
        'archivo-black': 'Archivo Black',
        'hammersmith-one': 'Hammersmith One',
        'poiret-one': 'Poiret One'
    };


    let text = document.getElementById('question');
    text.style.fontFamily = fonts[Object.keys(fonts).randomElement()];
})();

let fonts = {
    'roboto': 'Roboto',
    'open-sans': 'Open Sans',
    'droid-serif': 'Droid Serif',
    'indie-flower': 'Indie Flower',
    'lobster': 'Lobster',
    'pacifico': 'Pacifico',
    'archivo-black': 'Archivo Black',
    'hammersmith-one': 'Hammersmith One',
    'poiret-one': 'Poiret One'
};

let getStyleRuleValue = function (style, selector, sheet) {
    var sheets = typeof sheet !== 'undefined' ? [sheet] : document.styleSheets;
    for (var i = 0, l = sheets.length; i < l; i++) {
        var sheet = sheets[i];
        if (!sheet.cssRules) { continue; }
        for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
            var rule = sheet.cssRules[j];
            if (rule.selectorText && rule.selectorText.split(',').indexOf(selector) !== -1) {
                return rule.style[style];
            }
        }
    }
    return null;
}

let getColor = function (id) {
    let element = document.getElementById(id);
    // console.log(element.classList[1]);
    let text = document.getElementById('question');
    if(text.style.fontFamily.replace('"', '').replace('"', '') === fonts[element.classList[1]])
    {
        location = 'index.html';
    }
    // console.log(text.style.fontFamily.replace('"', '').replace('"', ''), fonts[element.classList[1]]);
    // console.log(text.style.fontFamily.replace('"', '').replace('"', '') === fonts[element.classList[1]]);
}