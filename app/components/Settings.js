var React = require('react');

function SettingsPreview(props) {
  return (
    <ul className='settings-list'>
      <li
        className='cursor space-between'
        onClick={props.toggleSlider.bind(null, 'Links')}>Links
        <label className=' toggle-switch'>
            <span  className='slider'
              style = {props.displayLinks === true  ? {opacity: '0.15', left: '6px'} : {opacity: '1', right: '6px'}}
            ></span>
        </label>
      </li>
      <li
        className='cursor space-between'
        onClick={props.toggleSlider.bind(null, 'Weather')}>Weather
        <label className=' toggle-switch'>
          <span className='slider'
            style = {props.displayWeather === true  ? {opacity: '0.15', left: '6px'} : {opacity: '1', right: '6px'}}
          ></span>
        </label>
      </li>
      <li
        className='cursor space-between'
        onClick={props.toggleSlider.bind(null, 'Quote')}>Quotes
        <label className=' toggle-switch'>
          <span className='slider'
            style = {props.displayQuote === true  ? {opacity: '0.15', left: '6px'} : {opacity: '1', right: '6px'}}
          ></span>
        </label>
      </li>
      <li
        className='cursor space-between'
        onClick={props.toggleSlider.bind(null, 'Todo')}>Todo
        <label className=' toggle-switch'>
          <span className='slider'
            style = {props.displayTodo === true  ? {opacity: '0.15', left: '6px'} : {opacity: '1', right: '6px'}}
          ></span>
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
      displayLinks: props.displayLinks,
      displayWeather: props.displayWeather,
      displayQuote: props.displayQuote,
      displayTodo: props.displayTodo,
      showModal: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => {
      return {
        displayLinks: nextProps.displayLinks,
        displayWeather: nextProps.displayWeather,
        displayQuote: nextProps.displayQuote,
        displayTodo: nextProps.displayTodo
      }
    })
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
              displayLinks={this.state.displayLinks}
              displayWeather={this.state.displayWeather}
              displayQuote={this.state.displayQuote}
              displayTodo={this.state.displayTodo}
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
