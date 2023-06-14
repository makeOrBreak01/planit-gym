// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClsGlWqL1erHqfoZNQs2w23yZUKVBiCPs",
  authDomain: "workout-planner-7e313.firebaseapp.com",
  projectId: "workout-planner-7e313",
  storageBucket: "workout-planner-7e313.appspot.com",
  messagingSenderId: "324281317171",
  appId: "1:324281317171:web:ce0cbf4fa67823e0a37046",
  measurementId: "G-2YWHXPBMER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);