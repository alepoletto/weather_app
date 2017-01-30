const request = require('request');

const API_KEY = '754e06d2376f219b7753a54f792eccf3';

const getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}?units=si`,
    json: true }, (error, response, body) => {
      if(!error && response.statusCode == 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature,
          summary: body.currently.summary,
          precipProbability: body.currently.precipProbability,
          precipType: body.currently.precipType
        });
      } else {
        callback('Unable to fetch weather');
      }
    }
  );
}


module.exports = {
  getWeather
}
