import React, { Component } from 'react';
import './Projects.css'

class Projects extends Component {
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
        ],
       collage: [
        "coll1.jpg",
        "coll2.jpg",
        "coll3.jpg",
        "coll4.jpg",
        "coll5.jpg",
        "coll6.jpg",
        "coll7.jpg",
        "coll8.jpg"
        ],
      hands: [
        "HAND3.jpg",
        "HANDS1.jpg",
        "HANDS2.jpg",
        "HANDS4.jpg",
        "HANDS5.jpg"
        ],
      house: [
        "HOUSE1.jpg"
        ]
    }
 }


  render () {
      const cellpix = this.state.cells.map((photo) => {
        const root = `/images/josh-portfolio/${photo} `
        return <img className="pix" src={root} alt="p" key={photo} />
      })
    return (
      <div id="projects">
        <div id="cellpix" className="allImages">
          {cellpix}
        </div>
      </div>
      )
  }
}

export default Projects;
