import React, { Component } from 'react';
import './Projects.css'
import House from './House.js'


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
        "HOUSE1.jpg",
        "HOUSE10.jpg",
        "HOUSE11.jpg",
        "HOUSE12.jpg",
        "HOUSE13.jpg",
        "HOUSE14.jpg",
        "HOUSE3.jpg",
        "HOUSE4.jpg",
        "HOUSE5.jpg",
        "HOUSE6.jpg",
        "HOUSE7.jpg",
        "HOUSE9.jpg"
        ]
    }
 }


  render () {
     const cellpix = this.state.cells.map((photo) => {
      const root = `/images/josh-portfolio/${photo}`
      return <img  className="pix" src={root} alt="p" key={photo} />
      })
      const housepix = this.state.house.map((photo) => {
      const root = `/images/josh-portfolio/${photo}`
      return <img className="pix" src={root} alt="p" key={photo} />
    })

      const collagepix = this.state.collage.map((photo) => {
      const root = `/images/josh-portfolio/${photo}`
      return <img className="pix" src={root} alt="p" key={photo} />
    })

      const handspix = this.state.hands.map((photo) => {
      const root = `/images/josh-portfolio/${photo}`
      return <img className="pix" src={root} alt="p" key={photo} />
    })
    return (
      <div id="projects">
        <div id="cellpix" className="allImages">
          <h1 className="heading" id="c"> Cells </h1>
          {cellpix}
            <div id="housepix" className="allImages">
              <h1 className="heading"> House </h1>
                {housepix}
            </div>
            <div id="collagepix" className="allImages">
              <h1 className="heading"> Collage </h1>
                {collagepix}
            </div>
            <div id="handspix" className="allImages">
              <h1 className="heading"> Hands </h1>
                {handspix}
            </div>
        </div>
      </div>
      )
  }
}

export default Projects;
