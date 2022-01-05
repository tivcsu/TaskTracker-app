import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRnT1DMOoZDff_IjdKVpny9pHrB8_z7vU",
  authDomain: "task-tracker-8e307.firebaseapp.com",
  projectId: "task-tracker-8e307",
  storageBucket: "task-tracker-8e307.appspot.com",
  messagingSenderId: "745065425359",
  appId: "1:745065425359:web:c9a40a79dd947ce305caba",
  measurementId: "G-1454LVXL0L",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
