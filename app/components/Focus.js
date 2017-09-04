var React = require('react');

function FocusPreview(props) {
  return (
    <div className={'opacity' + ' ' + 'small-font'}>
      <p>TODAY</p>
      <ul>
          <li className='focus-item'>
            <span
              className={props.done ? 'checkbox checked' : 'checkbox'}
              onClick={props.handleChange}>
            </span>
            <p
              className={props.done ? "done" : null}>
              {props.item}
            </p>
            <span>
              {props.done
                ? <span onClick={props.delete}>+</span>
                : <span onClick={props.delete}>X</span> }
            </span>
          </li>
      </ul>
    </div>
  )


}

class Focus extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       focusItem : null,
       done: false
     }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let focusItem = event.target.value;
      this.setState(() => {
        return {
          focusItem: focusItem
        }
      })
    }
  }

  handleInputChange = () => {
      this.setState(() => {
        return {
          done: !this.state.done
        }
      })
  }

  delete = () => {
    this.setState(() => {
      return {
        focusItem: null
      }
    })
  }

  render() {
    let focusItem = this.state.focusItem
    return (
      <div className={'medium-font' + ' ' + 'focus-container'}>
        {focusItem !== null
          ? <FocusPreview
              item={focusItem}
              handleChange = {this.handleInputChange}
              done = {this.state.done}
              delete = {this.delete}
              />
          : <div>
              <h3>What is your main focus for today?</h3>
              <input
                type='text'
                autoComplete ='off'
                onKeyPress={this.handleKeyPress}/>
            </div>
        }
      </div>
    )
  }
}

module.exports = Focus;
