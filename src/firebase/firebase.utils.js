import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBPDZjypfri7aNzNhr3q8N2krRdJ1R9v2s",
    authDomain: "yoni-shop-db.firebaseapp.com",
    projectId: "yoni-shop-db",
    storageBucket: "yoni-shop-db.appspot.com",
    messagingSenderId: "120797318266",
    appId: "1:120797318266:web:2bb0e923d8660867107fc3",
    measurementId: "G-GRH6H3Z349"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
