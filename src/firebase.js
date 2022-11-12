import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "first-project-68a07.firebaseapp.com",
  projectId: "first-project-68a07",
  storageBucket: "first-project-68a07.appspot.com",
  messagingSenderId: "850787584849",
  appId: "1:850787584849:web:6b8010503d067875752170",
  measurementId: "G-979ZSC1BRB",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);

export const storage = getStorage(app);
