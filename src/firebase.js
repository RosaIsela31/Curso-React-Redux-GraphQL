import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

 let firebaseConfig = {
  apiKey: "AIzaSyCe3Vd9tPFsa9ymyCrfLZebJSJVU8IjTek",
  authDomain: "reduxreact-3816c.firebaseapp.com",
  databaseURL: "https://reduxreact-3816c.firebaseio.com",
  projectId: "reduxreact-3816c",
  storageBucket: "reduxreact-3816c.appspot.com",
  messagingSenderId: "165500587660",
  appId: "1:165500587660:web:48ac591b3714521dbdb5a9",
  measurementId: "G-LYH9VB6JGC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Declarando la base de datos
let db = firebase.firestore().collection('favs')

export function getFavs(uid) {
  return db.doc(uid).get()
    .then( snap => { return snap.data().array })
}


// el array es favorites que está dentro del estado
export function updateDB(array, uid) {
  return db.doc(uid).set({ array })
}

export function signOutGoogle() {
  firebase.auth().signOut()
}

export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then(snap => snap.user)
}