/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBUe1OxuXJKVgJ5RBZLPc-2_u-tFcCnyw4",
	authDomain: "netflixgpt-87ead.firebaseapp.com",
	projectId: "netflixgpt-87ead",
	storageBucket: "netflixgpt-87ead.appspot.com",
	messagingSenderId: "471128691224",
	appId: "1:471128691224:web:0404594b9d9e97fd30a96d",
	measurementId: "G-NWZ355R2FE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
