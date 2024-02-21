// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoVZSYoY6rZHAZWAyeyYsNu2hPe-wd9Nk",
  authDomain: "coconet-firebase.firebaseapp.com",
  projectId: "coconet-firebase",
  storageBucket: "coconet-firebase.appspot.com",
  messagingSenderId: "656448845919",
  appId: "1:656448845919:web:a89874f5e663c68d1c03ea",
  measurementId: "G-FZWCEY33XY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const firestore = getFirestore(app);
export {auth,firestore}