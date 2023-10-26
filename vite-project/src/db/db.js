import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2ObZ5gimcoleZuza8P8-KngoolnsgpvA",
  authDomain: "viteproject-d9cba.firebaseapp.com",
  projectId: "viteproject-d9cba",
  storageBucket: "viteproject-d9cba.appspot.com",
  messagingSenderId: "740070548116",
  appId: "1:740070548116:web:0fcc422d7c898573f84a81"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()