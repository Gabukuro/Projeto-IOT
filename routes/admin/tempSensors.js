const express = require('express');
const router = express.Router();
const tempSensorsService = require('../../services/tempSensorsService');

router.get('/', (req, res, next) => {
    let tempData = tempSensorsService.getTempData();
    let data = {
        tempData: tempData
    }
    res.render('admin/tempSensors/index', data)
})

module.exports = router;