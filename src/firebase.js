import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-6dab1.firebaseapp.com",
  projectId: "tutorial-6dab1",
  storageBucket: "tutorial-6dab1.appspot.com",
  messagingSenderId: "484134790103",
  appId: "1:484134790103:web:dda967a3bd09c569b3e192"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()