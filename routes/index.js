var express = require('express');
var router = express.Router();

router.get('/', function(_req, res) {
  res.render('index');
});

module.exports = router;
