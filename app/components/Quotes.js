var React = require('react');
var api = require('../utils/api');

class Quotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote : null
    }
  }

  componentDidMount() {
    api.getQuotes()
      .then((response) => {
        console.log("respo...", response)
        this.setState(() => {
          return {
            quote: response
          }
        })
      })
  }

  render() {
    return (
      <p><strong>{this.state.quote}</strong></p>
    )
  }
}

module.exports = Quotes;
