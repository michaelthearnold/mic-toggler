var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  console.log("called")
  console.log(req.body)
  const pkg = JSON.parse(req.body);
  res.send('WEW LAD');
});

module.exports = router;
