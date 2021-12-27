// // // const firebaseConfig = {
// // //     apiKey: "AIzaSyD72v6zEKHi0wczDlSNUnoMQOJk40Sae6o",
// // //     authDomain: "clone-80c90.firebaseapp.com",
// // //     projectId: "clone-80c90",
// // //     storageBucket: "clone-80c90.appspot.com",
// // //     messagingSenderId: "1018253785381",
// // //     appId: "1:1018253785381:web:cf787f4df3f9ec3de702cc",
// // //     measurementId: "G-4Y9P0502B9"
// // //   };

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//   // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {collection, getDocs, getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from "firebase/app";
import 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
require('firebase/auth')
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD72v6zEKHi0wczDlSNUnoMQOJk40Sae6o",
  authDomain: "clone-80c90.firebaseapp.com",
  projectId: "clone-80c90",
  storageBucket: "clone-80c90.appspot.com",
  messagingSenderId: "1018253785381",
  appId: "1:1018253785381:web:cf787f4df3f9ec3de702cc",
  measurementId: "G-4Y9P0502B9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const db=getFirestore();
const auth = getAuth();
// const todosCo=collection(db,'todos');
// const snapshot=await getDocs(todosCol);

export {db,auth};
// //   // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyDYWIUZXRPXtDYXZKLh-3AvwHIxFahtcyM",
// //   authDomain: "fir-84666.firebaseapp.com",
// //   projectId: "fir-84666",
// //   storageBucket: "fir-84666.appspot.com",
// //   messagingSenderId: "806391460258",
// //   appId: "1:806391460258:web:ef82bf9dfe4ea51c0042fb",
// //   measurementId: "G-805WEXQ1KC"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// // import firebase from "firebase";
// // const firebaseConfig = {
// //   apiKey: "AIzaSyDYWIUZXRPXtDYXZKLh-3AvwHIxFahtcyM",
// //   authDomain: "fir-84666.firebaseapp.com",
// //   projectId: "fir-84666",
// //   storageBucket: "fir-84666.appspot.com",
// //   messagingSenderId: "806391460258",
// //   appId: "1:806391460258:web:ef82bf9dfe4ea51c0042fb",
// //   measurementId: "G-805WEXQ1KC"
// // };


// // const firebaseApp = firebase.initializeApp(firebaseConfig);

// // const db = firebaseApp.firestore();
// // const auth = firebase.auth();

// // export { db, auth };


// import * as firebase from 'firebase';
// // import firebase from "node_modules\@firebase"
// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };