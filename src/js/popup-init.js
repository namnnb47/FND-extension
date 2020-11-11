
const cookie = require('./cookie')

function init() {

    const user = cookie.getCookie('user')
    console.log({user})
    if (user) {
        // parse 
        window.location.replace('main.html');
    }

    // chrome.runtime.sendMessage({ message: 'is_user_signed_in' }, function (response) {
    //     console.log('init', response)
    //     if (response.message === 'success' && response.payload) {
    //         window.location.replace('main.html');
    //     }
    // });
}

init();
