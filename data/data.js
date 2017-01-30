const fs = require('fs');


const saveDefaultAddress = (address) => {
    fs.writeFileSync('weather-data.json', JSON.stringify(address));
}


const fetchDefaultAddress = () => {
  try {
    var data = fs.readFileSync('weather-data.json');
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
    return null;
  }
};



module.exports = {
  saveDefaultAddress,
  fetchDefaultAddress
}
