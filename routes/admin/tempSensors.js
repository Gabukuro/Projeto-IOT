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
    let data = new Date().toLocaleString('en-US', {hour12: true});
    
    let newTempSensor = {};
    newTempSensor.id = tempData.length + 1;
    newTempSensor.name = req.body.name;
    newTempSensor.measurements = [
        {
            "date": data,
            "temperature": 25,
            "humidity": 80
        }
    ]

    tempSensorsService.saveTempSensors(newTempSensor);
    res.redirect('/admin/tempSensors');
});

module.exports = router;