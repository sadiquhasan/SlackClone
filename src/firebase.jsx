import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBJVlq_QC8kfWTH6z5B97O81WBI0YuytKM",
    authDomain: "slack-clone-2011.firebaseapp.com",
    projectId: "slack-clone-2011",
    storageBucket: "slack-clone-2011.appspot.com",
    messagingSenderId: "111699084286",
    appId: "1:111699084286:web:f2be0df076dd32a872b6af",
    measurementId: "G-RGYCKQDE6T"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider, db }

