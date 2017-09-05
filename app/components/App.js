var React = require('react');
var Weather = require('./Weather');
var Time = require('./Time');
var Greeting = require('./Greeting');
var Focus = require('./Focus');
var Quotes = require('./Quotes');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className={'space-between'}>
          <div>Links</div>
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
          <div>Todo List</div>
        </div>

      </div>
    )
  }
}

module.exports = App;
