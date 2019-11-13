const express = require('express');
const router = express.Router();
const devicesService = require('../../services/devicesService');

router.get('/', (req, res, next) => {
    let actuators = devicesService.getActuators();
    let data = {
        actuators: actuators
    };
    res.render('admin/devices', data);
});


router.get('/create', (req, res, next) => {
    
    res.render('admin/devices/create');
});

router.post('/create', (req, res, next) => {
    let actuators = devicesService.getActuators();
    
    let newDevice = {};
    newDevice.id = actuators.length + 1;
    newDevice.name = req.body.name;
    newDevice.status = 0;

    devicesService.saveActuator(newDevice);
    res.redirect('/devices');
});

module.exports = router;