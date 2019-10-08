import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
{
    apiKey: "AIzaSyDHvR2bv-yL8qS5t7128SqfGCyW6pgWA7g",
    authDomain: "lojinha-2f378.firebaseapp.com",
    databaseURL: "https://lojinha-2f378.firebaseio.com",
    projectId: "lojinha-2f378",
    storageBucket: "",
    messagingSenderId: "677685000142",
    appId: "1:677685000142:web:31a8f92e0605735e835d9f",
    measurementId: "G-QPH4YCC13R"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

