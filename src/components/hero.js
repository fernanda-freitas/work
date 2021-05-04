import React from "react"
import "tailwindcss/tailwind.css"
import Link from 'gatsby-link'
import Particles from 'react-particles-js';
import Cursor from ".//cursor"

export default function Hero() {
    return (
        <div>
          <Cursor></Cursor>
          <div className="grid grid-cols-12 absolute inset-0 w-10/12 mx-auto pt-40 md:pt-60">
            <div className="col-span-12 md:col-span-3">
              <h1 className="text-6xl font-rubik font-bold text-gray-700 uppercase">Hello,</h1>
            </div>
            <div className="col-span-12 md:col-span-9 pt-20 md:pt-0">
              <h3 className="text-4xl font-rubik font-light leading-normal text-gray-700">I’m a <span className="font-semibold">UI/UX Designer</span> who creates <span className="font-semibold">digital interfaces</span>, <span className="font-semibold">prototypes</span> and <span className="font-semibold">front-ends it</span>. Apart from that I love to illustrate and create beautiful visual concepts.</h3>
            </div>
            <div>
              <span className="font-rubik text-sm text-gray-700 uppercase">See Projects</span>
              <Link to="/">
                <svg className="animate-bounce mt-10" xmlns="http://www.w3.org/2000/svg" width="17.847" height="36.207" viewBox="0 0 17.847 36.207">
                  <path id="Caminho_149" data-name="Caminho 149" d="M23.019,29.283l-7.51,7.51m0,0L8,29.283m7.51,7.51V3" transform="translate(-6.586 -2)" fill="none" stroke="#4b5563" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </Link>
            </div>
          </div>
          <Particles
            className="absolute inset-0"
            params={{
              "particles": {
                  "number": {
                      "value": 150,
                      "density": {
                          "enable": true,
                          "value_area": 1000
                      }
                  },
                  "color": {
                    "value": "#9ca3af"
                  },
                  "size": {
                      "value": 0,
                      "random": true,
                      "anim": {
                          "speed": 3,
                          "size_max": 4
                      }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#d1d5db",
                    "opacity": 0.4,
                    "width": 2
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
              "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 1
                    },
                    "repulse": {
                        "distance": 150,
                        "duration": 4
                    }
                }
              }
          }} />
      </div>
    )
};