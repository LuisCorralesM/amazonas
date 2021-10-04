import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6qN7dKi5c52cdAsdSpEq_TWBhTGlyr8U",
  authDomain: "login-eec9d.firebaseapp.com",
  projectId: "login-eec9d",
  storageBucket: "login-eec9d.appspot.com",
  messagingSenderId: "1083532993878",
  appId: "1:1083532993878:web:d2948105574b10fd5422f7"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {db, google, facebook, app}
