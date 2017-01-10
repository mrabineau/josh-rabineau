import React, { Component } from 'react';
import App from '../App.js';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
      "coll1.jpg",
      "meron1.jpg",
      "sp3.JPG"
      ] }
  }
  render (){
    const allPix = this.state.images.map((photo) =>{
      const rootUrl = `/images/josh-portfolio/${photo}`
      return <img className="photo" src={rootUrl} alt="p" key={photo} />
    });
    return (
      <div id="Main">
          <div id="imagediv">
            <h1 id="name"> Josh Rabineau </h1>
            <div>
                  {allPix}
            </div>
          </div>
      </div>
    )
  }
}

export default Main;
