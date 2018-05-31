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
          <div className="item">{this.state.task}</div>
        </li>
      </div>
      );
  }
}

export default Task;