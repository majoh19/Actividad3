// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYupzVQr_x0WkNHrjlGKg-iHCcBDOB4_4",
  authDomain: "actividad-3-a8ab2.firebaseapp.com",
  projectId: "actividad-3-a8ab2",
  storageBucket: "actividad-3-a8ab2.appspot.com",
  messagingSenderId: "302709100342",
  appId: "1:302709100342:web:1523a0512724dfeea9ed97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseFireStore = getFirestore(app);

export{
    FirebaseFireStore,
}