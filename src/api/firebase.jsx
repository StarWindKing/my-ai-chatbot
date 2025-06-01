// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const FIRE_API = import.meta.env.FIRE_API;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: FIRE_API,
    authDomain: "test2-d8ee3.firebaseapp.com",
    projectId: "test2-d8ee3",
    storageBucket: "test2-d8ee3.firebasestorage.app",
    messagingSenderId: "1018309927627",
    appId: "1:1018309927627:web:2f5cb4dd22da08d714314e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;