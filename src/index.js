// run `node index.js` in the terminal
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const { db } = require('./database');


//Configuraciones
app.set('port', process.env.PORT || 3000); //Esto para obtener el puerto que nos brinde el servidor

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/api/task', require('./routes/task.routes'));
app.use(require('./routes/task.routes'));
//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Inicializacion del servidor
app.listen(app.get('port'), () => {
  console.log('server on port');
});
