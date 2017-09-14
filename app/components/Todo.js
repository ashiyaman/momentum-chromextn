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
      todos: [...previousState.todos, this.state.currentItem]
    }));

    let todoList = JSON.parse(localStorage.getItem('todos'))
    todoList.push(this.state.currentItem)
    localStorage.setItem('todos', JSON.stringify(todoList))

    this.setState(() => {
      return {
        currentItem: ''
      }
    })
  }

  removeItem = (index) => {
    let array = this.state.todos;
    array.splice(index, 1);
    this.setState({todos: array})

    localStorage.setItem('todos', JSON.stringify(array))
  }

  componentWillMount() {
    let todoList = JSON.parse(localStorage.getItem('todos'))
    {todoList !== null
     ? this.setState(() => {
         return {
           todos: todoList
         }
       })
      : localStorage.setItem('todos', JSON.stringify([]))
    }
  }

  render() {
    let count = this.state.todos.length
    return (
      <div className='todoContainer modal'>
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
