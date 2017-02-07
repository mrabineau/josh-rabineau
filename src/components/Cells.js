import React, { Component } from 'react';
import Projects from './Projects.js';

class Cells extends Component {
  constructor(props){
    super(props);
    this.state = {
      cells: [
        "CELLS1.JPG",
        "CELLS2.JPG",
        "CELLS3.jpg",
        "CELLS4.jpg",
        "CELLS5.JPG",
        "CELLS6.jpg",
        "CELLS7.jpg"
      ]
    }
  }

  render () {
    const cellpix = this.state.cells.map((photo) => {
    const root = `/images/josh-portfolio/${photo}`
    return <img  className="pix" src={root} alt="p" key={photo} />
    })
      return (
        <div>
          {cellpix}
        </div>
        )
    }
  }

export default Cells;
