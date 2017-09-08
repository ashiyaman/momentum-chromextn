var React = require('react');
var LinksContainer = require('./LinksContainer')
var Weather = require('./Weather');
var Time = require('./Time');
var Greeting = require('./Greeting');
var Focus = require('./Focus');
var Quotes = require('./Quotes');
var TodoContainer = require('./TodoContainer');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className={'space-between'}>
          <LinksContainer />
          <Weather />
        </div>
        <div className='main-content'>
          <Time />
          <Greeting />
          <Focus />
        </div>
        <div className='space-between'>
          <div>Settings</div>
          <Quotes />
          <TodoContainer />
        </div>

      </div>
    )
  }
}

module.exports = App;
