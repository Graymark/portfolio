export const ParticlesConfig = {
    "fullScreen": { 
        "enable": false,
        "zIndex": 0 
    },
    "particles": {
        "number": {
            "value": 10,
            "density": {
                "enable": true,
                "value_area": 600
            }
        },
        "color": {
            "value": "#D74833"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 7
            },
            "image": {
                "src": "./github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.7,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 50,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 300,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "rotate",
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
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 200,
                "size": 100,
                "duration": 4,
                "opacity": 0.1,
                "speed": 4  
            },
            "repulse": {
                "distance": 400,
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


export const particleTestConfig = {
        "fullScreen": {
          "enable": true,
          "zIndex": 0
        },
        "particles": {
          "number": {
            "value": 200,
            "limit": 300,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "images/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.5,
              "sync": false
            }
          },
          "size": {
            "value": 30,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 10,
              "size_min": 10,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#ffffff",
            "opacity": 1,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
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
          "detect_on": "canvas",
          "events": {
            "onHover": {
              "enable": true,
              "mode": "bubble",
              "parallax": {
                "enable": false,
                "force": 60,
                "smooth": 10
              }
            },
            "onClick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "lineLinked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 100,
              "duration": 2,
              "opacity": 1,
              "speed": 2
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "backgroundMask": {
          "enable": true,
          "cover": {
            "color": {
              "value": {
                "r": 0,
                "g": 0,
                "b": 0
              }
            }
          }
        },
        "retina_detect": true,
        "fps_limit": 60,
        "background": {
          "image":
            "url('https://particles.js.org/images/background3.jpg')"
        }
}