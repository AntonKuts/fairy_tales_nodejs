var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('it', { title: 'Express' });
  });

module.exports = router;
