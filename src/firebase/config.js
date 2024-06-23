import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2w20RBeAL5M2U8TYrX-fVGCyT1J61cyo",
  authDomain: "messageform-fcef9.firebaseapp.com",
  projectId: "messageform-fcef9",
  storageBucket: "messageform-fcef9.appspot.com",
  messagingSenderId: "477250890731",
  appId: "1:477250890731:web:1be999b1e3a97f9b39c7ae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, timestamp };
