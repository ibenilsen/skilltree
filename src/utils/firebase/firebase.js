import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';



export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firebaseDb = firebase.database();
