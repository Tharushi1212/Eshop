import firebase from "firebase";

 const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYOz-c2dFTVemUBrQdxWq--fFwYnYeH1Y",
  authDomain: "clone-60f6b.firebaseapp.com",
  projectId: "clone-60f6b",
  storageBucket: "clone-60f6b.appspot.com",
  messagingSenderId: "380508318303",
  appId: "1:380508318303:web:f7235908fcb397241fc9ea"
 });
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db,auth };



