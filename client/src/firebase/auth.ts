import {auth} from './firebase';
import { PassThrough } from 'stream';

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
export const fbSignOut = () => auth.signOut();

    //Reset Password
export const fbPasswordReset = (
    email: string
    ) => auth.sendPasswordResetEmail(email);

    //password Change
export const fbPasswordUpdate = async (
    password: string
    ) => {
        if(auth.currentUser) {
            await auth.currentUser.updatePassword(password);
        }
        throw Error("No current User")
    };