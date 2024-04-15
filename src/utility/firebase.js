// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD4370kKBxCvOk2iU3LLrVr8OjcSLethO4",
	authDomain: "netflix-gpt-project-01.firebaseapp.com",
	projectId: "netflix-gpt-project-01",
	storageBucket: "netflix-gpt-project-01.appspot.com",
	messagingSenderId: "1077293314550",
	appId: "1:1077293314550:web:78f328490205132063d7d7",
	measurementId: "G-8GTNLZYQ61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()