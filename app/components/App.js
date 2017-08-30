var React = require('react');
var Weather = require('./Weather');
var Time = require('./Time');
var Greeting = require('./Greeting');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className={'space-between'}>
          <div>Links</div>
          <Weather />
        </div>
        <div>
          <Time />
          <Greeting />
          <div>Todo</div>
        </div>
        <div className='space-between'>
          <div>Settings</div>
          <div>Quote</div>
          <div>Todo List</div>
        </div>
      </div>
    )
  }
}

module.exports = App;
