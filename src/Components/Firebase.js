// import firebase from 'firebase/app'
//import 'firebase/<package>'
// ne pas garder import global de firebase

import Firebase from "firebase";
let config = {
  apiKey: "AIzaSyAX38E0DtHk5LnLwTuGQX3uQBtXaBTm3CE",
  authDomain: "rakuten-d5a9a.firebaseapp.com",
  databaseURL: "https://rakuten-d5a9a.firebaseio.com",
  projectId: "rakuten-d5a9a",
  storageBucket: "rakuten-d5a9a.appspot.com",
  messagingSenderId: "1036956464084",
  appId: "1:1036956464084:web:600a45b11ec65402"
};
var email = "jason.kissel23@gmail.com";
var password = "ok2332";

if (!Firebase.apps.length) {
  Firebase.initializeApp(config);
}

/*Firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
Firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
Firebase.auth()
  .signOut()
  .then(function() {
    // Sign-out successful.
  })
  .catch(function(error) {
    // An error happened.
  });*/
Firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
const app = Firebase.firestore();

var user = Firebase.auth().currentUser;

export const db = app;
