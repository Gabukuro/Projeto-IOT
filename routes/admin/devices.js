const express = require('express');
const router = express.Router();
const devicesService = require('../../services/devicesService');

router.get('/', (req, res, next) => {
    let devices = devicesService.getDevices();
    let data = {
        devices: devices
    };
    res.render('admin/devices', data);
});


router.get('/create', (req, res, next) => {
    
    res.render('admin/devices/create');
});

router.post('/create', (req, res, next) => {
    let devices = devicesService.getDevices();
    
    let newDevice = {};
    newDevice.id = devices.length + 1;
    newDevice.name = req.body.name;

    devicesService.saveDevices(newDevice);
    res.redirect('admin/devices');
});

module.exports = router;