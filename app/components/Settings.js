var React = require('react');

function SettingsPreview(props) {
  return (
    <ul className='settings-list'>
      <li
        className='cursor space-between'
        onClick={props.toggleSlider.bind(null, 'Links')}>Links
        <label className=' toggle-switch'>
            <span  className='slider'
              style = {props.displayLinks === true  ? {opacity: '0.15'} : {opacity: '1'}}
            ></span>
        </label>
      </li>
      <li
        className='cursor space-between'
        onClick={props.toggleSlider.bind(null, 'Weather')}>Weather
        <label className=' toggle-switch'>
          <span className='slider'></span>
        </label>
      </li>
      <li
        className='cursor space-between'
        onClick={props.toggleSlider.bind(null, 'Quote')}>Quotes
        <label className=' toggle-switch'>
          <span className='slider'></span>
        </label>
      </li>
      <li
        className='cursor space-between'
        onClick={props.toggleSlider.bind(null, 'Todo')}>Todo
        <label className=' toggle-switch'>
          <span className='slider'></span>
        </label>
      </li>
    </ul>
  )
}

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDisplay = props.toggleDisplay
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState(() => {
      return {
        showModal: !this.state.showModal
      }
    })
  }

  toggleSlider = (settingsName) => {
    this.toggleDisplay(settingsName)
  }

  render() {
    let showModal = this.state.showModal
    return (
      <div>
        {showModal &&
          <div className='modal settingsContainer'>
            <SettingsPreview
              toggleSlider={this.toggleSlider}/>
          </div>
        }
        <p
          className='cursor'
          onClick={this.toggleModal}>
            Settings
        </p>
      </div>
    )
  }
}

module.exports = Settings;
