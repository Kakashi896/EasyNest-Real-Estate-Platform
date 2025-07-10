// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAl_PTGepOuWPuWR86AEFQn4FP0gSe0WLU",
  authDomain: "easynest-fb2fe.firebaseapp.com",
  projectId: "easynest-fb2fe",
  storageBucket: "easynest-fb2fe.firebasestorage.app",
  messagingSenderId: "581516854424",
  appId: "1:581516854424:web:49c2e8db23eb9a8c1bfced",
  measurementId: "G-QF8R971RD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// ✅ Initialize Firestore
const db = getFirestore(app);
export { db };