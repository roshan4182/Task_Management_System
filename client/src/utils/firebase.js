// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanagementsystem-d987e.firebaseapp.com",
  projectId: "taskmanagementsystem-d987e",
  storageBucket: "taskmanagementsystem-d987e.appspot.com",
  messagingSenderId: "606650003273",
  appId: "1:606650003273:web:396f36b8b48e33bbbbb498",
  measurementId: "G-5ZBH4BDCNB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
