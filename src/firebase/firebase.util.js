import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCj8XBHKvqWrjU44sl6ntSaMqUAzdqbfe0",
  authDomain: "myfirst-shop.firebaseapp.com",
  projectId: "myfirst-shop",
  storageBucket: "myfirst-shop.appspot.com",
  messagingSenderId: "778043705467",
  appId: "1:778043705467:web:7df3b4bc1f21e6c420bade",
  measurementId: "G-0TMXV6NJVQ"
};
const app = initializeApp(config)

export const auth = getAuth();

export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => 
signInWithPopup(auth, provider)
  .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });;

// export default firebase;