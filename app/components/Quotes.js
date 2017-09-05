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
        this.setState(() => {
          return {
            quote: response
          }
        })
      })
  }

  render() {
    return (
      <p className='quote-container'><strong>"{this.state.quote}."</strong></p>
    )
  }
}

module.exports = Quotes;
