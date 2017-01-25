import React, { Component } from 'react';
import Josh from './joshImage.js';

class About extends Component {
  render () {
    return (
      <div>
          <div id="top">
            <h1> Josh Rabineau </h1>
              <h2> sub header here </h2>
              <Josh />
          </div>
      </div>
      )
  }
}

export default About;
