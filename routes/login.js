var express = require('express');
const res = require('express/lib/response');
require('dotenv').config();
var router = express.Router();

const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});


// const loginVerification = (user, userInput)=>{
//   if(user.username === userInput.username && user.password === userInput.password){
//     return user;
//   }else{

//   }
// }
/* POST Login Verifcation page. */


router.post('/', (req, res) =>{
  // console.log(req);
  const { email, password } = req.body
  pool.query('SELECT * FROM users WHERE email=$1',[email], (err, result)=> {
    if(err) throw err;
  
    const response = {
      message:false,
      user: "username or password is wrong"
    }
    if(result.rows[0]===undefined){
      res.status(401).json(response);
    }else if(result.rows[0].email == email && result.rows[0].password == password){
      response.message = true;
      response.user = result.rows[0]
      res.json(response);
    }else{
      res.status(401).json(response)
    }
  })
});

module.exports = router;
