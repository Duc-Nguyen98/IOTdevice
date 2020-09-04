const request = require('request');
const apiKey = '7cfc25c9c3ef681b0cb0b20eeb542519';
const lat = 21.0245;
const long = 105.8412;
const city = "Ha Noi, VN";
// const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&%20exclude=hourly,daily&appid=${apiKey}`;


class SiteController {
    index(req, res, next) {
        //request weather
        request(url, function (err, response, body) {
            let weather = JSON.parse(body);



            let weatherCurrent = {
                city: city,
                temperature: weather.current.temp,
                feelLike: weather.current.feels_like,
                description: weather.current.weather[0].description,
                icon: weather.current.weather[0].icon,
                pressure: weather.current.pressure,
                humidity: weather.current.humidity,
                wind: weather.current.wind_speed,
                visibility: Math.round(weather.current.visibility).toString().slice(0, 2),

            }

            let weatherDaily = {
                dailyLength: weather.daily.length,
                weather: weather,
            }
            res.render('form', {
                weatherCurrent: weatherCurrent,
                weatherDaily: weatherDaily,
                helper: require('../utils/helper'),
                tilte:'Weather App'
            });
        })
    };
    setData(req, res, next) {
        res.json(req.body)
    }

}

module.exports = new SiteController();