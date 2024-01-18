// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLKmp4wMARsebC-kmBnsN3lfhyqQeTlUY",
  authDomain: "myecom-5c34c.firebaseapp.com",
  projectId: "myecom-5c34c",
  storageBucket: "myecom-5c34c.appspot.com",
  messagingSenderId: "736688066380",
  appId: "1:736688066380:web:ceade57df6eddf3000c9e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}