import { initializeApp } from "firebase/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAtisiXJ3dpxPeTvowRM5LCbBtkUk4jyNo",
  authDomain: "atlantida-22459.firebaseapp.com",
  projectId: "atlantida-22459",
  storageBucket: "atlantida-22459.appspot.com",
  messagingSenderId: "852109180603",
  appId: "1:852109180603:web:20f7bf7963f171d737f39e",
};

const app = initializeApp(firebaseConfig);
const fire = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default fire;
