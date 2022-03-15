require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');


app.use(express.static("public"));
app.use(express.json());
   

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`);
})

module.exports = app;

// const CoinKey = require('coinkey'); ///COINKEY BITCOIN
// var coinInfo = require('coininfo'); ///coininfo DOGECOIN

// var ck = new CoinKey.createRandom();///Coinkey Generate Random
// console.log("BITCOIN--- Private Key (Wallet Import Format): " + ck.privateWif)
// console.log("BITCOIN--- Private Key (Hex): " + ck.privateKey.toString('hex'))
// console.log("BITCOIN--- Address: " + ck.publicAddress)

// var ck = CoinKey.fromWif('5KcejEy2SaZPi5A3Ga3gfPR8c5WTepzw33enYTkVCwMCYnW3k8M')
// console.log("BITCOIN-FROM WIF--Address: " + ck.publicAddress)
// console.log("-------------------------------------------------------------------");

// var dogeInfo = coinInfo('DOGE').versions

// var ck = new CoinKey.createRandom(dogeInfo)

// console.log("DOGECOIN---- Private Key (Wallet Import Format): " + ck.privateWif)
// console.log("DOGECOIN---- Private Key (Hex): " + ck.privateKey.toString('hex'))
// console.log("DOGECOIN---- Address: " + ck.publicAddress)

// let dogeAddress = ck.publicAddress;
// var qr = require('qr-encode')

// var dataURI = qr(dogeAddress, {type: 6, size: 6, level: 'Q'})

// app.get('/qrcode', (req, res)=>{
//     res.json(dataURI);
//     //pool.query('SELECT * FROM wallet', (err, result)=> {
//     //    return  [ wallets ]  = result.rows;

//    // })
//     // .then(()=>{

//     // })
// });

