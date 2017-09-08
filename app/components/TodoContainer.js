var React = require('react');
var Todo = require('./Todo');

class TodoContainer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isShowModal: false
    }
  }

  toggleModal = () => {
    this.setState(() => {
      return {
        isShowModal: !this.state.isShowModal
      }
    })
  }

  render() {
    let showModal = this.state.isShowModal
    return (
      <div>
        {showModal &&
          <Todo />
        }
        <p
          className='cursor'
          onClick={this.toggleModal}>Todo</p>
      </div>
    )
  }

}

module.exports = TodoContainer;
