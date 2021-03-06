require('dotenv').config();
const express = require("express");

const session = require('express-session');
const app = express();
const PORT = process.env.PORT;

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/users');
const usersRouter = require('./routes/wallet');


app.use(express.static("public"));
app.use(express.json());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized:true, cookie: { maxAge: 60000 }}))


app.use('/', indexRouter);
app.use('/users', loginRouter);
app.use('/wallet', usersRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`);
})

module.exports = app;



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

