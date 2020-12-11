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
    localStorage.removeItem("EMAIL");
    localStorage.removeItem("TOKEN");
    chrome.tabs.getSelected(null, function(tab){
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(tab.id, {code: code});
    });
    window.location.replace('login.html');
});
console.log("tes")
var email =  localStorage.getItem("EMAIL");
document.getElementById("email").innerHTML=email;
document.getElementById("statistic").addEventListener("click", function(viewStatistic){
    viewStatistic.preventDefault();
    window.open('https://sub.vayvonthechap.com:9000', '_blank');
});