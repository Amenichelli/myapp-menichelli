import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKaAoOe4E9RDfVpFnPpGjXrHEF6nUpSNA",
  authDomain: "proyecto-menichelli.firebaseapp.com",
  projectId: "proyecto-menichelli",
  storageBucket: "proyecto-menichelli.appspot.com",
  messagingSenderId: "128878545764",
  appId: "1:128878545764:web:965bdf8e0a465a36864871",
  measurementId: "G-NE9EK34H0D"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
   document.getElementById('root')
);

