'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const bodyParser = require('body-parser');
const cors = require('cors');
const pgp = require('pg-promise');
const router = express.Router();
const secret = require('./secrets.json');

//connecting to the database
const {Pool} = require('pg');
let URI = secret.URI;
const pool = new Pool({
 connectionString: URI,
 ssl: {
 rejectUnauthorized: false
 }
});


app.use('/', express.static('./client'));

app.get('/', (req, res) => res.sendFile('client/homepage.html', { 'root' : __dirname }));

app.get('/popup', (req, res) => res.sendFile('client/popupsearch.html', { 'root' : __dirname }));

app.get('/jobDesc', (req, res) => res.sendFile('client/jobdescription.html', { 'root' : __dirname }));

app.get('/db', async (req, res) => {
    /*try {
      const result = await connectAndRun(db => db.any("SELECT * FROM gameScores ORDER BY score DESC LIMIT 10"));
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }*/
    pool.query(`SELECT * FROM usertable;`, (err, res) => {
        if (err) {
            console.log("Error - Failed to select all from Users");
            console.log(err);
        }
        else{
            let obj = JSON.stringify(res.rows[0]);
            console.log(obj);
        }
    });
  })

app.listen(process.env.PORT || 5500, () => {
    console.log(`App now listening at http://localhost:${port}`);
});