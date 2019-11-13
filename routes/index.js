var express = require('express');
var router = express.Router();
const tempSensorsService = require('../services/tempSensorsService');
const devicesService = require('../services/devicesService');

/* GET home page. */
router.get('/', function(req, res, next) {
  let tempData = tempSensorsService.getTempData();
  let actuators = devicesService.getActuators();
  let data = {
    title: 'Home',
    tempData,
    actuators
  }
  res.render('index', data);
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  let tempData = tempSensorsService.getTempData();
  let actuators = devicesService.getActuators();
  let actuator = actuators.filter((actuator) => actuator.id == id)[0]
  let index = actuators.indexOf(actuator);
  
  if(actuator.status < 1) {
    actuator.status = 1;
  } else {
    actuator.status = 0;
  }

  actuators.splice(index, 1, actuator);
  devicesService.saveFileActuators(actuators);
  

  console.log(actuator);
  res.render('index', {title: 'home', tempData, actuators});
})

module.exports = router;
