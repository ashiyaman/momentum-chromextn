var React = require('react');

function Greeting() {

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
      <h2 className='medium-font'>
        Good {greeting} , Ashiya.
      </h2>
    )

}

module.exports = Greeting;
