import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmJqKd8xmrN50E8gM99cguz5GpTbKTbxg",
    authDomain: "database-a70b5.firebaseapp.com",
    projectId: "database-a70b5",
    storageBucket: "database-a70b5.appspot.com",
    messagingSenderId: "82925785358",
    appId: "1:82925785358:web:c4d6dfbc8ec0ef7dde475f",
    measurementId: "G-488T39DNZZ"
  };
  
  // Initialize Firebase
//   const app = firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

  const app = firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);  
  // export const auth = app.auth();
  export const db = app.firestore()

  export default app;