import {db} from './firebase';

export const fbCreateUser = (
    id: string,
    username: string,
    email:string 
    ) => db.ref(`users/${id}`).set({
            email,
            username
        });
    
export const getUser = () => db.ref("users").once("value");
