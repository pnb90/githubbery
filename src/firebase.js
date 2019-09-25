import firebase from 'firebase'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC1ZuSsimlAXPs10bMq0V6E0qxwtaNxtkc",
    authDomain: "githubbery.firebaseapp.com",
    databaseURL: "https://githubbery.firebaseio.com",
    projectId: "githubbery",
    storageBucket: "",
    messagingSenderId: "562715355192",
    appId: "1:562715355192:web:0a8bf8bb33a737fa5e5ecd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
