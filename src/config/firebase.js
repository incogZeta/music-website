// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_8T3mTiHfnQKFJEPpB5P2dBszMvPnVg8",
  authDomain: "playlists-moc.firebaseapp.com",
  projectId: "playlists-moc",
  storageBucket: "playlists-moc.appspot.com",
  messagingSenderId: "485284536908",
  appId: "1:485284536908:web:1705b5893a97633fcf4ae9",
  measurementId: "G-0HPTRMPJFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
