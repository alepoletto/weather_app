const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const data = require('./data/data');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'address to fetch weather for',
    default: data.fetchDefaultAddress(),
    string: true
  },
  s: {
    demand: false,
    alias: 'save',
    describe: 'save an address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

const logMessage = (weatherResults) => {
  console.log(`It's currently ${weatherResults.temperature} celcius. it feels like ${weatherResults.apparentTemperature} celcius`);
  if(weatherResults.precipProbability === 1) {
    console.log(`It's ${weatherResults.precipType}ing now!!!`);
  } else if( weatherResults.precipProbability >= 0.70) {
    console.log(`It's probably going to ${weatherResults.precipType}!!`);
  } else {
    console.log('Summary:', weatherResults.summary);
  }
}

if(argv.save) {
  data.saveDefaultAddress(argv.address);
}


geocode.geocodeAddress(argv.address).then((results) => {
    console.log(results.formatted_address);
    weather.getWeather(results.latitude, results.longitude, (error, weatherResults) => {
      if(error){
        console.log(error);
      } else {
        logMessage(weatherResults);
      }
    });
  }).catch((error) => {
    console.log('Unable to fetch weather');
  });
