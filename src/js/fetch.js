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

    let options = [option_1, option_2, option_3, option_4];
    let current = [];
    let opts = ['0','1','2','3'];

    for(let i = 0;i < 4;i++){
        let font = fonts[Object.keys(fonts).randomElement()];
        while (true){
            if (current.indexOf(font) == -1){
                current.push(font);
                break;
            }else{
                font = fonts[Object.keys(fonts).randomElement()];
            }
        }
    }

    let next = opts.randomElement();
    let index = opts.indexOf(next);
    opts.splice(index, 1);

    question.style.fontFamily = current[next];
    option_1.innerHTML = current[next];

    next = opts.randomElement();
    index = opts.indexOf(next);
    opts.splice(index, 1);

    option_2.innerHTML = current[next];

    next = opts.randomElement();
    index = opts.indexOf(next);
    opts.splice(index, 1);

    option_3.innerHTML = current[next];

    next = opts.randomElement();
    index = opts.indexOf(next);
    opts.splice(index, 1);
    
    option_4.innerHTML = current[next];

    document.getElementById('butRefresh').addEventListener('click', () => {
        let options = [option_1, option_2, option_3, option_4];
        let current = [];
        let opts = [0,1,2,3];

        for(let i = 0;i < 4;i++){
            let font = fonts[Object.keys(fonts).randomElement()];
            while (true){
                if (current.indexOf(font) == -1){
                    current.push(font);
                    break;
                }else{
                    font = fonts[Object.keys(fonts).randomElement()];
                }
            }
        }

        let next = opts.randomElement();
        let index = opts.indexOf(next);
        opts.splice(index);
        question.style.fontFamily = current[next];
        option_1.innerHTML = next;

        next = opts.randomElement();
        index = opts.indexOf(next);
        opts.splice(index);
        option_2.innerHTML = next;

        next = opts.randomElement();
        index = opts.indexOf(next);
        opts.splice(index);
        option_3.innerHTML = next;

        next = opts.randomElement();
        index = opts.indexOf(next);
        opts.splice(index);
        option_4.innerHTML = next;
    });
})();

let getColor = function (id) {
    let element = document.getElementById(id);
    let text = document.getElementById('question');

    if(text.style.fontFamily.replace(/"/g, '') === element.innerHTML)
    {
        toast('Correct', 1500);
    }else{
        toast('wrong', 1500);
    }
}