import firebase from 'firebase'

const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyCnOQ078Nh634C-DOHSqqQzqqKAnfbh_xg",
    authDomain: "clone-b9d2a.firebaseapp.com",
    databaseURL: "https://clone-b9d2a.firebaseio.com",
    projectId: "clone-b9d2a",
    storageBucket: "clone-b9d2a.appspot.com",
    messagingSenderId: "413569568064",
    appId: "1:413569568064:web:9c298a4c09cf7ce80bbea5",
    measurementId: "G-RQQSG0VL8N"  
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};