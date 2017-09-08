var React = require('react');

class ListItemPreview extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id
    this.todo = props.todo

    this.state = {
      id: this.id,
      todo: this.todo,
      done: false
    }
  }

  toggleCheckbox = () => {
    this.setState(() => {
      return {
        done: !this.state.done
      }
    })
  }

  delete = (index) => {
    this.props.removeItem(index)
  }

  render() {
    let done = this.state.done
    return (
      <li className='list-item'>
        {!done &&
          <div className='row'>
            <div className='row'>
              <span
                className='checkbox cursor'
                onClick={this.toggleCheckbox}>
              </span>
              <p>{this.props.todo}</p>
            </div>
            <span className='cursor'
              onClick={this.delete.bind(null, this.props.id)}>x</span>
          </div>
        }

        {done &&
          <div  className='space-between'>
            <div className='row'>
              <span
                className='checkbox checked cursor'
                onClick={this.toggleCheckbox}>
              </span>
              <p className='done'>{this.props.todo}</p>
            </div>
            <span className='cursor'
              onClick={this.delete.bind(null, this.props.index)}>x</span>
          </div>
        }
      </li>
    )
  }
}

module.exports = ListItemPreview;
