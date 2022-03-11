/** Variables available in all js files:
 * all the exported constants from globals.js
 */

/** Directories available as aliases
 * all the paths within Dir in globals.js
 */

import dompurify from 'dompurify'
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth, signInWithRedirect, getRedirectResult, signOut, GoogleAuthProvider, onAuthStateChanged, connectAuthEmulator } from "firebase/auth";

import 'picturefill'
import 'utils/errors'


let url = window.location.href

 var firebaseConfig = {
  apiKey: "AIzaSyBCU8RRxV3qaSyxOgc4ObSWmUhlfnJsYTo",
  authDomain: "geotools-bc75a.firebaseapp.com",
  projectId: "geotools-bc75a",
  storageBucket: "geotools-bc75a.appspot.com",
  messagingSenderId: "106157954659",
  appId: "1:106157954659:web:3e189110236a2138438a56",
  measurementId: "G-Z6GK19K3L0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
// Get a reference to the database service

const googleProvider = new GoogleAuthProvider();
const db = getDatabase();
if (location.hostname === "localhost") {
  // Point to the RTDB emulator running on localhost.
connectAuthEmulator(auth, "http://localhost:9099");
}


if(window.location.href.includes('login') ){
$('#google-sign-in').on('click', function (e) {
  e.preventDefault()
  signInWithRedirect(auth, googleProvider);

});
onAuthStateChanged(auth,  (user) => {
  if (user) {


getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  } else {


      console.log(' signed out')
  }
});

        import(/* webpackChunkName: "lazy-module.login" */ './lazy-module').then(module => {
            const login = module.default

            login()
        })
}




window.addEventListener('DOMContentLoaded', (event) => {
$('#testBtn').on('click', function () {
   var myModal = new bootstrap.Modal(document.getElementById('modalSignOut'))
 myModal.toggle()
});

onAuthStateChanged(auth,  (user) => {
// sign-in-elm

// sign-out-elm
  if (user) {

  $("#sign-in-elm").css("display", "none");
  $("#sign-out-elm").css("display", "block");


  } else {


  $("#sign-out-elm").css("display", "none");
  $("#sign-in-elm").css("display", "block");





  }
});



$('#sign-out').on('click', async function (e) {
  e.preventDefault()
  signOut(auth).then(() => {

}).catch((error) => {
  // An error happened.
});



});



  $('#user-btn').on('click', function (e) {
    e.preventDefault()
  });



/*
  if(url.includes('login')){

  if(user){

  }
  }*/





// eslint-disable-next-line no-console












});
