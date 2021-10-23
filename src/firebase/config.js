import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOBnqSjFYxjQAoTDoPhUlrdnyd_glRb-4",
  authDomain: "ec-newmanag.firebaseapp.com",
  projectId: "ec-newmanag",
  storageBucket: "ec-newmanag.appspot.com",
  messagingSenderId: "887841883393",
  appId: "1:887841883393:web:85f64fa6dcefc5d6438700",
  measurementId: "G-GX51RG0HXX"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app);
}