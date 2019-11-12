var express = require('express');
var router = express.Router();
const tempSensorsService = require('../services/tempSensorsService');
const devicesService = require('../services/devicesService');

/* GET home page. */
router.get('/', function(req, res, next) {
  let tempData = tempSensorsService.getTempData();
  let devices = devicesService.getDevices();
  let data = {
    title: 'Home',
    tempData,
    devices
  }
  res.render('index', data);
});

module.exports = router;
