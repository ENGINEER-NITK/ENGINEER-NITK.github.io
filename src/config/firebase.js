// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
    GoogleAuthProvider
} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyCluJmPLKEt5NQEZAMlsJ9_qb2iyeeDHxI",
    authDomain: "portfolio-blogs-49483.firebaseapp.com",
    projectId: "portfolio-blogs-49483",
    storageBucket: "portfolio-blogs-49483.appspot.com",
    messagingSenderId: "529913772297",
    appId: "1:529913772297:web:737c73f903d6895e86fbd8",
    measurementId: "G-VX53FPYZEY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
