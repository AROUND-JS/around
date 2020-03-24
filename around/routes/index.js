var express = require('express');
var app = express();
const models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.dir(req.session)

  if (req.session.nickname) {

    res.render('index', {
      title: 'Around',
      islogin: true
    });
  }
  else {
    res.render('index', {
      title: 'Around',
      islogin: false
    });
  }
});

module.exports = router;