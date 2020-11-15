const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
var firebaseui = require('firebaseui');
const cookie = require('./cookie')
// const popup = require('./popup')

const firebaseConfig = {
    apiKey: "AIzaSyBkDv_LAXmebzcMyh9KMC3qi8NoD8Z16rM",
    authDomain: "loginextension.firebaseapp.com",
    databaseURL: "https://loginextension.firebaseio.com",
    projectId: "logingmailextension",
    storageBucket: "logingmailextension.appspot.com",
    messagingSenderId: "181107363814",
    appId: "1:181107363814:web:705fd67915744ba6d91027",
    measurementId: "G-3MLHL840EQ"
  };
firebase.initializeApp(firebaseConfig);

console.log('FIREBASE INIT');

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult:  (authResult, redirectUrl) => {
            console.log('SIGN IN SUCCESS', authResult)

            cookie.setCookie('user', authResult, 1)
            // popup.sendPortMessage({
            //     action: 'sign-in',
            //     user: authResult,
            // })

            // chrome.runtime.sendMessage({ message: 'sign_in' },  (response)  => {
            //     console.log(response)
            //     if (response.message === 'sign_in') {
            //         window.location.href('welcome.html');
            //     }
            // });
            return true;
        },
        uiShown: () => {
            document.getElementById('my_sign_in').style.display = 'none';
            document.getElementById('wrapper').style.pointerEvents = 'none';
        }
    },
    signInFlow: 'popup',
    signInSuccessUrl: 'welcome.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            customParameters: {
                prompt: 'select_account'
            }
        },   
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      
    ],
    // Terms of service url.
    // tosUrl: '<your-tos-url>',
    // Privacy policy url.
    // privacyPolicyUrl: '<your-privacy-policy-url>'
};

document.querySelector('#wrapper').addEventListener('click', () => {
    console.log('CLICK')
    ui.start('#sign_in_options', uiConfig);
});

document.querySelector('#wrapper').addEventListener('mouseover', () => {
    let sign_in = document.querySelector('#my_sign_in');
    sign_in.classList.remove('sign_in_no_hover');
    sign_in.classList.add('sign_in_hover');
});

document.querySelector('#wrapper').addEventListener('mouseleave', () => {
    let sign_in = document.querySelector('#my_sign_in');
    sign_in.classList.remove('sign_in_hover');
    sign_in.classList.add('sign_in_no_hover');
});
