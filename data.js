var APP_DATA = {
  "scenes": [
    {
      "id": "0-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.8436192104420837,
        "pitch": 0.15893704876768666,
        "fov": 1.5585319558264286
      },
      "linkHotspots": [
        {
          "yaw": 1.9614393177337401,
          "pitch": -0.056657098896891966,
          "rotation": 0,
          "target": "1-badezimmer"
        },
        {
          "yaw": 1.3335123961710575,
          "pitch": -0.08895746625705314,
          "rotation": 0,
          "target": "2-zimmer-nr1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-badezimmer",
      "name": "Badezimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.08083776101851115,
        "pitch": -0.07378547193757967,
        "fov": 1.5585319558264286
      },
      "linkHotspots": [
        {
          "yaw": -2.95757609270688,
          "pitch": 0.05613704275178577,
          "rotation": 7.0685834705770345,
          "target": "2-zimmer-nr1"
        },
        {
          "yaw": 2.630552048195475,
          "pitch": 0.002132484397808554,
          "rotation": 5.497787143782138,
          "target": "0-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-zimmer-nr1",
      "name": "Zimmer Nr1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.1200750761156737,
        "pitch": -0.06667816312578445,
        "fov": 1.542694070114342
      },
      "linkHotspots": [
        {
          "yaw": -1.8712753621513247,
          "pitch": 0.02373288932138351,
          "rotation": 0,
          "target": "3-zimmer-nr2"
        },
        {
          "yaw": 1.300728992013747,
          "pitch": -0.057313825767568716,
          "rotation": 0,
          "target": "1-badezimmer"
        },
        {
          "yaw": 2.010776164124252,
          "pitch": 0.06822161876148414,
          "rotation": 0,
          "target": "0-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-zimmer-nr2",
      "name": "Zimmer Nr2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5585319558264286
      },
      "linkHotspots": [
        {
          "yaw": 2.3357489556681212,
          "pitch": 0.020737825166300183,
          "rotation": 0,
          "target": "2-zimmer-nr1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Wohnung 1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
