import firebase from 'firebase'
const Firebase  = firebase.initializeApp({
    apiKey: "AIzaSyBB3w1Ay2oPZHpJpwetAYkOz70pH6oG91g",
    authDomain: "covid-97e7b.firebaseapp.com",
    projectId: "covid-97e7b",
    storageBucket: "covid-97e7b.appspot.com",
    messagingSenderId: "655352426425",
    appId: "1:655352426425:web:e15f39bf0a2e5b9c50d068",
    measurementId: "G-TYYC3RSGYR"
});

const db = Firebase.firestore();

export {db};
