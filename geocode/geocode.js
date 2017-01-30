const request = require('request');



const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    let encodedAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if(error) {
        reject('unable to connect to google servers');
      } else if(body.status === 'ZERO_RESULTS') {
        reject('unable to find a location for that address');
      }else if(body.status === 'OK') {
        resolve( {
          formatted_address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    })

  });

};


module.exports = {
  geocodeAddress
}
