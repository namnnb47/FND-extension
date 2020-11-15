// const popup = require('./popup')
const cookie = require('./cookie')

document.querySelector('#sign_out').addEventListener('click', () => {
    // chrome.runtime.sendMessage({ message: 'sign_out' }, function (response) {
    //     if (response.message === 'success') {
    //         window.location.replace('popup.html');
    //     }
    // });

    cookie.setCookie('user', null, 0)
    // popup.sendPortMessage({
    //     action: 'sign-out',
    //     user: null,
    // })
    console.log('SIGN OUT')
    
    window.location.replace('popup.html');
});