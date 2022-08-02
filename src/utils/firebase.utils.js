import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword  } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'



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
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
  
  

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalData = {displayName: 'Nik'}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    

    const userSnapshot = await getDoc(userDocRef);

    

    if(!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalData
        });

      } catch (error) {
        console.log('error creating the user ', error.message);
      }
    }
    return userDocRef;
  };


export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if(!email || !password){ return;}

  return await createUserWithEmailAndPassword(auth, email, password);
};



export const signInWithGoogleEmailAndPassword = async (email, password) => {
  
  if(!email || !password) {return ;}
  
  return await signInWithEmailAndPassword(auth, email, password);
};
        
      