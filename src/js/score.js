(() => {

    let sessionScore = document.getElementById('final-score');
    idbKeyval.get('score')
        .then((score) => {
            sessionScore.innerHTML = score;
        })
        .catch((error) => {
            console.log(error);
        });

})();