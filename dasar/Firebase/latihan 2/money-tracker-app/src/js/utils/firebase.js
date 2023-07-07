// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8tBucdKknffQe0NAwp8zt6B9KDkDd8MQ",
  authDomain: "money-tracker-app-cc6e5.firebaseapp.com",
  projectId: "money-tracker-app-cc6e5",
  storageBucket: "money-tracker-app-cc6e5.appspot.com",
  messagingSenderId: "641297821781",
  appId: "1:641297821781:web:3c9a65b0448fb6bc97e4dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export {app, auth, db, storage}