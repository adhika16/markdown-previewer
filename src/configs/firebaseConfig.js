// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOb3ODv6rXFz11v8GRrRxvTgGvzhtxLTg",
  authDomain: "markdown-previewer-3aa0d.firebaseapp.com",
  projectId: "markdown-previewer-3aa0d",
  storageBucket: "markdown-previewer-3aa0d.appspot.com",
  messagingSenderId: "357347113873",
  appId: "1:357347113873:web:5029bfa7cba55534e53830",
  measurementId: "G-0K04XHEWCR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
