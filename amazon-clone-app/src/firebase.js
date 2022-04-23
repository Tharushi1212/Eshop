import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYOz-c2dFTVemUBrQdxWq--fFwYnYeH1Y",
    authDomain: "clone-60f6b.firebaseapp.com",
    projectId: "clone-60f6b",
    storageBucket: "clone-60f6b.appspot.com",
    messagingSenderId: "380508318303",
    appId: "1:380508318303:web:f7235908fcb397241fc9ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

 export function login(email, password) {
   return signInWithEmailAndPassword(auth, email, password);
 }

 export function logout() {
   return signOut(auth);
 }

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

