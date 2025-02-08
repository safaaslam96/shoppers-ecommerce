import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 
  apiKey: "AIzaSyA3TTW7Ffzb-w-EN-AsclAlsCB7PRvAWV4",
  authDomain: "shoppers-yt-b8161.firebaseapp.com",
  projectId: "shoppers-yt-b8161",
  storageBucket: "shoppers-yt-b8161.firebasestorage.app",
  messagingSenderId: "528502847911",
  appId: "1:528502847911:web:acfe38d8094fba79131e82"
};


// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };