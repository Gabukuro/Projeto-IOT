var express = require('express');
var router = express.Router();
const tempSensorsService = require('../services/tempSensorsService');

/* GET home page. */
router.get('/', function(req, res, next) {
  let tempData = tempSensorsService.getTempData();
  let data = {
    title: 'Home',
    tempData: tempData
  }
  res.render('index', data);
});

module.exports = router;
