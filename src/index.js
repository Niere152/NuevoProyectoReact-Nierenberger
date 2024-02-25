import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8fQ6Ur5HmAWlqQk4JQ0mNXfnNmSr9L58",
  authDomain: "test-coderhouse-29764.firebaseapp.com",
  projectId: "test-coderhouse-29764",
  storageBucket: "test-coderhouse-29764.appspot.com",
  messagingSenderId: "297476892953",
  appId: "1:297476892953:web:91136f5e8ec4bbae8dfd88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
