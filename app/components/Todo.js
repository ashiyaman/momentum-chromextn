var React = require('react');
var ListItemPreview = require('./ListItemPreview');

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      currentItem: ''
    }
  }

  handleChange = (event) => {
    var value = event.target.value
    this.setState(function () {
      return {
        currentItem: value
      }
    });
  }

  addItem = (event) =>  {
    event.preventDefault();
    this.setState(previousState => ({
      todos: [...previousState.todos, this.state.currentItem],
      currentItem: ''
    }));
  }

  removeItem = (index) => {
    let array = this.state.todos;
    array.splice(index, 1);
    this.setState({todos: array})
  }

  render() {
    let count = this.state.todos.length
    return (
      <div className='todo-container'>
        <p className='flex-start'>0 of {count}</p>
        {count > 0
          ? <ul className='column'>
              {this.state.todos.map((todo, index) => {
                return (
                  <ListItemPreview
                    className='space-between'
                    id={index}
                    todo={todo}
                    removeItem={this.removeItem}
                    key={index}/>
                )
              })}
            </ul>
          : <div>
              <p>Nothing to do </p>
              <p> One step at a time</p>
            </div>
        }

        <div className='flex-start'>
          <input
            placeholder='New Todo'
            type='text'
            value={this.state.currentItem}
            autoComplete='off'
            onChange={this.handleChange}
          />
          <button
            className='button'
            type='submit'
            onClick={this.addItem}>
              +
          </button>
        </div>
      </div>
    )
  }
}

module.exports = Todo;
