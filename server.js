'use strict';
const express = require('express');
const faker = require('faker');
const app = express();
​
app.use(express.json()); // lets you handle JSON input
​
const port = 5500;
​
const datastore = {};
​
app.get('/', (req, res) => {
  res.send('Home Page!')
});
​
app.get('/getListJobs', (req, res) => {//this is the page that results in all the jobs from the search that the user enters -- includes Job Title which is an anchor tag, Working Period and Hours Per Week, Hourly Pay
  let jobTitle = faker.name.jobTitle();
  let jobDes = faker.name.jobDescriptor();
  let workingPeriod;
  if(hiringPeriod = fallsemester){//fall semester
    workingPeriod = faker.date.between('2021-09-01','2021-12-20');
  }
  else{//spring semester
    workingPeriod = faker.date.between('2022-02-01','2022-05-20');
  }
    // TODO: PARSE OUT KEY AND VALUE FROM *QUERY* INTO k AND v
  datastore[k] = v;
  console.log(`Set ${k} to ${v}`);
  res.send('Set.');
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
  const v = datastore[k];
  res.send(`key = ${k}, value = ${v}`);
});
​
//   curl -d '{ "key" : "x", "value" : "12" }' -H "Content-Type: application/json" http://localhost:3000/pcreate
app.post('/pcreate', (req, res) => {
  // TODO: PARSE OUT KEY AND VALUE FROM req.body INTO k and v
  datastore[k] = v;
  console.log(`Set ${k} to ${v}, body = ${JSON.stringify(req.body)}`);
  res.send('Set.');
});
​
app.get('*', (req, res) => {
  res.send('NO FOOL, BAD COMMAND');
});
​
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});