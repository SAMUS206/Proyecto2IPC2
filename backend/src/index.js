const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors())
app.use(express.json({limit: '25mb'}))
app.use(express.urlencoded({limit: '25mb', extended: true}))
const port = 3000;

const indexRoute = require('./routes/routes.js');
app.use('/', indexRoute)

app.listen(port,()=> {
     console.log('Servidor ejecutandose en el puerto ' + port)
})
