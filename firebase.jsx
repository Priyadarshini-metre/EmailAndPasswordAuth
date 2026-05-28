// firebase.jsx

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAtswpvRiXcgjlTXG1gwNMyPM3BYpQ",
    authDomain: "reactauth-d1fc9.firebaseapp.com",
    projectId: "reactauth-d1fc9",
    storageBucket: "reactauth-d1fc9.firebasestorage.app",
    messagingSenderId: "1052746902229",
    appId: "1:1052746902229:web:3b477a7a9f0228d460d71c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth
export const auth = getAuth(app);
