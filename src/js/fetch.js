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

    let question = document.getElementById('question');

    let option_1 = document.getElementById('one');
    let option_2 = document.getElementById('two');
    let option_3 = document.getElementById('three');
    let option_4 = document.getElementById('four');

    // let current = [];
    // while(current.length < 4){
    //     current.push(fonts[Object.keys(fonts).randomElement()]);
    // }

    question.style.fontFamily = fonts[Object.keys(fonts).randomElement()];

    option_1.innerHTML = fonts[Object.keys(fonts).randomElement()];
    option_2.innerHTML = fonts[Object.keys(fonts).randomElement()];
    option_3.innerHTML = fonts[Object.keys(fonts).randomElement()];
    option_4.innerHTML = fonts[Object.keys(fonts).randomElement()];

    document.getElementById('butRefresh').addEventListener('click', () => {
        question.style.fontFamily = fonts[Object.keys(fonts).randomElement()];

        option_1.innerHTML = fonts[Object.keys(fonts).randomElement()];
        option_2.innerHTML = fonts[Object.keys(fonts).randomElement()];
        option_3.innerHTML = fonts[Object.keys(fonts).randomElement()];
        option_4.innerHTML = fonts[Object.keys(fonts).randomElement()];
    });
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
    console.log(element.innerHTML);
    if(text.style.fontFamily.replace(/"/g, '') === element.innerHTML)
    {
        toast('Correct', 1500);
        // location = 'index.html';
    }else{
        toast('wrong', 1500);
    }
    // console.log(text.style.fontFamily.replace('"', '').replace('"', ''), fonts[element.classList[1]]);
    // console.log(text.style.fontFamily.replace('"', '').replace('"', '') === fonts[element.classList[1]]);
}