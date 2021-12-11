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

async function insert(arr){
    pool.query(`Insert into usertable(studentid, firstname, lastname, major, username) values ($1, $2, $3, $4, $5);`, arr, (err, res) => {
        if (err) {
            console.log("Error - Failed to Insert");
            console.log(err);
        }
        else{
            console.log("Inserted.");
        }
    });
}

async function select(tableName){
    pool.query(`SELECT * FROM  $1;`, [tableName], (err, res) => {
        if (err) {
            console.log("Error - Failed to select all from Users");
            console.log(err);
        }
        else{
            let obj = res.rows;
            //console.log(obj);
            return obj;
        }
    });
}

async function selectSpc(tableName, col, val){
    pool.query(`SELECT * FROM  $1 where $2 = $3;`, [tableName, col, val], (err, res) => {
        if (err) {
            console.log("Error - Failed to select all from Users");
            console.log(err);
        }
        else{
            let obj = res.rows;
            //console.log(obj);
            return obj;
        }
    });
}

async function deleteR(x){
    pool.query(`delete from usertable where studentid = $1;`, [x], (err, res) => {
        if (err) {
            console.log("Error - Failed to select all from Users");
            console.log(err);
        }
        else{
            console.log("Deleted.");
        }
    });
}

async function update(tableName, col, x){
    pool.query(`update $1 where $2 = $3;`, [tableName, col, x], (err, res) => {
        if (err) {
            console.log("Error - Failed to select all from Users");
            console.log(err);
        }
        else{
            let obj = res.rows;
            //console.log(obj);
            return obj;
        }
    });
}

app.use('/', express.static('./client'));

app.get('/', (req, res) => res.sendFile('client/login.html', { 'root' : __dirname }));

app.get('/register', (req, res) => res.sendFile('client/register.html', { 'root' : __dirname }));

app.get('/login', (req, res) => res.sendFile('client/login.html', { 'root' : __dirname }));

app.get('/home', (req, res) => res.sendFile('client/home.html', { 'root' : __dirname }));

app.get('/jobdescription', (req, res) => res.sendFile('client/jobdescription.html', { 'root' : __dirname }));

app.get('/getListJobs', async (req, res) => {
    select(jobstable);
});

app.get('/getJobDes', async (req, res) => {
    selectSpc(jobstable, jobid, 1);
});

app.get('/getProfile', async (req, res) => {
    selectSpc(usertable, studentid, 1);
});

app.get('/setProfile', async (req, res) => {
    update(usertable, studentid, 1);
});

app.get('/register', async (req, res) => {
    let arr = [9, "Test", "Node", "Business", "aksjdhieu"];
    insert(arr);
});

app.get('/getUser', async (req, res) => {
    selectSpc(usertable, studentid, 1);
});

app.get('/getPassword', async (req, res) => {
    selectSpc(usertable, studentid, 1);
});

app.listen(process.env.PORT || 5500, () => {
    console.log(`App now listening at http://localhost:${port}`);
});