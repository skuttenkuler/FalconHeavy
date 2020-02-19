import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOM,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJ_ID,
    storageBucket: process.env.BUCKET_STORE,
    messagingSenderId: process.env.MESSAGE,
  };
 
  firebase.initializeApp(config);
 
  export const auth = firebase.auth();
  export const db = firebase.database();