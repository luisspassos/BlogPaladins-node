const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDVUMDpdj2-LvwBl-BOnR09AkkNLkA3F6I",
    authDomain: "paladins-blog.firebaseapp.com",
    projectId: "paladins-blog",
    storageBucket: "paladins-blog.appspot.com",
    messagingSenderId: "456929630883",
    appId: "1:456929630883:web:99dae76b2ff8ed254ebd16",
    measurementId: "G-0WYZ9E02V6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

exports.db = db;