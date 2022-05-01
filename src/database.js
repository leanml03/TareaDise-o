// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import firebase from 'firebase';
//const firebase = require('firebase-admin');
const { getDatabase, ref } = require('firebase/database');
const { initializeApp } = require('firebase/app');
//const {
//getFirestore,
//collection,
//getDocs,
//} = require('firebase/firestore/lite');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCt_o7yaHJeMCL--kXp7oUGPHBWAVUNq3M',
  authDomain: 'tareaarquicapas.firebaseapp.com',
  databaseURL: 'https://tareaarquicapas-default-rtdb.firebaseio.com',
  projectId: 'tareaarquicapas',
  storageBucket: 'tareaarquicapas.appspot.com',
  messagingSenderId: '69211333475',
  appId: '1:69211333475:web:4b2b35277eac9f8adba956',
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
module.exports = db;
//admin.initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);

//const db = admin.firestore();
//module.exports = db;
