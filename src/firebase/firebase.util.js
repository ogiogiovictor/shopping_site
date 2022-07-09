//npm install firebase;
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

  //Creating a document or users in firebase
  export const creatUserprofileDocument = async (userAuth, addtionalData) => {
    if(!userAuth) return; 

    const  userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addtionalData
        })
      }catch (err) {
        console.log('error creating user', err.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
