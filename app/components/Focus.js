var React = require('react');
var ListItemPreview = require('./ListItemPreview');

function FocusPreview(props) {
  return (
    <div className='opacity small-font'>
      <p>TODAY</p>
      <ListItemPreview
        id='focusItem'
        removeItem={props.removeItem}
        todo={props.item}>
      </ListItemPreview>
    </div>
  )
}

class Focus extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       focusItem : [],
     }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let focusItem = event.target.value;
      this.setState(() => {
        return {
          focusItem: [...this.state.focusItem, focusItem]
        }
      })

      let focus = JSON.parse(localStorage.getItem('focus'))
      focus.push(focusItem)
      localStorage.setItem('focus', JSON.stringify(focus))
    }
  }

  removeItem = (index) => {
    var array = this.state.focusItem;
    array.splice(index, 1);
    this.setState({focusItem: array})

    localStorage.setItem('focus', JSON.stringify(this.state.focusItem))
  }

  componentWillMount() {
    let focus = JSON.parse(localStorage.getItem('focus'))
    { focus !== null
      ? this.setState(() => {
        return {
          focusItem: focus
        }
      })
      : localStorage.setItem('focus', JSON.stringify([]))
    }
  }

  render() {
    let focusItem = this.state.focusItem
    let count = this.state.focusItem.length
    return (
      <div className={'medium-font' + ' ' + 'focus-container'}>
        {count > 0
          ? <FocusPreview
              item={focusItem}
              removeItem = {this.removeItem}
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
