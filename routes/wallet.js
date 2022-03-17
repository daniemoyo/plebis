const express = require('express');
require('dotenv').config();
var router = express.Router();

const CoinKey = require('coinkey'); ///COINKEY BITCOIN
const coinInfo = require('coininfo'); ///coininfo DOGECOIN

const qr = require('qr-encode');

const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});


/* Create wallet address from currency_id */
router.get('/create/:currency_id/:users_id', (req, res) =>{
  
  const users_id = req.params.users_id
  const currency_id = req.params.currency_id

  Number(users_id)
  Number(currency_id)
 
  if(currency_id == 1){
    var ck = CoinKey.createRandom();///Coinkey Generate Random BITCOIN ADDRESS
  }else if(currency_id==2){
    var dogeInfo = coinInfo('DOGE').versions
    var ck = new CoinKey.createRandom(dogeInfo) ///Coinkey Generate Random DOGECOIN ADDRESS
  }
  // console.log(ck +" "+ ck.privateWif);
  const qrURL = qr(ck.publicAddress, {type: 10, size: 6, level: 'Q'})
  // console.log(qrURL);
  pool.query('INSERT INTO wallet ( address, pri_key, users_id, currency_id) VALUES ($1,$2,$3,$4) RETURNING *',[ck.publicAddress,ck.privateWif,users_id,currency_id], (err, result)=> {
    if(err) throw err;
    const response = {
      message:false,
      wallet: "You do not have any wallets"
    }
    if(result.rows===undefined){
      res.status(404).json(response);
    }else{
      response.message = true;
      response.wallet = result.rows[0]
      console.log("wallet address created");
      response.qrURL = qrURL
      res.json(response);
    }
  })
});
/* GET wallet addresses by currency id and user id */
router.get('/:currency_id/:users_id', (req,res)=>{

  const users_id = req.params.users_id
  const currency_id = req.params.currency_id

  Number(users_id)
  Number(currency_id)
 
  pool.query('SELECT * FROM wallet WHERE users_id=$1 AND currency_id=$2',[users_id,currency_id], (err, result)=> {
    // console.log(result.rows);

    const response = {message:false, wallet:"You do not have an address"}
    if(result.rows[0]===undefined){
      res.json(response);
    }
    response.message = true;
    response.wallet = result.rows
    res.json(response);
  })
})
router.get('/qrcode/:address', (req, res)=>{
  const address = req.params.address
  const qrURL = qr(address, {type: 10, size: 6, level: 'Q'})
  res.json(qrURL);
})
module.exports = router;
