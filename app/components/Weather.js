var React = require('react');
var api = require('../utils/api');

class Weather extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      icon: null,
      temperature: null,
      error: null
    }
  }

  componentDidMount() {
    this.getPosition()
      .then ((position) => {
        // If an error is returned
        if (position === null) {
          return this.setState(() => {
            return {
              error: 'Geolocation Not Found'
            }
          })
        }

        // Get weather based on position
        api.getWeatherByPosition(position.latitude, position.longitude)
          .then ((weather) => {
            this.setState(() => {
              return {
                city: weather.city,
                icon: weather.icon,
                temperature: weather.temperature
              }
            })
          })
      })
  }

  getPosition() {
    return new Promise((resolve, reject) => {
      // Get latitude and longitude
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let latitude = position.coords.latitude
          let longitude = position.coords.longitude
          resolve({
            latitude: latitude,
            longitude: longitude
          })
        },
        () => {
          reject(
            null
          )
        }
      )
    });
  }

  handleChange(event) {
    if(event.key === 'Enter') {
      let city = event.target.value
      this.setState(() => {
        return {
          city: city
        }
      })

      // Get weathe by city name
      api.getWeatherByCity(city)
        .then ((weather) => {
          this.setState(() => {
            return {
              icon: weather.icon,
              temperature: weather.temperature,
              error: null
            }
          })
        })
    }
  }

  render() {
    let weatherIconURL = 'https://openweathermap.org/img/w/' + this.state.icon + '.png';
    let error = this.state.error;
    if(error) {
      return (
        <div>
          <p className='small-font'>{error}</p>
          <input
            type='text'
            autoComplete ='off'
            placeholder='Enter City'
            onKeyPress = {this.handleChange}
          />
        </div>
      )

    }

    return (
      <div>
        <div className='row'>
          <img src={weatherIconURL} alt='Weather of city' className='weather-icon'/>
          <span className='temperature'>{this.state.temperature}</span><span className='opacity'>{' ⁰'}</span>
        </div>
        <div className={'upper-case'+' '+'small-font'+' '+'opacity'}>{this.state.city}</div>
      </div>
    )
  }
}

module.exports = Weather;
