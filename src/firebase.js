import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBKtJzyyio6uNyHjGBO9QO_CJlpGsKauao",
  authDomain: "chat-5a094.firebaseapp.com",
  projectId: "chat-5a094",
  storageBucket: "chat-5a094.appspot.com",
  messagingSenderId: "969413429360",
  appId: "1:969413429360:web:00093532cfe762c48e4cb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()