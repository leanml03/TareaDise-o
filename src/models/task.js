const firebase = require('firebase');
const { Schema } = firebase;

const AccountSchema = new Schema({
  //Almacenamiento del Esquema para los datos del usuario
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  number: {
    type: int,
    required: true,
  },
});
firebase;
