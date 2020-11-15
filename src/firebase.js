const firebase = require('firebase');


const firebaseConfig = {
  apiKey: "AIzaSyCdru42HIY5NF1M9AgZKHKXNyeY4YFjUsg",
  authDomain: "news-feed-e5ec6.firebaseapp.com",
  databaseURL: "https://news-feed-e5ec6.firebaseio.com",
  projectId: "news-feed-e5ec6",
  storageBucket: "news-feed-e5ec6.appspot.com",
  messagingSenderId: "862138510041",
  appId: "1:862138510041:web:0a20bedfaf55c2447becc8",
  measurementId: "G-7QPXZ650Y7"
};
  firebase.initializeApp(firebaseConfig);
  return module.exports;