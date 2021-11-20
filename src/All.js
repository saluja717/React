import React from 'react'
import './App.css';
import Menu from './Menu';
import Logo from './Logo';
import {Update} from './Update';
import {About} from './About';
import {Symptoms} from './Symptoms';
import {Prevent} from './Prevent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Contact} from './Contact';
import {Footer} from './Footer';
import {Scroll} from './Scroll';
import Particles from 'react-particles-js';

export const All = () => {
    
    return (
        <div>
       <div id="Home">
       <Particles
    params={
        {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 881.8766334760367
      }
    },
    "color": {
      "value": "#bbc3b9"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#1ea6b9"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 68.21448583331305,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 13.620472365193129,
      "direction": "top-left",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 1603.4120608655214,
        "rotateY": 2244.77688521173
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "none"
      },
      "onclick": {
        "enable": true,
        "mode": "none"
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
}
    }
    style={{position:'absolute',backgroundColor:'black'}}
     />
       <div style={{position:'relative',paddingTop:'0px',color:'white'}}>
        <Scroll/>
        <Menu/> 
        <Logo/>            
        <Update/>
        <About/>
        <Symptoms/>
        <Prevent/>
        <Contact/>
        <Footer/>
        </div>
        </div>
        </div>
    )
}
