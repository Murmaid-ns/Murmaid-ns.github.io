import React from "react";
import Particles from "react-tsparticles";

const AnimatedBackground = () => {
  const styles = {
    position: "fixed",
    width: "100vw",
  }
  return (
    <Particles style={styles}
               className
               id="tsparticles"
               options={{
                 "autoPlay": true,
                 "background": {
                   "color": {
                     "value": "#000"
                   },
                   "opacity": 1
                 },
                 "detectRetina": true,
                 "fpsLimit": 60,
                 "interactivity": {
                   "detectsOn": "window",
                   "events": {
                     "onClick": {
                       "enable": true,
                       "mode": "push"
                     },
                   },
                   "modes": {
                     "push": {
                       "quantity": 5
                     }
                   }
                 },
                 "particles": {
                   "bounce": {
                     "horizontal": {
                       "random": {
                         "enable": true,
                         "minimumValue": 0.01
                       },
                       "value": 1
                     },
                     "vertical": {
                       "random": {
                         "enable": false,
                         "minimumValue": 0.1
                       },
                       "value": 1
                     }
                   },
                   "collisions": {
                     "bounce": {
                       "horizontal": {
                         "random": {
                           "enable": true,
                           "minimumValue": 0.1
                         },
                         "value": 1
                       },
                       "vertical": {
                         "random": {
                           "enable": false,
                           "minimumValue": 0.1
                         },
                         "value": 1
                       }
                     },
                     "enable": true,
                     "mode": "bounce"
                   },
                   "color": {
                     "value": "#ffffff",
                     "animation": {
                       "enable": true,
                       "speed": 50,
                       "sync": false
                     }
                   },
                   "life": {
                     "count": 0,
                     "delay": {
                       "random": {
                         "enable": false,
                         "minimumValue": 0
                       },
                       "value": 0,
                       "sync": false
                     },
                     "duration": {
                       "random": {
                         "enable": false,
                         "minimumValue": 0.0001
                       },
                       "value": 0,
                       "sync": false
                     }
                   },
                   "links": {
                     "blink": false,
                     "color": {
                       "value": "random"
                     },
                     "consent": false,
                     "distance": 100,
                     "enable": true,
                     "frequency": 1,
                     "opacity": 1,
                     "shadow": {
                       "blur": 5,
                       "color": {
                         "value": "#00ff00"
                       },
                       "enable": false
                     },
                     "triangles": {
                       "enable": false,
                       "frequency": 1
                     },
                     "width": 1,
                     "warp": false
                   },
                   "move": {
                     "angle": {
                       "offset": 45,
                       "value": 90
                     },
                     "attract": {
                       "enable": false,
                       "rotate": {
                         "x": 3000,
                         "y": 3000
                       }
                     },
                     "direction": "none",
                     "distance": 0,
                     "enable": true,
                     "gravity": {
                       "acceleration": 9.81,
                       "enable": false,
                       "maxSpeed": 50
                     },
                     "noise": {
                       "delay": {
                         "random": {
                           "enable": false,
                           "minimumValue": 0
                         },
                         "value": 0
                       },
                       "enable": false
                     },
                     "outModes": {
                       "default": "out"
                     },
                     "random": false,
                     "size": false,
                     "speed": 2,
                     "straight": false,
                     "trail": {
                       "enable": false,
                       "length": 10,
                       "fillColor": {
                         "value": "#000000"
                       }
                     },
                     "vibrate": false,
                     "warp": false
                   },
                   "number": {
                     "density": {
                       "enable": true,
                       "area": 800,
                       "factor": 1000
                     },
                     "limit": 0,
                     "value": 100
                   },
                   "opacity": {
                     "random": {
                       "enable": true,
                       "minimumValue": 0.3
                     },
                     "value": 0.8,
                     "animation": {
                       "enable": true,
                       "minimumValue": 0.3,
                       "speed": 0.5,
                       "sync": false
                     }
                   },
                   "reduceDuplicates": false,
                   "rotate": {
                     "random": {
                       "enable": false,
                       "minimumValue": 0
                     },
                     "value": 0,
                     "animation": {
                       "enable": false,
                       "speed": 0,
                       "sync": false
                     },
                     "direction": "clockwise",
                     "path": false
                   },
                   "shadow": {
                     "blur": 0,
                     "color": {
                       "value": "#000000"
                     },
                     "enable": false,
                     "offset": {
                       "x": 0,
                       "y": 0
                     }
                   },
                   "shape": {
                     "options": {},
                     "type": "circle"
                   },
                   "size": {
                     "random": {
                       "enable": true,
                       "minimumValue": 1
                     },
                     "value": 3,
                     "animation": {
                       "destroy": "none",
                       "enable": true,
                       "minimumValue": 1,
                       "speed": 3,
                       "startValue": "max",
                       "sync": false
                     }
                   },
                   "stroke": {
                     "width": 0,
                     "color": {
                       "value": "",
                       "animation": {
                         "enable": false,
                         "speed": 0,
                         "sync": false
                       }
                     }
                   },
                   "twinkle": {
                     "lines": {
                       "enable": false,
                       "frequency": 0.05,
                       "opacity": 1
                     },
                     "particles": {
                       "enable": false,
                       "frequency": 0.05,
                       "opacity": 1
                     }
                   }
                 },
                 "pauseOnBlur": true,
                 "pauseOnOutsideViewport": false,
               }}
    />
  )
}

export default AnimatedBackground;
