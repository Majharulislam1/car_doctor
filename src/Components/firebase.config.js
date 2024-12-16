 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyBEcP8zWIGujtEVMLXoojlsa5GiQxjbOIg",
  authDomain: "project--01-f98ad.firebaseapp.com",
  projectId: "project--01-f98ad",
  storageBucket: "project--01-f98ad.firebasestorage.app",
  messagingSenderId: "1094168502152",
  appId: "1:1094168502152:web:6b5c42648cd856b381243d"
};

 
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;