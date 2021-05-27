import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDzG5BTjqSmz2VuOrEcu0YfzD-BTtNyvgY',
  authDomain: 'whatsappclone-10624.firebaseapp.com',
  projectId: 'whatsappclone-10624',
  storageBucket: 'whatsappclone-10624.appspot.com',
  messagingSenderId: '564524680927',
  appId: '1:564524680927:web:18031a9adab321152c8b6a',
  measurementId: 'G-RF9M066SFT',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
