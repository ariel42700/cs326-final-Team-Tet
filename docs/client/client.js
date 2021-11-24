//lines 1-10 are how these files are being connected to heroku database
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

//below commented code is examples of how to process queries
/*client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});*/


const response = await fetch('/postListJobs', {
    method: 'POST',
    body: JSON.stringify({
        name: document.getElementById(`p${turn % NUMBER_OF_PLAYERS}-name`).value,
        score: score,
        // Need to extend in case only one letter was played appending to a word for example.
        // Not extending will also be accepted.
        word: game.extend(word, { x, y }, direction)
    })
});

if (!response.ok) {
    console.error("Could not save the turn score to the server.");
}