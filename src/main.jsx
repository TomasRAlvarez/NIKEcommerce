import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAiw-nxreymMgFyLk9z7MYyXEzADo_Z7oU",
	authDomain: "nikecommerce-d2f1e.firebaseapp.com",
	projectId: "nikecommerce-d2f1e",
	storageBucket: "nikecommerce-d2f1e.appspot.com",
	messagingSenderId: "952251337651",
	appId: "1:952251337651:web:8758d2a2c3d95d0e1f19c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
