import React from 'react';
import './StatsBar.css';

class StatsBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="statsBar">
        <span id="remainingTasks"> {this.props.totalTasksCount}   remaining </span>
        <span id="completedTasks"> {this.props.completedTasksCount} completed </span>
      </div>

      );
  }
}

export default StatsBar;