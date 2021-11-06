import {createServer} from 'http';
import {parse} from 'url';
import {writeFile, readFileSync, existsSync} from 'fs';
let database;
let startDate = new Date();
let endDate = new Date();
    if (existsSync("database.json")) {
        database = JSON.parse(readFileSync("database.json"));
    } else {
        database = {
            userName: "",
            jobTitle: "",
            jobDesc: "",
            jobID: 0,
            jobType: "",
            jobLocation: "",
            jobAddress: "",
            jobAppURL: "",
            jobsAppliedTo: [],
            locationPreference: "",
            hiringPeriodStart: startDate,
            hiringPeriodEnd: endDate,
            workStudy: "",
            jobRating: 0,
            payRate: 0,
            hoursPerWeek: 0
        };
    }    

export {database};
createServer(async (req, res) => {
    //have fun
}).listen(8080);