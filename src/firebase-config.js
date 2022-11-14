import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAYHX2gN42htbWdP14ofqm-rVHtYrlXM8",
  authDomain: "andriana-app.firebaseapp.com",
  projectId: "andriana-app",
  storageBucket: "andriana-app.appspot.com",
  messagingSenderId: "223569774024",
  appId: "1:223569774024:web:a7d359ab06772f074d6cfd",
  measurementId: "G-F9GC9CP1GN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
