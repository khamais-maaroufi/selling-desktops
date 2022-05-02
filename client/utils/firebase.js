import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALBm-6C2Dy_m8zQGZxwI-yirXuuJt4pxI",
  authDomain: "selling-desktops.firebaseapp.com",
  projectId: "selling-desktops",
  storageBucket: "selling-desktops.appspot.com",
  messagingSenderId: "788789207852",
  appId: "1:788789207852:web:da91687d9b4c8dcf68c289",
  measurementId: "G-ZBHJTW5EZJ",
};

const app = initializeApp(firebaseConfig);
//const firestore = firebase.firestore();
const db = getFirestore();
//export {firestore};
export { db };
