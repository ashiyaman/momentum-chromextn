var axios = require('axios');

// weather api key
const WEATHER_API_KEY = '8e93707812ec2352e18ff2fa4d404d87';
const QUOTES_API_KEY = 'xvofN9jmaDmshFk7PUtlVOeKP6sOp19PojVjsnkZpGadvjo7jq';

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
  },

  getQuotes: () => {
    //let base_url = `http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en`
    //let base_url = `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1`
    let base_url = `https://andruxnet-random-famous-quotes.p.mashape.com/?cat=inspiration`

    return axios.get(base_url,{
      headers: {'X-Mashape-Key': QUOTES_API_KEY}
      })
      .then ((response) => {
        let quote = response.data.quote
        return quote
      })
  }
}
