// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA6s4McsE4wul0oVxFy5SCKr6lD12YfkM",
  authDomain: "my-first-project-ee91b.firebaseapp.com",
  projectId: "my-first-project-ee91b",
  storageBucket: "my-first-project-ee91b.appspot.com",
  messagingSenderId: "171716040165",
  appId: "1:171716040165:web:134090ccf9534653744b0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export { app };