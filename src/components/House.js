import React, { Component } from 'react';


class House extends Component {
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
