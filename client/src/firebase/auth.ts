import {auth} from './firebase';

//Sign Up User
export const fbCreateUserWithEmailAndPassword = (
    email:string,
    password: string,

    ) =>  auth.createUserWithEmailAndPassword(email, password);


    //Log in User
export const fbSignInWithEmailAndPassword = (
    email: string,
    password: string
    
    ) => auth.signInWithEmailAndPassword(email,password)

    //Log out
export const SignOut = () => auth.signOut();

    //Reset Password
export const fbPasswordReset = (
    email: string
    ) => auth.sendPasswordResetEmail(email);
