import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7ig7EITJIFiPpLVChKc0RVWYCsghyxJk",
  authDomain: "diplom-ishi-7b878.firebaseapp.com",
  projectId: "diplom-ishi-7b878",
  storageBucket: "diplom-ishi-7b878.appspot.com",
  messagingSenderId: "657403011409",
  appId: "1:657403011409:web:717ec99e86e6c2d519f370",
  measurementId: "G-ZVQT114V6W"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)