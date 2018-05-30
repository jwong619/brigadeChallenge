import React from 'react';

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
          {this.state.task}
        </li>
      </div>
      );
  }
}

export default Task;