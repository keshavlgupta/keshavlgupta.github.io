import React, {useCallback} from "react";
import "./SplashScreen.css"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"

const SplashScreen = () => {
	const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

	return (
		<Particles
		id="tsparticles"
		init={particlesInit}
		options={{
		  "background": {
			"color": {
			  "value": "#000000"
			},
			"size": "cover"
		  },
		  "interactivity": {
			detectsOn: "window",
			"events": {
			  "onClick": {
				"enable": true,
				"mode": "push"
			  },
			  "onHover": {
				"enable": true,
				"mode": "repulse",
				"parallax": {
				  "force": 20
				}
			  }
			},
			"modes": {
			  "bubble": {
				"distance": 400,
				"duration": 2,
				"opacity": 0.8,
				"size": 40
			  },
			  "grab": {
				"distance": 400
			  }
			}
		  },
		  "particles": {
			"color": {
			  "value": "#ffffff"
			},
			"links": {
			  "color": {
				"value": "#ffffff"
			  },
			  "distance": 100,
			  "enable": true,
			  "opacity": 0.9
			},
			"move": {
			  "direction": "bottom",
			  "enable": true,
			  "outModes": {
				"bottom": "out",
				"left": "out",
				"right": "out",
				"top": "out"
			  }
			},
			"number": {
			  "density": {
				"enable": true
			  },
			  "value": 100
			},
			"opacity": {
			  "value": 0.9,
			  "animation": {
				"enable": true,
				"minimumValue": 0.1,
				"speed": 1
			  }
			},
			"shape": {
			  "options": {
				"character": {
				  "value": [
					"1",
					"0"
				  ],
				  "font": "Verdana",
				  "style": "",
				  "weight": "400",
				  "fill": true
				},
				"char": {
				  "value": [
					"1",
					"0"
				  ],
				  "font": "Verdana",
				  "style": "10",
				  "weight": "700",
				  "fill": true
				}
			  },
			  "type": "char"
			},
			"size": {
			  "value": 7,
			  "animation": {
				"minimumValue": 10,
				"speed": 5
			  }
			},
			"stroke": {
			  "width": 1,
			  "color": {
				"value": "#ffffff",
				"animation": {
				  "enable": false,
				  "speed": 1,
				  "sync": true
				}
			  }
			}
		  }
		}
		}
	  />
	)
}

export default SplashScreen;
