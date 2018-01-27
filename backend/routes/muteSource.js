var express = require('express');
var router = express.Router();
const nircmd = require("nircmd");


router.post('/', function(req, res, next) {
  console.log("setVolume called", req.body)
  const pkg = req.body;
  for(let key in pkg){
    const muteVal = pkg[key];
    const cmd = `mutesysvolume ${muteVal} ${key}`;
    console.log(cmd);
    nircmd(cmd);
  }
  res.send('WEW LAD');
});

module.exports = router;