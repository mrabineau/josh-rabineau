import React, { Component } from 'react';
import Projects from './Projects.js'


class House extends Component {
  constructor(props){
    super(props);
    this.state = {
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
    const housepix = this.state.house.map((photo) => {
      const root = `/images/josh-portfolio/${photo} `
      return <img className="pix" src={root} alt="p" key={photo} />
    })
    return (
      <div>
        {housepix}
      </div>
      )
  }
}

export default House;
