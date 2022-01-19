import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth";
import 'firebase/storage'
const app = firebase.initializeApp({
  apiKey: "AIzaSyBf-t-uGmRlH8II070765faPi8W3eXY0_s",
  authDomain: "linkedin-masai.firebaseapp.com",
  databaseURL: "https://linkedin-masai-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "linkedin-masai",
  storageBucket: "linkedin-masai.appspot.com",
  messagingSenderId: "752677092839",
  appId: "1:752677092839:web:20024c08d0c85305a7d142",
  measurementId: "G-QF1H2B9ET4"
})
export const db = firebase.firestore();
export const timestamp = ()=> {return firebase.firestore.FieldValue.serverTimestamp()}
export const storage = firebase.storage()
export const auth = app.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default app;