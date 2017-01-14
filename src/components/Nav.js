import React, { Component } from 'react';
import { Link } from 'react-router';
import './Nav.css';

class Nav extends Component {
  render () {
    return (
      <div id="nav">
          <a id="projectNav"><Link to="/projects" className="mainNav"> Projects </Link> </a>
          <a id="aboutNac"><Link to="/about" className="mainNav"> About </Link> </a>

      </div>

      )
  }
}

export default Nav;
