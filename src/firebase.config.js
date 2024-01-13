// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAouCpmETUY7CglMS3Y-zykI8Jim38nQ0g",
  authDomain: "k9-money-income01.firebaseapp.com",
  databaseURL: "https://k9-money-income01-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "k9-money-income01",
  storageBucket: "k9-money-income01.appspot.com",
  messagingSenderId: "175279902064",
  appId: "1:175279902064:web:f6e6211bd2f4ed370dd3b5",
  measurementId: "G-K5N7QGBV2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);