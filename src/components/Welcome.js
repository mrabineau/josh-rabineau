import React, { Component } from 'react';
import App from '../App.js';
import './Welcome.css';
import { Link } from 'react-router';


class Welcome extends Component {
  render () {
    return (
        <div id="Welcome">
          <h1 id="banner"> Josh Rabineau </h1>
              <a id="enter"><Link to="/main" id="ent"> Enter </Link> </a>
        </div>
      );
  }
}

export default Welcome;
