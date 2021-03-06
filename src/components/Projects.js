import React, { Component } from 'react';
// import { Breadcrumb } from 'react-bootstrap;';
import './Projects.css'
import House from './House.js'
import Cells from './Cells.js'
import Collage from './Collage.js'
import Hands from './Hands.js'



class Projects extends Component {

  render () {
    return (

      <div id="projects">
        <div>
           <div id="cellpix" className="allImages">
            <h1 className="heading" id="c"> Cells </h1>
              <Cells />
            </div>
            <div id="housepix" className="allImages">
              <h1 className="heading"> House </h1>
                <House />
            </div>
            <div id="handspix" className="allImages">
                <h1 className="heading"> Hands </h1>
                  <Hands />
             </div>
             <div id="collagepix" className="allImages">
                <h1 className="heading"> Collage </h1>
                  <Collage />
              </div>

          </div>
      </div>
      )
  }
}

export default Projects;
