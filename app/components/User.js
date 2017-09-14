var React = require('react');

function User(props){
    return (
      <div className='column medium-font margin-auto'>
        <h2>{"Hello, what's your name?"}</h2>
        <input type="text" onKeyPress={props.handleKeyPress} />
      </div>
    )
}

module.exports = User;
