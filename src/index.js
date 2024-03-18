// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-DT6ioBb8-D9eEyjPNgSqLzZ6v4o-sh8",
  authDomain: "pocasi-f4ecf.firebaseapp.com",
  projectId: "pocasi-f4ecf",
  storageBucket: "pocasi-f4ecf.appspot.com",
  messagingSenderId: "49908304835",
  appId: "1:49908304835:web:1427d9923fb578b4578b76",
  measurementId: "G-8YVYHPRZME"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
