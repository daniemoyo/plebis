const express = require('express');
require('dotenv').config();
const router = express.Router();


const { Pool } = require("pg");
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

/* POST Login Verifcation page. */
router.post('/login', (req, res) =>{

  const { email, password } = req.body
  pool.query('SELECT * FROM users WHERE email=$1',[email], (err, result)=> {
    if(err) throw err;
  
    const response = {
      message:false,
      user: "Invalid username or password",
      isLoggedIn:false,
    
    }
    if(result.rows[0]===undefined){
      res.status(401).json(response);
    }
    
    if(result.rows[0].email == email && result.rows[0].password == password){
      response.message = true;
      response.user = result.rows[0]
      response.isLoggedIn = true;
      req.session.user_id = result.rows[0].user_id
      
      pool.query('SELECT * FROM wallet WHERE users_id=$1',[response.user.user_id], (err, result)=> {
        // console.log(result.rows);
        const combined = {...response, wallet:"You do not have an address"}
        if(result.rows[0]===undefined){
          res.json(combined);
        }
        combined.wallet = result.rows
        res.json(combined)
      })
    }else{
      res.status(401).json(response)
    }
    
  })
});

module.exports = router;
