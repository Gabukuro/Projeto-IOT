const fs = require('fs');

const tempSensorsFilePath = 'db/tempSensors.json';

const loadFileTempSensors = () => {
    let fileData = fs.readFileSync(tempSensorsFilePath, 'utf8');
    let tempSensorsData = JSON.parse(fileData);

    return tempSensorsData;
}

const getTempData = (tempSensorsData) => {
    let tempData = loadFileTempSensors();
    return tempData;
}

module.exports = {
    getTempData
}