const { Pool } = require('pg');

console.log(process.env.DB_PASSWORD);

// local setup
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port:process.env.DB_PORT
// });

// Render Db server 
const pool = new Pool({
    connectionString: process.env.DB_URL,
    ssl: {
      rejectUnauthorized: false, // Required by Render
    }
  });

module.exports = pool;
