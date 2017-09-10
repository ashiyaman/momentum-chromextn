var React = require('react');

function LinkPreview(props) {
  return (
    <ul className='modal linksContainer'>
      <li><a href='#'>
        <img
          className='icon'
          src={require('../images/chromeTab.png')}/>Chrome Tab</a>
      </li>
      <li><a href=''>
        <img
          className='icon'
          src={require('../images/apps.png')} />
        Apps</a>
      </li>
    </ul>
  )
}

class LinksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState(() => {
      return {
        showModal : !this.state.showModal
      }
    })
  }

  render() {
    return (
      <div
        className = 'cursor'
        onClick={this.toggleModal}>
        Links

        {this.state.showModal &&
          <LinkPreview />
        }
      </div>
    )
  }
}

module.exports = LinksContainer;
