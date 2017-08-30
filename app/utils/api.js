var axios = require('axios');

// weather api key
const WEATHER_API_KEY = '8e93707812ec2352e18ff2fa4d404d87';

module.exports = {

  getWeatherByPosition: (latitude, longitude) => {
    let base_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`

    return axios.get(base_url)
      .then((response) => {
        let icon = response.data.weather[0].icon
        let temperature = response.data.main.temp.toFixed(0)
        let city = response.data.name
        return {
          icon: icon,
          temperature: temperature,
          city: city
        }
      })
  },

  getWeatherByCity: (city) => {
    let base_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`

    return axios.get(base_url)
      .then((response) => {
        let icon = response.data.weather[0].icon
        let temperature = response.data.main.temp.toFixed(0)
        return {
          icon: icon,
          temperature: temperature
        }
      })
  }
}
