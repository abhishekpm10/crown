import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyBma53zCVsrGvssNxQd-EYXmDu6pybmylM",
    authDomain: "crwn-db-e8117.firebaseapp.com",
    databaseURL: "https://crwn-db-e8117.firebaseio.com",
    projectId: "crwn-db-e8117",
    storageBucket: "crwn-db-e8117.appspot.com",
    messagingSenderId: "30101043466",
    appId: "1:30101043466:web:7af2edf1a63bca3c90a2f3",
    measurementId: "G-WTZ56MHZBP"
  };


    firebase.initializeApp(config);



    export const auth =firebase.auth();
    export const firestore= firebase.firestore();

    const provider=new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt:'select_account'});
    export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
    export default firebase;
