import React, { Component } from 'react';

class Hands extends Component {
  constructor(props) {
    super(props);
      this.state = {
        hands: [
          "HAND3.jpg",
          "HANDS1.jpg",
          "HANDS2.jpg",
          "HANDS4.jpg",
          "HANDS5.jpg"
        ]
      }
   }


render () {
    const handspix = this.state.hands.map((photo) => {
      const root = `/images/josh-portfolio/${photo}`
      return <img className="pix" src={root} alt="p" key={photo} />
    })
  return (
      <div>
        {handspix}
      </div>
    )
  }
}

export default Hands;
