import React from 'react';
import './Task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.onClick= this.onClick.bind(this);
    this.state = {
      task: this.props.task
    }
  }

  onClick(id) {
    this.props.deleteItem(this.props.id);
  }

  render() {
    var completed = this.state.task.completed;
    return (
      <div>
        {completed ? (
          <li >
          <span className="item"><strike>{this.state.task.name}</strike></span>
          <span id="close"><button onClick={this.onClick}> X </button></span>
        </li>
        ) : (
        <li >
          <span className="item" onClick={this.props.completeTask}>{this.state.task.name}</span>
          <span id="close"><button onClick={this.onClick}> X </button></span>
        </li>)}

      </div>
      );

  }
}

export default Task;

// handle getting the id for completeTask marking