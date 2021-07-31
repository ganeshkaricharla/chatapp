import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAvMqgvV3GsFubg2_X-Rtg9MXsnKWrzJcQ",
    authDomain: "chatapp-4b1d7.firebaseapp.com",
    projectId: "chatapp-4b1d7",
    storageBucket: "chatapp-4b1d7.appspot.com",
    messagingSenderId: "646458019967",
    appId: "1:646458019967:web:5fb9c045f2108aeb5b6f4a"
  }).auth();