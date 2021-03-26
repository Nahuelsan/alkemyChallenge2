const express       = require('express');
const morgan        = require('morgan');
const bodyParser    = require('body-parser');
const sequelize     = require('./db.js');
const routes = require('./routes');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.

app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
     next();
 });
 app.use('/', routes);

sequelize.sync().then(reslut => {
     app.listen(8080); 
 })
 .catch(error => {
     console.log(error);   
 });
module.exports = app;