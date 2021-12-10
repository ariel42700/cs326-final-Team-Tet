'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const bodyParser = require('body-parser');
const cors = require('cors');
const pgp = require('pg-promise');
const router = express.Router();


app.use('/', express.static('./client'));

app.get('/', (req, res) => res.sendFile('client/homepage.html', { 'root' : __dirname }));

app.get('/popup', (req, res) => res.sendFile('client/popupsearch.html', { 'root' : __dirname }));

app.get('/jobDesc', (req, res) => res.sendFile('client/jobdescription.html', { 'root' : __dirname }));

console.log(process.env.DATABASE_URL);

app.listen(process.env.PORT || 5500, () => {
    console.log(`App now listening at http://localhost:${port}`);
});