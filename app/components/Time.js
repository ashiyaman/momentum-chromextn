var React = require('react');

class Time extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: null
    }
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        currentTime : new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', hour12: false})
      })
    },1000)

  }

  render() {
    return(
      <div className='bold-font'>
          {this.state.currentTime}
      </div>
    )
  }
}

module.exports = Time;
