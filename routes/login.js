var express = require('express');
require('dotenv').config();
var router = express.Router();

const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});



/* GET home page. */


router.get('/', (req, res, next) =>{
  pool.query('SELECT * FROM currency', (err, result)=> {
    res.json(result.rows);
  })
});

module.exports = router;
