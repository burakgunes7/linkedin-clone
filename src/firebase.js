// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from './firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDlyRY6E-8K0dQrz5O-PFnA_Pf2qpMv7Ys",
    authDomain: "linkedin-clone-ae2b6.firebaseapp.com",
    projectId: "linkedin-clone-ae2b6",
    storageBucket: "linkedin-clone-ae2b6.appspot.com",
    messagingSenderId: "238948299338",
    appId: "1:238948299338:web:657984ff0ecaff721b6cb3",
    measurementId: "G-3ZCZDJB30C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };