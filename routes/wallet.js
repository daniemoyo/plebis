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

/* Get user wallets. */
router.get('/:id', (req, res) =>{
  
  const id  = Number(req.params.id)
  pool.query('SELECT * FROM wallet WHERE users_id=$1',[id], (err, result)=> {
    if(err) throw err;
    console.log(result);
    const response = {
      message:false,
      wallet: "You do not have any wallets"
    }
    if(result.rows===undefined){
      res.status(404).json(response);
    }else{
      response.message = true;
      response.wallet = result.rows
      res.json(response);
    }
  })
});

module.exports = router;
