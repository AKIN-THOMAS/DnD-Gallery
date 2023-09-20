// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoAnxgT1OHAKD1qi6dwRRyQiIkZoFTN7c",
  authDomain: "hng-gallery-authentication.firebaseapp.com",
  projectId: "hng-gallery-authentication",
  storageBucket: "hng-gallery-authentication.appspot.com",
  messagingSenderId: "766845250783",
  appId: "1:766845250783:web:eedf02b11444b68558cd6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth, signInWithEmailAndPassword };
