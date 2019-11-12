const fs = require('fs');

const devicesFilePath = 'db/devices.json';

const loadFileDevices = function() {
    let fileData = fs.readFileSync(devicesFilePath, 'utf8');
    let devices = JSON.parse(fileData);

    return devices;
}

const saveFileDevices = function(devices) {
    let data = JSON.stringify(devices);
    fs.writeFileSync(devicesFilePath, data, 'utf8');
}

const getDevices = function() {
    let tempData = loadFileDevices();
    return tempData;
}

const saveDevices = function(newDevice) {
    let devices = loadFileDevices();
    devices.push(newDevice);
    saveFileDevices(devices);
}

module.exports = {
    getDevices,
    saveDevices
}