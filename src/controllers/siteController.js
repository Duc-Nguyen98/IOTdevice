const request = require('request');
require('dotenv').config();
const apiKey = '7cfc25c9c3ef681b0cb0b20eeb542519';
const lat = 21.0245;
const long = 105.8412;
const city = 'Ha Noi, VN';
// const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&%20exclude=hourly,daily&appid=${apiKey}`;

// console.log(url)

class SiteController {
  index(req, res, next) {
    //request weather
    request(url, function (err, response, body) {
      const weather = JSON.parse(body);

      const weatherCurrent = {
        city: city,
        temperature: weather.current.temp,
        feelLike: weather.current.feels_like,
        description: weather.current.weather[0].description,
        icon: weather.current.weather[0].icon,
        pressure: weather.current.pressure,
        humidity: weather.current.humidity,
        wind: weather.current.wind_speed,
        visibility: Math.round(weather.current.visibility)
          .toString()
          .slice(0, 2),
      };

      const weatherDaily = {
        dailyLength: weather.daily.length,
        weather: weather,
      };

      const dataChartTemperature = {
        type: 'line',
        datasetsLabel: 'The Temperature',
      };

      const dataChartHumidity = {
        type: 'line',
        datasetsLabel: 'The Humidity',
      };

      res.render('form', {
        weatherCurrent: weatherCurrent,
        weatherDaily: weatherDaily,
        dataChartTemperature: dataChartTemperature,
        dataChartHumidity: dataChartHumidity,
        helper: require('../utils/helper'),
        tilte: 'Weather App',
      });
    });
  }
  setData(req, res, next) {
    res.json(req.body);
  }
}

module.exports = new SiteController();
