import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <h1> my todos </h1>

      );
  }
}


ReactDOM.render(<App />,
  document.getElementById("app"));