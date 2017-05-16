(() => {
    idbKeyval.get('username')
    .then((u) => {
        if(u !== undefined){
            document.getElementById('username').value = u;
        }
    })
    .catch((error) => {
        console.log(error);
    });

    document.getElementById('choose').addEventListener('click', () => {
        let username = document.getElementById('username').value;
        idbKeyval.set('username', username)
        .then((u) => {
            window.user = u;
            console.log(user);
            toast('saved', { time: 1500, color: '#303030' });
            setTimeout(() => { location = 'index.html'; }, 1000);
        })
        .catch((error) => {
            console.log(error);
        });
    });
})();