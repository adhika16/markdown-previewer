import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Application from "./components/Application";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOb3ODv6rXFz11v8GRrRxvTgGvzhtxLTg",
  authDomain: "markdown-previewer-3aa0d.firebaseapp.com",
  projectId: "markdown-previewer-3aa0d",
  storageBucket: "markdown-previewer-3aa0d.appspot.com",
  messagingSenderId: "357347113873",
  appId: "1:357347113873:web:5029bfa7cba55534e53830",
  measurementId: "G-0K04XHEWCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
