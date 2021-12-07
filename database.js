/*const { Pool } = require('pg'); 
//const secrets = require('./secrets.json')
const env = process.env.NODE_ENV || 'development';
let connectionString = {
    user: secrets.user,
    database: secrets.testDb,
    host: secrets.host
};
// checking to know the environment and suitable connection string to use
if (env === 'development') {
    connectionString.database = secrets.database;
} else {
    connectionString = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
      }
    };
};
const pool = new Pool(connectionString);
pool.on('connect', () => console.log('connected to db'));


async function getTest(){
    pool.query("Select * From usertable");
    console.log("Finished");
}

module.exports = {
    getTest
};*/