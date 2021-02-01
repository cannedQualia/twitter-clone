import firebase from "firebase"; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyJnEhGtKx8ike7kbmQ4OO6g2iOYdtAdM",
    authDomain: "twitter-clone-20613.firebaseapp.com",
    databaseURL: "https://twitter-clone-20613.firebaseio.com",
    projectId: "twitter-clone-20613",
    storageBucket: "twitter-clone-20613.appspot.com",
    messagingSenderId: "1033276346057",
    appId: "1:1033276346057:web:820fbdacd93d567ea54718",
    measurementId: "G-SFMTKRMKGB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;