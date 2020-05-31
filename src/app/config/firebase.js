import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArg8zQhEnmryCQxXiksjqdaDrMVldNFPU",
    authDomain: "revents-e190c.firebaseapp.com",
    databaseURL: "https://revents-e190c.firebaseio.com",
    projectId: "revents-e190c",
    storageBucket: "revents-e190c.appspot.com",
    messagingSenderId: "86019323511",
    appId: "1:86019323511:web:0f2f440779b240c0843872",
    measurementId: "G-ESM6NLLNY3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default firebase;
