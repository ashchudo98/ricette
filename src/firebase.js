// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA33jsyPWBhPf_Ly4DQQ76P2Ba7Z7E9cRo",
  authDomain: "ricette-9adab.firebaseapp.com",
  projectId: "ricette-9adab",
  storageBucket: "ricette-9adab.firebasestorage.app",
  messagingSenderId: "1072123979084",
  appId: "1:1072123979084:web:3ef78298a70a4ed5a45be9",
  measurementId: "G-133NQDEN7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };