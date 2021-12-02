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

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});