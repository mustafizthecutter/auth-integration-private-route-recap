// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALHZtL1s7k-Jg-N-4O27U3wOmgYGE39tQ",
    authDomain: "auth-combination-recap.firebaseapp.com",
    projectId: "auth-combination-recap",
    storageBucket: "auth-combination-recap.appspot.com",
    messagingSenderId: "873221940340",
    appId: "1:873221940340:web:3e0cf15481107ae01c9d21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;