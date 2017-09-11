var React = require('react');
var LinksContainer = require('./LinksContainer')
var Weather = require('./Weather');
var Time = require('./Time');
var Greeting = require('./Greeting');
var Focus = require('./Focus');
var Settings = require('./Settings');
var Quotes = require('./Quotes');
var TodoContainer = require('./TodoContainer');

class App extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    displayLinks: true,
    displayWeather: true,
    displayQuote: true,
    displayTodo: true
  }
}

toggleDisplay = (name) => {
  let property = `display${name}`
  let value = !this.state[property]
  console.log("prop..........", property)
  console.log("value..........", value)
  this.setState({ [property]: value }, () => {
    return {
      property: value
    }
  });

}

  render() {
    return (
      <div className='container'>
        <div className={'space-between'}>
          <div>
            {this.state.displayLinks &&
              <LinksContainer/>
            }
          </div>
          <div>
            {this.state.displayWeather &&
              <Weather />
            }
          </div>

        </div>
        <div className='main-content'>
          <Time />
          <Greeting />
          <Focus />
        </div>
        <div className='space-between'>
          <Settings
            displayLinks={this.state.displayLinks}
            displayWeather={this.state.displayWeather}
            displayQuote={this.state.displayQuote}
            displayTodo={this.state.displayTodo}
            toggleDisplay={this.toggleDisplay}>
          </Settings>
          <div>
            {this.state.displayQuote &&
              <Quotes />
            }
          </div>
          <div>
            {this.state.displayTodo &&
              <TodoContainer />
            }
          </div>
        </div>

      </div>
    )
  }
}

module.exports = App;
