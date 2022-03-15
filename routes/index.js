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
router.get('/', function(req, res, next) {
  res.redirect('/users', { title: 'Express' });
  next();
});


module.exports = router;
