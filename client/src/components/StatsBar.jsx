import React from 'react';
import './StatsBar.css';

class StatsBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="statsBar">
        <span id="remainingTasks"> {this.props.totalTasks}   remaining </span>
        <span id="completedTasks"> {this.props.completedTasks} completed </span>
      </div>

      );
  }
}

export default StatsBar;