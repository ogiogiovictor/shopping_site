import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBnvBz-dQTeLVqiYmwTrSbHsDewGOU4gJc",
    authDomain: "ecommerce-b930e.firebaseapp.com",
    projectId: "ecommerce-b930e",
    storageBucket: "ecommerce-b930e.appspot.com",
    messagingSenderId: "851821656357",
    appId: "1:851821656357:web:98fa403578864c1d32c2cc",
    measurementId: "G-D2T4FHRLER"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
