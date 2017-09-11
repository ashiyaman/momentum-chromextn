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
      show: true,
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
    let show = this.state.show
    return (
      <div>
      {show &&
          <div
            className = 'cursor'
            onClick={this.toggleModal}>
            Links

            {this.state.showModal &&
              <LinkPreview />
            }
          </div>
      }
      </div>
    )
  }
}

module.exports = LinksContainer;
