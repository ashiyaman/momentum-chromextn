var React = require('react');

function Greeting(props) {

  let time = new Date();
  let greeting
  if ((time.getHours() >= 12) && (time.getHours() <= 17)) {
    greeting = 'afternoon'
  }
  else if(time.getHours() > 17) {
    greeting = 'evening'
  }
  else {
    greeting = 'morning'
  }

  return (
    <h1 className={'large-font' + ' ' + 'margin'}>
      Good {greeting} , {props.user}.
    </h1>
  )
}

module.exports = Greeting;
