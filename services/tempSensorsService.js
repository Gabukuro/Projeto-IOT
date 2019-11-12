const fs = require('fs');

const tempSensorsFilePath = 'db/tempSensors.json';

const loadFileTempSensors = function() {
    let fileData = fs.readFileSync(tempSensorsFilePath, 'utf8');
    let tempSensorsData = JSON.parse(fileData);

    return tempSensorsData;
}

const saveFileTempSensors = function(tempData) {
    let data = JSON.stringify(tempData);
    fs.writeFileSync(tempSensorsFilePath, data, 'utf8');
}

const getTempData = function() {
    let tempData = loadFileTempSensors();
    return tempData;
}

const saveTempSensors = function(newTempSensor) {
    let tempData = loadFileTempSensors();
    tempData.push(newTempSensor);
    saveFileTempSensors(tempData);
}

module.exports = {
    getTempData,
    saveTempSensors
}