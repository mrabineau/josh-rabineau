import React, { Component } from 'react';


class Collage extends Component {
  constructor(props){
    super(props);
    this.state = {
      collage: [
        "coll1.jpg",
        "coll2.jpg",
        "coll3.jpg",
        "coll4.jpg",
        "coll5.jpg",
        "coll6.jpg",
        "coll7.jpg",
        "coll8.jpg"
      ]
    }
  }


  render () {
      const collagepix = this.state.collage.map((photo) => {
      const root = `/images/josh-portfolio/${photo}`
      return <img className="pix" src={root} alt="p" key={photo} />
    })
    return (
        <div>
          {collagepix}
        </div>
      )
  }
 }

  export default Collage;
