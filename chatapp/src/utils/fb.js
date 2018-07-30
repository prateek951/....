import firebase from 'firebase';
import firestore from 'firebase/firestore';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDK-Tq8ktRX6PmuaO3LJzMVDS6xMSIjDeE",
    authDomain: "chat-app-b8c1f.firebaseapp.com",
    databaseURL: "https://chat-app-b8c1f.firebaseio.com",
    projectId: "chat-app-b8c1f",
    storageBucket: "chat-app-b8c1f.appspot.com",
    messagingSenderId: "1065556050573"
  };
const fbApp = firebase.initializeApp(config);
fbApp.firestore().settings({ timestampsInSnapshots: true});

//export firestore database
export default fbApp.firestore();