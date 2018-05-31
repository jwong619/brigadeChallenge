import React from 'react';
import './Task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: this.props.task
    }
  }

  render() {
    return (
      <div>
        <li >
          <span className="item">{this.state.task}</span>
          <span id="close"><button> X </button></span>

        </li>
      </div>
      );
  }
}

export default Task;


// //