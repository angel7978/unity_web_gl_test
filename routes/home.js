// routes/home.js

const express = require('express');
const wallet = require('../service/kas/wallet');
const node = require('../service/kas/node')
var router = express.Router(); // router함수를 초기화

// Home
router.get('/', function(req, res){ // "/"에 get 요청이 오는 경우를 router함수에 설정
  res.redirect('/minting');
});

router.get('/minting/:address', async function(req, res){
  res.render('minting/minting', { wallet: req.params.address });
});

module.exports = router; // module.exports에 담긴 object(여기서는 router object)가 module이 되어require시에 사용