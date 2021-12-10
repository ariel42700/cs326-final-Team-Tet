'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const bodyParser = require('body-parser');
const cors = require('cors');
const pgp = require('pg-promise');
const router = express.Router();

//connecting to the database
let URI = 'postgres://ahczkeuevsnijf:2d1d200a78b1ff68dce11c508fd7bf646a8068dcaec98e4a1ef44dd3a6cfc45d@ec2-52-86-193-24.compute-1.amazonaws.com:5432/ddq90q3d676jb5';
const {Pool} = require('pg');
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
            let studentId = obj.studentid;
            console.log(studentId);
        }
    });
  })

app.listen(process.env.PORT || 5500, () => {
    console.log(`App now listening at http://localhost:${port}`);
});