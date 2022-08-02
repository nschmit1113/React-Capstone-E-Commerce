import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGoogleRedirect, signInWithGooglePopup, createUserDocumentFromAuth, createUserWithEmailAndPassword } from "../../utils/firebase.utils";
import { useEffect } from "react";
import SignUp from "../../components/sign-up/sign-up.component";


const SignIn = () => {

    useEffect(() => {
        async function fetchData () {
           
            const response = await getRedirectResult(auth);
           
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        } fetchData();
    }, []);
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sing in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sing in with Google Redirect</button>
            <SignUp />
        </div>
    );
};
 
export default SignIn;