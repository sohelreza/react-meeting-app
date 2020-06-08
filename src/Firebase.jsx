import firebase from "firebase";
import "firebase/database";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARVJaxRGZbSqjH12dWEG87QZkt_qGL_A0",
  authDomain: "react-meeting-4694f.firebaseapp.com",
  databaseURL: "https://react-meeting-4694f.firebaseio.com",
  projectId: "react-meeting-4694f",
  storageBucket: "react-meeting-4694f.appspot.com",
  messagingSenderId: "592296667211",
  appId: "1:592296667211:web:b63b857d5015d1afb3c5ce",
  measurementId: "G-MTN1N4B53N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;