import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <h2>Hello world!</h2>
    )
  }
}

const insertApp = document.getElementById('app');
insertApp ? ReactDOM.render(<App />, insertApp) : false;

export default App;