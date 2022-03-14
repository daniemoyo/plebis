var express = require('express');
var router = express.Router();

/* GET login info. */
router.get('/login', (req, res, next) =>{
  const { email, password } = req.body 

  pool.query('SELECT * FROM users WHERE email=$1',[email], (err, result)=> {
      console.log(result.rows[0]);
      res.json(result.rows[0]);
  })
});

module.exports = router;

