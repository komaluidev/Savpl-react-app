
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDCOfPPBWHaV2P0lhnNEQVrDQyRK2bv8wc",
  authDomain: "savpl-react-app.firebaseapp.com",
  projectId: "savpl-react-app",
  storageBucket: "savpl-react-app.firebasestorage.app",
  messagingSenderId: "238617739210",
  appId: "1:238617739210:web:e9577081b017568d6f5933"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export const db = getFirestore(app);