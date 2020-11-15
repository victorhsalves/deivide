const express = require('express');
const bd = require('./firebase')
const firebase = require('firebase');
const path = require('path');
const cors = require('cors');
const { restart } = require('nodemon');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
app.use(routes);

app.listen(3333); 
