import firebase from "firebase";
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDihZJG2MpuGb15GDQ_CS_pbZ6fg5CsaG0",
  authDomain: "e-libreria.firebaseapp.com",
  projectId: "e-libreria",
  storageBucket: "e-libreria.appspot.com",
  messagingSenderId: "1007454264044",
  appId: "1:1007454264044:web:2a5911b637d8ceb64223c9",
  measurementId: "G-H8Y352W6Z2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
