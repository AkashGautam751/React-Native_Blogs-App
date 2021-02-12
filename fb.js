import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCtka3IMt8kV72qdOprQSdoMFs9Qs8XJhM",
    authDomain: "rn-crud-c8b6d.firebaseapp.com",
    projectId: "rn-crud-c8b6d",
    storageBucket: "rn-crud-c8b6d.appspot.com",
    messagingSenderId: "492528091443",
    appId: "1:492528091443:web:9eda39a613304c8bf87e46",
    measurementId: "G-TRZH53E9YS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;