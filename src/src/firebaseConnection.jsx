import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDLeCw-JXZ6CsrXbBN8NlyppNdrtL-wadk",
    authDomain: "trabalho-93dd1.firebaseapp.com",
    projectId: "trabalho-93dd1",
    storageBucket: "trabalho-93dd1.appspot.com",
    messagingSenderId: "713124756896",
    appId: "1:713124756896:web:d85e00cd4f4448cfa138c5"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export {db, auth};