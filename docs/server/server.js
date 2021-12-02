'use strict';
import {createServer} from 'http';
import {parse} from 'url';
import {join} from 'path';
const cool = require('cool-ascii-faces');
const path = require('path');
const PORT = process.env.PORT || 5000;
const express = require('express');
const faker = require('faker');
const app = express();
​
app.use(express.json()); // lets you handle JSON input

//the below code is to connect to the database
const { Pool } = require('pg');
const pool = new Pool({
  host: "ec2-52-86-193-24.compute-1.amazonaws.com",
  database: "ddq90q3d676jb5",
  user: "ahczkeuevsnijf",
  port: 5432,
  password:"2d1d200a78b1ff68dce11c508fd7bf646a8068dcaec98e4a1ef44dd3a6cfc45d"
});

// Assuming your secrets.json contains the following:
// {“password”: “mysupersecretpassword”}
//the below code is to access passwords
let secrets;
let password;
if (!process.env.PASSWORD) {
secrets = require('secrets.json');
password = secrets.password;
} else {
	password = process.env.PASSWORD;
}


//this function will take the results from the mainsearchpage and then create a query string that will be returned and be accessed by the database to fiter the results of the database
async function getQuery(){
  let queryStr = '';
  return queryStr;
}
//random

//the below code is awaiting a connection from the database and sending a query​ --> this is a template
app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(getQuery());
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

async function getLstJob(){
  let jobTitle = faker.name.jobTitle();
  let jobDes = faker.name.jobDescriptor();
  let workingPeriod;
//res.send(await functionName(this is the function that is getting the actual faker data)) --> this is what will send the data to the html --> done on the server side
  if(hiringPeriod = fallsemester){//fall semester
    workingPeriod = faker.date.between('2021-09-01','2021-12-20');
  }
  else{//spring semester
    workingPeriod = faker.date.between('2022-02-01','2022-05-20');
  }

  let obj = {"jobTitle" : jobTitle, "jobDescription" : jobDes, "workingPeriod" : workingPeriod};
  return obj; 
}

createServer(async (req, res) => {
  const parsed = parse(req.url, true);

  if (parsed.pathname === '/getListJobs') {
    res.send(await getLstJob());//this is sending the object that is returned from the function to the page
      let body = '';
      req.on('data', data => body += data);
      req.on('end', () => {
          const data = JSON.parse(body);
          database.wordScores.push({
              name: data.name,
              word: data.word,
              score: data.score
          });
      });
  } 
}).listen(PORT);

​

app.get('/getListJobs', (req, res) => {//this is the page that results in all the jobs from the search that the user enters -- includes Job Title which is an anchor tag, Working Period and Hours Per Week, Hourly Pay
  /*let jobTitle = faker.name.jobTitle();
  let jobDes = faker.name.jobDescriptor();
  let workingPeriod;
//res.send(await functionName(this is the function that is getting the actual faker data)) --> this is what will send the data to the html --> done on the server side
  if(hiringPeriod = fallsemester){//fall semester
    workingPeriod = faker.date.between('2021-09-01','2021-12-20');
  }
  else{//spring semester
    workingPeriod = faker.date.between('2022-02-01','2022-05-20');
  }*/
  
  res.send(getLstJob());
});
​
app.get('/getJobDesc', (req, res) => {
    let jobTitle = faker.name.jobTitle();
    let jobDes = faker.name.jobDescriptor();
    let street = faker.address.streetAddress();
    let city = faker.address.cityName();
    let state = faker.address.state();
    let zip = faker.address.zipCode();
    let address = street + "\n" + city + "," + state + " " + zip;

  // TODO: PARSE OUT KEY FROM *QUERY* into k
  res.send(address);
});
​
//   curl -d '{ "key" : "x", "value" : "12" }' -H "Content-Type: application/json" http://localhost:3000/pcreate
app.post('/postListJobs', (req, res) => {
  // TODO: PARSE OUT KEY AND VALUE FROM req.body INTO k and v
  res.send('Set.');
});
​
app.get('*', (req, res) => {
  res.send('NO FOOL, BAD COMMAND');
});
​
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});