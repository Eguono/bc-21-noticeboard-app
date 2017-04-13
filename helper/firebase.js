var firebase = require ("firebase");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCWuHYQeioVcjjSMFiL15b94F26_O4F-Fk",
    authDomain: "notice-board-3289c.firebaseapp.com",
    databaseURL: "https://notice-board-3289c.firebaseio.com",
    projectId: "notice-board-3289c",
    storageBucket: "notice-board-3289c.appspot.com",
    messagingSenderId: "3332183248"
  };

 module.exports =  firebase.initializeApp(config);
