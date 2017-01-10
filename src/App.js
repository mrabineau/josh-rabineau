import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome.js';
// import { Link } from 'react-router'
import Particles from 'react-particles-js';


class App extends Component {
  render() {
    return (
      <div id="App">
        <Welcome />
            <Particles className="particles-js" params={{
              "particles": {
                "number": {
                  "value": 197,
                  "density": {
                    "enable": false,
                    "value_area": 1042.21783956259
                  }
                },
                "color": {
                  "value": "#facade"
                },
                "shape": {
                  "type": "triangle",
                  "stroke": {
                    "width": 7,
                    "color": "#000"
                  },
                  "polygon": {
                    "nb_sides": 3
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 50,
                    "height": 50
                  }
                },
                "opacity": {
                  "value": 0.5772283419115882,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 44.09383167380187,
                  "random": false,
                  "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 40,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": false,
                  "distance": 200,
                  "color": "#ffffff",
                  "opacity": 1,
                  "width": 2
                },
                "move": {
                  "enable": true,
                  "speed": 12.827296486924183,
                  "direction": "top",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": true,
                    "rotateX": 1282.7296486924183,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": false,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}/>
      </div>
    );
  }
}

export default App;

          // <img src="/images/josh-portfolio/coll1.jpg" alt="img" id="meron" />
