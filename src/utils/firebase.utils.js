import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD5xnOnFQqrJrUO8ejAo3uIMhuJHrpsIRo",
    authDomain: "crown-clothing-3bad1.firebaseapp.com",
    projectId: "crown-clothing-3bad1",
    storageBucket: "crown-clothing-3bad1.appspot.com",
    messagingSenderId: "738999233954",
    appId: "1:738999233954:web:f2b1097cd92a0b7c1e96fb"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  