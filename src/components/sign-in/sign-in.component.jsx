import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleEmailAndPassword } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in.styles.scss'



const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {
    const[formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            
            const { user } = await signInWithGoogleEmailAndPassword(email, password);
            // setCurrentUser(user);
            
            resetFormFields();
            
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('No user matching that email.');
                    break;
                default:
                    console.error(error); 
                    break;
            } 
            
        }

    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };

    const signInWithGoogle = async () => {
         await signInWithGooglePopup();
        // setCurrentUser(user);
         
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                    label='Email'
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}
                />
                
                <FormInput 
                    label='Password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
                
            </form>
        </div>
    )
};

export default SignIn;