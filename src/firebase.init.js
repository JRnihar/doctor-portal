// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdRwuA1TzmVEQndz80KoNg-GFuibkNpOs",
    authDomain: "doctors-portal-70923.firebaseapp.com",
    projectId: "doctors-portal-70923",
    storageBucket: "doctors-portal-70923.appspot.com",
    messagingSenderId: "100623830462",
    appId: "1:100623830462:web:416a740dd716262c1efdef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth