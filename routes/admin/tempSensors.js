const express = require('express');
const router = express.Router();
const tempSensorsService = require('../../services/tempSensorsService');

router.get('/', (req, res, next) => {
    let tempData = tempSensorsService.getTempData();
    let data = {
        tempData: tempData
    };
    res.render('admin/tempSensors', data);
});


router.get('/create', (req, res, next) => {
    
    res.render('admin/tempSensors/create');
});

router.get('/tempInfo/:id', (req, res, next) => {
    let id = req.params.id;

    let tempSensors = tempSensorsService.getTempData();
    let tempSensor = tempSensors.filter((item) => item.id == id)[0];

    res.render('admin/tempSensors/tempInfo', {title: tempSensor.name, tempSensor: tempSensor} )
});


router.post('/create', (req, res, next) => {
    let tempData = tempSensorsService.getTempData();
    
    let newTempSensor = {};
    newTempSensor.id = tempData.length + 1;
    newTempSensor.name = req.body.name;

    tempSensorsService.saveTempSensors(newTempSensor);
});

module.exports = router;