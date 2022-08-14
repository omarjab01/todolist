import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdXqsSk7IdkfQQMZO1QVLI2w2z-9CWlEQ",
  authDomain: "todolistbase-81f2b.firebaseapp.com",
  projectId: "todolistbase-81f2b",
  storageBucket: "todolistbase-81f2b.appspot.com",
  messagingSenderId: "683181732163",
  appId: "1:683181732163:web:c399d08a7541dc06527ff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)