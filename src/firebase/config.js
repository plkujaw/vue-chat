import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: `${process.env.VUE_FIREBASE_API}`,
  authDomain: 'ninja-89ca6.firebaseapp.com',
  projectId: 'ninja-89ca6',
  storageBucket: 'ninja-89ca6.appspot.com',
  messagingSenderId: '122128843227',
  appId: '1:122128843227:web:24d8340d9749713d5a27fe',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const auth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, projectFirestore, timestamp };
