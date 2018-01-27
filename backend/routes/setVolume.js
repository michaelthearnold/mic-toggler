var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  console.log("setVolume called", req.body)
  for(let key in req.body){
    console.log("key: ",key)
  }
  res.send('WEW LAD');
});

module.exports = router;
