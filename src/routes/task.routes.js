const express = require('express');
const router = express.Router();
//const { db } = require('../database');

//Base de Datos
const admin = require('firebase-admin');
var serviceAccount = require('../../tareaarquicapas-firebase-adminsdk-mfmte-40c8bbd4e0.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://tareaarquicapas-default-rtdb.firebaseio.com/',
});
const db = admin.database();
/*
const { getDatabase, ref, set } = require('firebase/database');
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase-admin/firestore');
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

function writeUserData(firstname, lastname, email, password) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + email);
  console.log('añadido');
  set(reference, {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  });
}
*/
//Conexion con la base de datos

//Rutas
router.post('/newuser', async (req, res) => {
  const newUser = {
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
    contrasenna: req.body.contrasenna,
  };
  db.ref('contacts').push(newUser);
  res.send('recibido');
  //db.collection('users').add(newUser);

  /*writeUserData(
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.contrasenna
  );*/

  //await db.collection('Vehiculos').add(newUser);
});

router.get('/newuser', (req, res) => {
  res.send('recibido');
});

//router.get('/api/newuser', (req, res) => {
//console.log('recibido');
//res.send("'recibido'");
//});
module.exports = router;
