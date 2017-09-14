var React = require('react');
var User = require('./User');
var Dashboard = require('./Dashboard');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ''
    }
  }

  handleKeyPress = (event) => {
    let value = event.target.value
    if (event.key === 'Enter') {
      this.setState(() => {
        return {
          user: value
        }
      });
      localStorage.setItem('user', value)
    }
  }

  componentWillMount() {
    let user = localStorage.getItem('user')
    {user &&
      this.setState(() => {
        return {
          user: user
        }
      })
    }
  }

  render() {
    let user = this.state.user
    return (
      <div className='container'>
        {user === ''
          ? <User
              handleKeyPress={this.handleKeyPress}/>
          : <Dashboard
              user={this.state.user}/>
        }

      </div>
    )
  }
}

module.exports = App;
