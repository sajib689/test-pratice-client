import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBQF0OgWd3vx0t_Nyxsckyy31FLpi6qg7o",
  authDomain: "simple-firebase-1205f.firebaseapp.com",
  projectId: "simple-firebase-1205f",
  storageBucket: "simple-firebase-1205f.appspot.com",
  messagingSenderId: "933595953246",
  appId: "1:933595953246:web:0794960fe612dcf8e11ccf",
  measurementId: "G-2Q5EQM0K9G"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);