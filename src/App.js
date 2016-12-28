import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'


class App extends Component {
  render() {
    return (
      <div id="App">
        <div id="appContainer">
          <a id="button1"> <Link to="/main"> <h1>  Enter </h1> </Link> </a>
          <img src="/images/josh-portfolio/MERON2.jpg" alt="img" id="meron" />
        </div>
      </div>
    );
  }
}

export default App;
