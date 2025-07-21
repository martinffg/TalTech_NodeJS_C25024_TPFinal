// import { config } from "dotenv";
// config();
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { envs } from "./envs.js";
console.log(envs);

const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} = envs.database;
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
