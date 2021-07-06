import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyD8T9XhRZbNFTr0EB9BOaR0h0qsXOWaHJ8",
  authDomain: "my-shop-db-8722b.firebaseapp.com",
  projectId: "my-shop-db-8722b",
  storageBucket: "my-shop-db-8722b.appspot.com",
  messagingSenderId: "97486482265",
  appId: "1:97486482265:web:4b26f6c1d741e9c75f7a48",
  measurementId: "G-JBD0SH6PYF"
};

if( firebase.apps.length === 0 ) firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalInfo) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get()
  if(!snapshot.exists){
    const {displayName, email}  = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    }catch(error){
      console.log('Error in creating user', error.message);
    }
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;