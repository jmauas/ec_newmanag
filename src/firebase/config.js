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

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.EACT_APP_SORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app);
}