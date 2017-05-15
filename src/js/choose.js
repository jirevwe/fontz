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
})();

let choose = function(){

    let username = document.getElementById('username').value;
    // if(username === '' || username.length == 0){
    //     username = 'No Name';
    // }

    idbKeyval.set('username', username)
    .then((u) => {
        window.user = u;
        console.log(user);
        toast('saved');
        setTimeout(() => { location = 'index.html'; }, 1000);
    })
    .catch((error) => {
        console.log(error);
    });
}