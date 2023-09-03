// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgpekWvZe7mqHehpH0v8rzn_MTJp7fcxs",
  authDomain: "furnapp-685d9.firebaseapp.com",
  projectId: "furnapp-685d9",
  storageBucket: "furnapp-685d9.appspot.com",
  messagingSenderId: "646817465956",
  appId: "1:646817465956:web:27dc6bad5a618b14470171",
  measurementId: "G-F2TSPWL1EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {app, auth, storage, db}