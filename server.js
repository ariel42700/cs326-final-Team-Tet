'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
//const db = require('./database.js');
const bodyParser = require('body-parser')
const cors = require('cors')
//const { pool } = require('./database.js')

/*async function getdb(){
    console.log("Inside function.");
    db.getTest();
}*/

app.use('/', express.static('./client'));

app.get('/', (req, res) => res.sendFile('client/homepage.html', { 'root' : __dirname }));

app.get('/popup', (req, res) => res.sendFile('client/popupsearch.html', { 'root' : __dirname }));

app.get('/jobDesc', (req, res) => res.sendFile('client/jobdescription.html', { 'root' : __dirname }));

/*app.get('/test', (req, res) =>
{
    getdb();
}
);*/

app.listen(process.env.PORT || 5500, () => {
    console.log(`App now listening at http://localhost:${port}`);
});