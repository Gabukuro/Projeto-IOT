const express = require('express');
const router = express.Router();
const devicesService = require('../services/devicesService');

router.post('/:id/add', (req, res, next) => {
    console.log(req.body);
    let sensorId = req.params.id;
    let temperature = req.body.temperature;
    let humidity = req.body.humidity;

    console.log(sensorId);
    console.log(temperature);
    devicesService.addMeasurement(sensorId, temperature, humidity);
    res.send(200)
});

module.exports = router;