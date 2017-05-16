(function () {
    // document.addEventListener('contextmenu', event => event.preventDefault());
    
    let score = 0, highscore = 0, progress = 0, max = 5;
    //username
    idbKeyval.get('username')
    .then((user) => {
        if(user === undefined || user === ''){
            location = 'choose.html';
        }
        else{
            document.getElementById('username').innerHTML = `username: ${user}`;
        }
    })
    .catch((error) => {
        console.log(error);
    });

    //score
    idbKeyval.get('high-score')
    .then((score) => {
        highscore = score;
    })
    .catch((error) => {
        console.log(error);
    });

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

    let chooseFont = function (id) {
        let element = document.getElementById(id);
        let text = document.getElementById('question');
        
        ++progress;
        document.getElementById('progress').innerHTML = `Progress: ${progress}/${max}`;
        if(progress >= max){
            // location = 'score.html'; //we're done wuth the game and now we move to the score page...
        }

        console.log(text.style.fontFamily.replace(/"/g, '').replace(/'/g, ''), element.innerHTML);
        console.log(text.style.fontFamily.replace(/"/g, '').replace(/'/g, '') === element.innerHTML);
        
        if(text.style.fontFamily.replace(/"/g, '').replace(/'/g, '') === element.innerHTML) {
            ++score;
            toast('Correct', { time: 1500, color: '#00F' });
            document.getElementById('score').innerHTML = `Score: ${score}`;

            let event = new Event('click');
            document.getElementById('butRefresh').dispatchEvent(event);
        }else{
            toast('wrong', { time: 1500, color: '#F00' });

            let event = new Event('click');
            document.getElementById('butRefresh').dispatchEvent(event);
        }
    }

    Array.prototype.randomElement = function () {
        return this[Math.floor(Math.random() * this.length)];
    }

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
    options[next].innerHTML = current[next];

    next = opts.randomElement();
    index = opts.indexOf(next);
    opts.splice(index, 1);

    options[next].innerHTML = current[next];

    next = opts.randomElement();
    index = opts.indexOf(next);
    opts.splice(index, 1);

    options[next].innerHTML = current[next];

    next = opts.randomElement();
    index = opts.indexOf(next);
    opts.splice(index, 1);
    
    options[next].innerHTML = current[next];

    document.getElementById('one').addEventListener('click', (one) => {
        chooseFont('one');
    });

    document.getElementById('two').addEventListener('click', () => {
        chooseFont('two');
    });

    document.getElementById('three').addEventListener('click', () => {
        chooseFont('three');
    });

    document.getElementById('four').addEventListener('click', () => {
        chooseFont('four');
    });

    document.getElementById('butRefresh').addEventListener('click', () => {
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
        options[next].innerHTML = current[next];

        next = opts.randomElement();
        index = opts.indexOf(next);
        opts.splice(index, 1);

        options[next].innerHTML = current[next];

        next = opts.randomElement();
        index = opts.indexOf(next);
        opts.splice(index, 1);

        options[next].innerHTML = current[next];

        next = opts.randomElement();
        index = opts.indexOf(next);
        opts.splice(index, 1);
        
        options[next].innerHTML = current[next];
    });
})();