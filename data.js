var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama1_000",
      "name": "Panorama1_000",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9376647488173244,
          "pitch": -0.2818629885171564,
          "rotation": 1.5707963267948966,
          "target": "1-panorama2_000"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama2_000",
      "name": "Panorama2_000",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.07625621829993356,
        "pitch": -0.13480658909672094,
        "fov": 1.1984015391944836
      },
      "linkHotspots": [
        {
          "yaw": -0.8805092182278358,
          "pitch": -0.3146398618409947,
          "rotation": 7.853981633974483,
          "target": "2-panorama3_000"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama3_000",
      "name": "Panorama3_000",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8160372662083066,
          "pitch": -0.30977201584110503,
          "rotation": 1.5707963267948966,
          "target": "0-panorama1_000"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "RX",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
