/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"latlonDistance": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([3,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/latlonDistance.js":
/*!**********************************!*\
  !*** ./src/js/latlonDistance.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var haversine_geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! haversine-geolocation */ \"./node_modules/haversine-geolocation/dist/build.js\");\n/* harmony import */ var haversine_geolocation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(haversine_geolocation__WEBPACK_IMPORTED_MODULE_0__);\n/*jshint esversion: 8 */\n\nconst geojson = {\n  type: \"FeatureCollection\",\n  features: [{\n    type: \"Feature\",\n    geometry: {\n      type: \"Point\",\n      coordinates: [0, 0]\n    },\n    properties: {\n      title: \"Mapbox DC\",\n      description: \"1714 14th St NW, Washington DC\",\n      \"marker-color\": \"#35A2D1\",\n      \"marker-size\": \"large\",\n      \"marker-symbol\": \"1\"\n    }\n  }, {\n    type: \"Feature\",\n    geometry: {\n      type: \"Point\",\n      coordinates: [0, 0]\n    },\n    properties: {\n      title: \"Mapbox SF\",\n      description: \"155 9th St, San Francisco\",\n      \"marker-color\": \"#fc4353\",\n      \"marker-size\": \"large\",\n      \"marker-symbol\": \"2\"\n    }\n  }]\n};\nconst map = L.mapbox.map(\"map\").setView([37.9, -77], 6);\nL.mapbox.accessToken = \"pk.eyJ1IjoibG9nYW41MjAxIiwiYSI6ImNrcTQybTFoZzE0aDQyeXM1aGNmYnR1MnoifQ.4kRWNfEH_Yao_mmdgrgjPA\";\nconst layer = L.mapbox.styleLayer(\"mapbox://styles/mapbox/streets-v11\").addTo(map); // add your tiles to the map\n// L.marker is a low-level marker constructor in Leaflet.\n\nvar featureLayer = L.mapbox.featureLayer().addTo(map);\nvar locationControl = L.control.locate({\n  circleStyle: {\n    opacity: 0\n  },\n  followCircleStyle: {\n    opacity: 0\n  },\n  drawCircle: false,\n  follow: false,\n  icon: \"fas fa-map-marker-alt\",\n  // follow the user's location\n  setView: false,\n  remainActive: false\n}).addTo(map);\n\nconst LocationState = function _LocationState() {\n  let data = {\n    origin: {\n      lat: LocationState.state.lat\n    },\n    destination: {\n      lon: LocationState.state.lon\n    }\n  };\n  return data;\n};\n\nconst myhandler = {\n  set: function (obj, prop, value) {\n    obj[prop] = value;\n  }\n};\nLocationState.state = new Proxy({\n  lat: null,\n  lon: null\n}, myhandler);\n\nconst findLocation = () => {\n  map.on(\"locationfound\", function (e) {\n    map.fitBounds(e.bounds);\n    let lat = e.latlng.lat;\n    let lon = e.latlng.lng;\n    geojson.features[0].geometry.coordinates = [lon, lat];\n    featureLayer.setGeoJSON(geojson);\n    var inputs = document.getElementById(\"latlonForm\").elements;\n\n    if (inputs[0].nodeName === \"INPUT\" && inputs[0].type === \"number\") {\n      // Update text input\n      inputs[0].value = lat;\n      inputs[1].value = lon;\n    }\n\n    setTimeout(() => {\n      locationControl.stop();\n    }, 500);\n  });\n};\n\nconst title = $(\"title\").html();\nconst pageTitle = title.slice(11);\nconsole.log(pageTitle);\nlet bookmarkControl = new L.Control.Bookmarks({\n  name: pageTitle\n}).addTo(map);\n\nfunction inputFocus(x) {\n  if ($(\"#secondOutput\").hasClass(\"second\")) {\n    $(\"#secondOutput\").removeClass(\"second\").addClass(\"fadeOut\");\n    $(\"#firstOutput\").removeClass(\"first\").addClass(\"fadeOut\");\n    setTimeout(() => {\n      $(\"#secondOutput\").addClass(\"d-none\");\n      $(\"#firstOutput\").addClass(\"d-none\");\n    }, 2000);\n  } //\n\n}\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  findLocation();\n  const north = document.getElementById(\"north\");\n  const south = document.getElementById(\"south\");\n  const degreesLat = document.getElementById(\"degrees-lat\");\n  const minutesLat = document.getElementById(\"minutes-lat\");\n  const secondsLat = document.getElementById(\"seconds-lat\");\n  const degreesLon = document.getElementById(\"degrees-lon\");\n  const minutesLon = document.getElementById(\"minutes-lon\");\n  const secondsLon = document.getElementById(\"seconds-lon\");\n  const east = document.getElementById(\"east\");\n  const west = document.getElementById(\"west\");\n  const outputInputField = document.getElementById(\"output-field-input\");\n  const dmsBtn = document.getElementById(\"dmsBtn\");\n  const dmsForm = document.getElementById(\"dms\");\n  const latlonForm = document.getElementById(\"latlonForm\");\n\n  function DDtoDMS(lat, lon) {\n    //\n    let latitude = Math.abs(lat);\n    let longitude = Math.abs(lon);\n    let dLat = Math.floor(latitude);\n    let mLat = Math.floor((latitude - dLat) * 60);\n    sLat = Math.round((latitude - dLat - mLat / 60) * 1e3 * 3600) / 1e3;\n    dLon = Math.floor(longitude);\n    mLon = Math.floor((longitude - dLon) * 60);\n    sLon = Math.floor((longitude - dLon - mLon / 60) * 1e3 * 3600) / 1e3;\n    let degreesLatitude = dLat;\n    let minutesLatitude = mLat;\n    let secondsLatitude = sLat;\n    let degreesLongitude = dLon;\n    let minutesLongitude = mLon;\n    let secondsLongitude = sLon;\n    let latResult = `${degreesLatitude}° ${minutesLatitude}' ${secondsLatitude}''`;\n    let lonResult = `${degreesLongitude}° ${minutesLongitude}' ${secondsLongitude}''`;\n    let result = {\n      lat: {\n        degrees: degreesLatitude,\n        minutes: minutesLatitude,\n        seconds: secondsLatitude\n      },\n      lon: {\n        degrees: degreesLongitude,\n        minutes: minutesLongitude,\n        seconds: secondsLongitude\n      },\n      popupMessage: {\n        lat: latResult,\n        lon: lonResult\n      }\n    };\n    return result;\n  }\n\n  function check(elm) {\n    document.getElementById(elm).checked = true;\n  }\n\n  const convertLocationData = document.getElementById(\"convertLocationData\");\n  const latInputField = document.getElementById(\"latInputField\");\n  const lonInputField = document.getElementById(\"lonInputField\");\n  const latlonGeocoderBtn = document.getElementById(\"latlonGeocoderBtn\");\n\n  const App = function _App() {\n    return `\n   <h1>Global State = [${App.state.count}] </h1>\n  `;\n  };\n\n  const handler = {\n    set: function (obj, prop, value) {\n      obj[prop] = value;\n    }\n  };\n  App.state = new Proxy({\n    count: 0\n  }, handler); // Initial Loading of the App\n\n  const CoordsApp = function _CoordsApp() {\n    return `\n   <h1>Origin State = [${CoordsApp.state.origin}] </h1> </br>\n   <h1>Destination State = [${CoordsApp.state.destination}] </h1>\n   <h1>User Location = [${CoordsApp.state.userLocation}] </h1>\n   <h1>trackingUser =  ${CoordsApp.state.trackingUser}</h1>\n  `;\n  };\n\n  const myhandler = {\n    set: function (obj, prop, value) {\n      obj[prop] = value;\n    }\n  };\n  CoordsApp.state = new Proxy({\n    origin: [],\n    destination: [],\n    userLocation: []\n  }, myhandler);\n  $(\"#originTest\").click(function (e) {\n    e.preventDefault();\n  });\n  $(\"#destinationTest\").click(function (e) {\n    e.preventDefault();\n  });\n  $(\"#switchTest\").click(function (e) {\n    e.preventDefault();\n  });\n\n  function addRoute() {\n    App.state.count++;\n    const origin = CoordsApp.state.origin;\n    const destination = CoordsApp.state.destination; //map.flyTo([centerLat, centerLon])\n\n    /* map.panInsideBounds([\n         [origin[1] , origin[0] ], // southwestern corner of the bounds\n         [destination[1] , destination[0], {padding: [50,50]} ] // northeastern corner of the bounds\n       ]);\n       //\n       geojson.features[0].geometry.coordinates = [origin[0], origin[1]];\n      geojson.features[1].geometry.coordinates = [destination[0], destination[1]]\n    */\n    //\n\n    let latD = destination[1];\n    let lonD = destination[0];\n    let latO = origin[1];\n    let lonO = origin[0];\n    geojson.features[0].geometry.coordinates = [lonO, latO];\n    geojson.features[1].geometry.coordinates = [lonD, latD]; //\n\n    featureLayer.setGeoJSON(geojson); //featureLayer.setGeoJSON(geojson).addTo(map);\n\n    /*\n      map.fitBounds(featureLayer.getBounds(), {\n    padding: [50,50]\n       });\n      map.zoomOut()\n    */\n\n    let latOrigin = origin[1];\n    let lonOrigin = origin[0];\n    let latDest = destination[1];\n    let lonDest = destination[0]; //\n\n    map.fitBounds([[latOrigin, lonOrigin], [latDest, lonDest]], {\n      padding: [50, 50]\n    });\n  }\n\n  function addNewRoute() {\n    const origin = CoordsApp.state.origin;\n    const destination = CoordsApp.state.destination;\n    let latD = destination[1];\n    let lonD = destination[0];\n    let latO = origin[1];\n    let lonO = origin[0];\n    geojson.features[0].geometry.coordinates = [lonO, latO];\n    geojson.features[1].geometry.coordinates = [lonD, latD];\n    featureLayer.setGeoJSON(geojson); // A simple line from origin to destination.\n    // A single point that animates along the route.\n    // Coordinates are initially set to origin.\n    // Calculate the distance in kilometers between route start/end point.\n    // animate(counter);\n\n    featureLayer.setGeoJSON(geojson);\n    let latOrigin = origin[1];\n    let lonOrigin = origin[0];\n    let latDest = destination[1];\n    let lonDest = destination[0]; //\n\n    map.fitBounds([[latOrigin, lonOrigin], [latDest, lonDest]], {\n      padding: [50, 50]\n    });\n  }\n\n  function format(time) {\n    // Hours, minutes and seconds\n    var hrs = ~~(time / 3600);\n    var mins = ~~(time % 3600 / 60);\n    let result = {\n      hours: hrs,\n      minutes: mins\n    }; // Output like \"1:01\" or \"4:03:59\" or \"123:03:59\"\n\n    return result;\n  }\n\n  function callMatrix(first, second) {\n    fetch(`https://api.mapbox.com/directions-matrix/v1/mapbox/driving/${first};${second}?&access_token=pk.eyJ1IjoibG9nYW41MjAxIiwiYSI6ImNrcTQycnlhMDBlb2kydXBwZHoyOGNsY3EifQ.E8N4lPy6tiI0xY3nor3MTg`).then(response => response.json()).then(json => {\n      const durations = json.durations[0];\n      const travelTime = durations[1];\n      const result = format(travelTime); // //\n\n      var alertPlaceholder = document.getElementById(\"liveAlertPlaceholder\");\n      var alertTrigger = document.getElementById(\"liveAlertBtn\");\n\n      function postLog(message) {\n        var wrapper = document.createElement(\"div\");\n        wrapper.innerHTML = `\n    <div class=\"alert alert-secondary d-flex align-items-center justify-content-between\" role=\"alert\">\n     <div class=\"alertMessage\">\n       ${message}\n     </div>\n\n\n   </div>`;\n        alertPlaceholder.append(wrapper);\n      }\n\n      if (alertPlaceholder.childElementCount == 0) {\n        postLog(`${result.hours} hour(s) and ${result.minutes} minutes`);\n      } else if (alertPlaceholder.childElementCount == 1) {\n        postLog(`${result.hours} hour(s) and ${result.minutes} minutes`);\n      } else if (alertPlaceholder.childElementCount == 2) {\n        $(\"#liveAlertPlaceholder\").empty();\n        setTimeout(() => {\n          postLog(`${result.hours} hour(s) and ${result.minutes}`);\n        }, 200);\n      }\n    });\n  }\n\n  $(\"#latlonForm\").on(\"submit\", function (e) {\n    e.preventDefault();\n    let inputs = document.getElementById(\"latlonForm\").elements;\n    let latO = inputs[0].value;\n    let lonO = inputs[1].value;\n    let latD = inputs[2].value;\n    let lonD = inputs[3].value;\n    geojson.features[0].geometry.coordinates = [lonO, latO];\n    geojson.features[1].geometry.coordinates = [lonD, latD];\n    featureLayer.setGeoJSON(geojson);\n    let origin = [latO, lonD];\n    let destination = [latD, lonD];\n    const points = [{\n      latitude: latO,\n      longitude: lonO\n    }, {\n      latitude: latD,\n      longitude: lonD\n    }];\n    const distance = haversine_geolocation__WEBPACK_IMPORTED_MODULE_0___default.a.getDistanceBetween(points[0], points[1], \"mi\");\n    $(\"#distanceInput\").val(`${distance} miles`);\n    map.fitBounds([[latO, lonO], [latD, lonD]], {\n      padding: [50, 50]\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGF0bG9uRGlzdGFuY2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbGF0bG9uRGlzdGFuY2UuanM/OWY5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzaGludCBlc3ZlcnNpb246IDggKi9cbmltcG9ydCBIYXZlcnNpbmVHZW9sb2NhdGlvbiBmcm9tIFwiaGF2ZXJzaW5lLWdlb2xvY2F0aW9uXCI7XG5jb25zdCBnZW9qc29uID0ge1xuICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gIGZlYXR1cmVzOiBbXG4gICAge1xuICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICBnZW9tZXRyeToge1xuICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbMCwgMF1cbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRpdGxlOiBcIk1hcGJveCBEQ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCIxNzE0IDE0dGggU3QgTlcsIFdhc2hpbmd0b24gRENcIixcbiAgICAgICAgXCJtYXJrZXItY29sb3JcIjogXCIjMzVBMkQxXCIsXG4gICAgICAgIFwibWFya2VyLXNpemVcIjogXCJsYXJnZVwiLFxuICAgICAgICBcIm1hcmtlci1zeW1ib2xcIjogXCIxXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICBjb29yZGluYXRlczogWzAsIDBdXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXRsZTogXCJNYXBib3ggU0ZcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiMTU1IDl0aCBTdCwgU2FuIEZyYW5jaXNjb1wiLFxuICAgICAgICBcIm1hcmtlci1jb2xvclwiOiBcIiNmYzQzNTNcIixcbiAgICAgICAgXCJtYXJrZXItc2l6ZVwiOiBcImxhcmdlXCIsXG4gICAgICAgIFwibWFya2VyLXN5bWJvbFwiOiBcIjJcIlxuICAgICAgfVxuICAgIH1cbiAgXVxufTtcblxuY29uc3QgbWFwID0gTC5tYXBib3gubWFwKFwibWFwXCIpLnNldFZpZXcoWzM3LjksIC03N10sIDYpO1xuTC5tYXBib3guYWNjZXNzVG9rZW4gPVxuICBcInBrLmV5SjFJam9pYkc5bllXNDFNakF4SWl3aVlTSTZJbU5yY1RReWJURm9aekUwYURReWVYTTFhR05tWW5SMU1ub2lmUS40a1JXTmZFSF9ZYW9fbW1kZ3JnalBBXCI7XG5cbmNvbnN0IGxheWVyID0gTC5tYXBib3hcbiAgLnN0eWxlTGF5ZXIoXCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExXCIpXG4gIC5hZGRUbyhtYXApOyAvLyBhZGQgeW91ciB0aWxlcyB0byB0aGUgbWFwXG5cbi8vIEwubWFya2VyIGlzIGEgbG93LWxldmVsIG1hcmtlciBjb25zdHJ1Y3RvciBpbiBMZWFmbGV0LlxuXG52YXIgZmVhdHVyZUxheWVyID0gTC5tYXBib3guZmVhdHVyZUxheWVyKCkuYWRkVG8obWFwKTtcblxudmFyIGxvY2F0aW9uQ29udHJvbCA9IEwuY29udHJvbFxuICAubG9jYXRlKHtcbiAgICBjaXJjbGVTdHlsZTogeyBvcGFjaXR5OiAwIH0sXG4gICAgZm9sbG93Q2lyY2xlU3R5bGU6IHsgb3BhY2l0eTogMCB9LFxuICAgIGRyYXdDaXJjbGU6IGZhbHNlLFxuICAgIGZvbGxvdzogZmFsc2UsXG4gICAgaWNvbjogXCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIiwgLy8gZm9sbG93IHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAgICBzZXRWaWV3OiBmYWxzZSxcbiAgICByZW1haW5BY3RpdmU6IGZhbHNlXG4gIH0pXG4gIC5hZGRUbyhtYXApO1xuY29uc3QgTG9jYXRpb25TdGF0ZSA9IGZ1bmN0aW9uIF9Mb2NhdGlvblN0YXRlKCkge1xuICBsZXQgZGF0YSA9IHtcbiAgICBvcmlnaW46IHtcbiAgICAgIGxhdDogTG9jYXRpb25TdGF0ZS5zdGF0ZS5sYXRcbiAgICB9LFxuICAgIGRlc3RpbmF0aW9uOiB7XG4gICAgICBsb246IExvY2F0aW9uU3RhdGUuc3RhdGUubG9uXG4gICAgfVxuICB9O1xuICByZXR1cm4gZGF0YTtcbn07XG5jb25zdCBteWhhbmRsZXIgPSB7XG4gIHNldDogZnVuY3Rpb24ob2JqLCBwcm9wLCB2YWx1ZSkge1xuICAgIG9ialtwcm9wXSA9IHZhbHVlO1xuICB9XG59O1xuXG5Mb2NhdGlvblN0YXRlLnN0YXRlID0gbmV3IFByb3h5KHsgbGF0OiBudWxsLCBsb246IG51bGwgfSwgbXloYW5kbGVyKTtcblxuY29uc3QgZmluZExvY2F0aW9uID0gKCkgPT4ge1xuICBtYXAub24oXCJsb2NhdGlvbmZvdW5kXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBtYXAuZml0Qm91bmRzKGUuYm91bmRzKTtcblxuICAgIGxldCBsYXQgPSBlLmxhdGxuZy5sYXQ7XG5cbiAgICBsZXQgbG9uID0gZS5sYXRsbmcubG5nO1xuXG4gICAgZ2VvanNvbi5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcyA9IFtsb24sIGxhdF07XG5cbiAgICBmZWF0dXJlTGF5ZXIuc2V0R2VvSlNPTihnZW9qc29uKTtcblxuICAgIHZhciBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhdGxvbkZvcm1cIikuZWxlbWVudHM7XG5cbiAgICBpZiAoaW5wdXRzWzBdLm5vZGVOYW1lID09PSBcIklOUFVUXCIgJiYgaW5wdXRzWzBdLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIC8vIFVwZGF0ZSB0ZXh0IGlucHV0XG4gICAgICBpbnB1dHNbMF0udmFsdWUgPSBsYXQ7XG4gICAgICBpbnB1dHNbMV0udmFsdWUgPSBsb247XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsb2NhdGlvbkNvbnRyb2wuc3RvcCgpO1xuICAgIH0sIDUwMCk7XG4gIH0pO1xufTtcbmNvbnN0IHRpdGxlID0gJChcInRpdGxlXCIpLmh0bWwoKTtcblxuY29uc3QgcGFnZVRpdGxlID0gdGl0bGUuc2xpY2UoMTEpO1xuY29uc29sZS5sb2cocGFnZVRpdGxlKTtcblxubGV0IGJvb2ttYXJrQ29udHJvbCA9IG5ldyBMLkNvbnRyb2wuQm9va21hcmtzKHtcbiAgbmFtZTogcGFnZVRpdGxlXG59KS5hZGRUbyhtYXApO1xuZnVuY3Rpb24gaW5wdXRGb2N1cyh4KSB7XG4gIGlmICgkKFwiI3NlY29uZE91dHB1dFwiKS5oYXNDbGFzcyhcInNlY29uZFwiKSkge1xuICAgICQoXCIjc2Vjb25kT3V0cHV0XCIpXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJzZWNvbmRcIilcbiAgICAgIC5hZGRDbGFzcyhcImZhZGVPdXRcIik7XG4gICAgJChcIiNmaXJzdE91dHB1dFwiKVxuICAgICAgLnJlbW92ZUNsYXNzKFwiZmlyc3RcIilcbiAgICAgIC5hZGRDbGFzcyhcImZhZGVPdXRcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAkKFwiI3NlY29uZE91dHB1dFwiKS5hZGRDbGFzcyhcImQtbm9uZVwiKTtcbiAgICAgICQoXCIjZmlyc3RPdXRwdXRcIikuYWRkQ2xhc3MoXCJkLW5vbmVcIik7XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICAvL1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBmaW5kTG9jYXRpb24oKTtcbiAgY29uc3Qgbm9ydGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vcnRoXCIpO1xuICBjb25zdCBzb3V0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic291dGhcIik7XG4gIGNvbnN0IGRlZ3JlZXNMYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZ3JlZXMtbGF0XCIpO1xuICBjb25zdCBtaW51dGVzTGF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW51dGVzLWxhdFwiKTtcbiAgY29uc3Qgc2Vjb25kc0xhdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vjb25kcy1sYXRcIik7XG5cbiAgY29uc3QgZGVncmVlc0xvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVncmVlcy1sb25cIik7XG4gIGNvbnN0IG1pbnV0ZXNMb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbnV0ZXMtbG9uXCIpO1xuICBjb25zdCBzZWNvbmRzTG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmRzLWxvblwiKTtcbiAgY29uc3QgZWFzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWFzdFwiKTtcbiAgY29uc3Qgd2VzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VzdFwiKTtcbiAgY29uc3Qgb3V0cHV0SW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0LWZpZWxkLWlucHV0XCIpO1xuICBjb25zdCBkbXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRtc0J0blwiKTtcbiAgY29uc3QgZG1zRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG1zXCIpO1xuXG4gIGNvbnN0IGxhdGxvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhdGxvbkZvcm1cIik7XG5cbiAgZnVuY3Rpb24gRER0b0RNUyhsYXQsIGxvbikge1xuICAgIC8vXG5cbiAgICBsZXQgbGF0aXR1ZGUgPSBNYXRoLmFicyhsYXQpO1xuICAgIGxldCBsb25naXR1ZGUgPSBNYXRoLmFicyhsb24pO1xuICAgIGxldCBkTGF0ID0gTWF0aC5mbG9vcihsYXRpdHVkZSk7XG4gICAgbGV0IG1MYXQgPSBNYXRoLmZsb29yKChsYXRpdHVkZSAtIGRMYXQpICogNjApO1xuXG4gICAgc0xhdCA9IE1hdGgucm91bmQoKGxhdGl0dWRlIC0gZExhdCAtIG1MYXQgLyA2MCkgKiAxZTMgKiAzNjAwKSAvIDFlMztcbiAgICBkTG9uID0gTWF0aC5mbG9vcihsb25naXR1ZGUpO1xuICAgIG1Mb24gPSBNYXRoLmZsb29yKChsb25naXR1ZGUgLSBkTG9uKSAqIDYwKTtcbiAgICBzTG9uID0gTWF0aC5mbG9vcigobG9uZ2l0dWRlIC0gZExvbiAtIG1Mb24gLyA2MCkgKiAxZTMgKiAzNjAwKSAvIDFlMztcbiAgICBsZXQgZGVncmVlc0xhdGl0dWRlID0gZExhdDtcbiAgICBsZXQgbWludXRlc0xhdGl0dWRlID0gbUxhdDtcbiAgICBsZXQgc2Vjb25kc0xhdGl0dWRlID0gc0xhdDtcbiAgICBsZXQgZGVncmVlc0xvbmdpdHVkZSA9IGRMb247XG4gICAgbGV0IG1pbnV0ZXNMb25naXR1ZGUgPSBtTG9uO1xuICAgIGxldCBzZWNvbmRzTG9uZ2l0dWRlID0gc0xvbjtcblxuICAgIGxldCBsYXRSZXN1bHQgPSBgJHtkZWdyZWVzTGF0aXR1ZGV9wrAgJHttaW51dGVzTGF0aXR1ZGV9JyAke3NlY29uZHNMYXRpdHVkZX0nJ2A7XG5cbiAgICBsZXQgbG9uUmVzdWx0ID0gYCR7ZGVncmVlc0xvbmdpdHVkZX3CsCAke21pbnV0ZXNMb25naXR1ZGV9JyAke3NlY29uZHNMb25naXR1ZGV9JydgO1xuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICBsYXQ6IHtcbiAgICAgICAgZGVncmVlczogZGVncmVlc0xhdGl0dWRlLFxuICAgICAgICBtaW51dGVzOiBtaW51dGVzTGF0aXR1ZGUsXG4gICAgICAgIHNlY29uZHM6IHNlY29uZHNMYXRpdHVkZVxuICAgICAgfSxcbiAgICAgIGxvbjoge1xuICAgICAgICBkZWdyZWVzOiBkZWdyZWVzTG9uZ2l0dWRlLFxuICAgICAgICBtaW51dGVzOiBtaW51dGVzTG9uZ2l0dWRlLFxuICAgICAgICBzZWNvbmRzOiBzZWNvbmRzTG9uZ2l0dWRlXG4gICAgICB9LFxuICAgICAgcG9wdXBNZXNzYWdlOiB7IGxhdDogbGF0UmVzdWx0LCBsb246IGxvblJlc3VsdCB9XG4gICAgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrKGVsbSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsbSkuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBjb25zdCBjb252ZXJ0TG9jYXRpb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb252ZXJ0TG9jYXRpb25EYXRhXCIpO1xuICBjb25zdCBsYXRJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYXRJbnB1dEZpZWxkXCIpO1xuICBjb25zdCBsb25JbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb25JbnB1dEZpZWxkXCIpO1xuICBjb25zdCBsYXRsb25HZW9jb2RlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGF0bG9uR2VvY29kZXJCdG5cIik7XG5cbiAgY29uc3QgQXBwID0gZnVuY3Rpb24gX0FwcCgpIHtcbiAgICByZXR1cm4gYFxuICAgPGgxPkdsb2JhbCBTdGF0ZSA9IFske0FwcC5zdGF0ZS5jb3VudH1dIDwvaDE+XG4gIGA7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlciA9IHtcbiAgICBzZXQ6IGZ1bmN0aW9uKG9iaiwgcHJvcCwgdmFsdWUpIHtcbiAgICAgIG9ialtwcm9wXSA9IHZhbHVlO1xuICAgIH1cbiAgfTtcblxuICBBcHAuc3RhdGUgPSBuZXcgUHJveHkoeyBjb3VudDogMCB9LCBoYW5kbGVyKTtcblxuICAvLyBJbml0aWFsIExvYWRpbmcgb2YgdGhlIEFwcFxuXG4gIGNvbnN0IENvb3Jkc0FwcCA9IGZ1bmN0aW9uIF9Db29yZHNBcHAoKSB7XG4gICAgcmV0dXJuIGBcbiAgIDxoMT5PcmlnaW4gU3RhdGUgPSBbJHtDb29yZHNBcHAuc3RhdGUub3JpZ2lufV0gPC9oMT4gPC9icj5cbiAgIDxoMT5EZXN0aW5hdGlvbiBTdGF0ZSA9IFske0Nvb3Jkc0FwcC5zdGF0ZS5kZXN0aW5hdGlvbn1dIDwvaDE+XG4gICA8aDE+VXNlciBMb2NhdGlvbiA9IFske0Nvb3Jkc0FwcC5zdGF0ZS51c2VyTG9jYXRpb259XSA8L2gxPlxuICAgPGgxPnRyYWNraW5nVXNlciA9ICAke0Nvb3Jkc0FwcC5zdGF0ZS50cmFja2luZ1VzZXJ9PC9oMT5cbiAgYDtcbiAgfTtcblxuICBjb25zdCBteWhhbmRsZXIgPSB7XG4gICAgc2V0OiBmdW5jdGlvbihvYmosIHByb3AsIHZhbHVlKSB7XG4gICAgICBvYmpbcHJvcF0gPSB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgQ29vcmRzQXBwLnN0YXRlID0gbmV3IFByb3h5KFxuICAgIHsgb3JpZ2luOiBbXSwgZGVzdGluYXRpb246IFtdLCB1c2VyTG9jYXRpb246IFtdIH0sXG4gICAgbXloYW5kbGVyXG4gICk7XG5cbiAgJChcIiNvcmlnaW5UZXN0XCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICAkKFwiI2Rlc3RpbmF0aW9uVGVzdFwiKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbiAgJChcIiNzd2l0Y2hUZXN0XCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICBmdW5jdGlvbiBhZGRSb3V0ZSgpIHtcbiAgICBBcHAuc3RhdGUuY291bnQrKztcblxuICAgIGNvbnN0IG9yaWdpbiA9IENvb3Jkc0FwcC5zdGF0ZS5vcmlnaW47XG5cbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IENvb3Jkc0FwcC5zdGF0ZS5kZXN0aW5hdGlvbjtcblxuICAgIC8vbWFwLmZseVRvKFtjZW50ZXJMYXQsIGNlbnRlckxvbl0pXG4gICAgLyogbWFwLnBhbkluc2lkZUJvdW5kcyhbXG4gICAgICAgICBbb3JpZ2luWzFdICwgb3JpZ2luWzBdIF0sIC8vIHNvdXRod2VzdGVybiBjb3JuZXIgb2YgdGhlIGJvdW5kc1xuICAgICAgICAgW2Rlc3RpbmF0aW9uWzFdICwgZGVzdGluYXRpb25bMF0sIHtwYWRkaW5nOiBbNTAsNTBdfSBdIC8vIG5vcnRoZWFzdGVybiBjb3JuZXIgb2YgdGhlIGJvdW5kc1xuICAgICAgIF0pO1xuICAgICAgIC8vXG5cbiAgICAgIGdlb2pzb24uZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMgPSBbb3JpZ2luWzBdLCBvcmlnaW5bMV1dO1xuICAgICAgZ2VvanNvbi5mZWF0dXJlc1sxXS5nZW9tZXRyeS5jb29yZGluYXRlcyA9IFtkZXN0aW5hdGlvblswXSwgZGVzdGluYXRpb25bMV1dXG5cbiAgKi9cbiAgICAvL1xuICAgIGxldCBsYXREID0gZGVzdGluYXRpb25bMV07XG4gICAgbGV0IGxvbkQgPSBkZXN0aW5hdGlvblswXTtcbiAgICBsZXQgbGF0TyA9IG9yaWdpblsxXTtcbiAgICBsZXQgbG9uTyA9IG9yaWdpblswXTtcbiAgICBnZW9qc29uLmZlYXR1cmVzWzBdLmdlb21ldHJ5LmNvb3JkaW5hdGVzID0gW2xvbk8sIGxhdE9dO1xuICAgIGdlb2pzb24uZmVhdHVyZXNbMV0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMgPSBbbG9uRCwgbGF0RF07XG4gICAgLy9cbiAgICBmZWF0dXJlTGF5ZXIuc2V0R2VvSlNPTihnZW9qc29uKTtcblxuICAgIC8vZmVhdHVyZUxheWVyLnNldEdlb0pTT04oZ2VvanNvbikuYWRkVG8obWFwKTtcblxuICAgIC8qXG4gICAgICBtYXAuZml0Qm91bmRzKGZlYXR1cmVMYXllci5nZXRCb3VuZHMoKSwge1xuICBwYWRkaW5nOiBbNTAsNTBdXG5cbiAgICAgIH0pO1xuICAgICAgbWFwLnpvb21PdXQoKVxuICAqL1xuXG4gICAgbGV0IGxhdE9yaWdpbiA9IG9yaWdpblsxXTtcbiAgICBsZXQgbG9uT3JpZ2luID0gb3JpZ2luWzBdO1xuICAgIGxldCBsYXREZXN0ID0gZGVzdGluYXRpb25bMV07XG4gICAgbGV0IGxvbkRlc3QgPSBkZXN0aW5hdGlvblswXTtcbiAgICAvL1xuICAgIG1hcC5maXRCb3VuZHMoXG4gICAgICBbXG4gICAgICAgIFtsYXRPcmlnaW4sIGxvbk9yaWdpbl0sXG4gICAgICAgIFtsYXREZXN0LCBsb25EZXN0XVxuICAgICAgXSxcbiAgICAgIHsgcGFkZGluZzogWzUwLCA1MF0gfVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGROZXdSb3V0ZSgpIHtcbiAgICBjb25zdCBvcmlnaW4gPSBDb29yZHNBcHAuc3RhdGUub3JpZ2luO1xuXG4gICAgY29uc3QgZGVzdGluYXRpb24gPSBDb29yZHNBcHAuc3RhdGUuZGVzdGluYXRpb247XG4gICAgbGV0IGxhdEQgPSBkZXN0aW5hdGlvblsxXTtcbiAgICBsZXQgbG9uRCA9IGRlc3RpbmF0aW9uWzBdO1xuICAgIGxldCBsYXRPID0gb3JpZ2luWzFdO1xuICAgIGxldCBsb25PID0gb3JpZ2luWzBdO1xuICAgIGdlb2pzb24uZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMgPSBbbG9uTywgbGF0T107XG4gICAgZ2VvanNvbi5mZWF0dXJlc1sxXS5nZW9tZXRyeS5jb29yZGluYXRlcyA9IFtsb25ELCBsYXREXTtcblxuICAgIGZlYXR1cmVMYXllci5zZXRHZW9KU09OKGdlb2pzb24pO1xuICAgIC8vIEEgc2ltcGxlIGxpbmUgZnJvbSBvcmlnaW4gdG8gZGVzdGluYXRpb24uXG5cbiAgICAvLyBBIHNpbmdsZSBwb2ludCB0aGF0IGFuaW1hdGVzIGFsb25nIHRoZSByb3V0ZS5cbiAgICAvLyBDb29yZGluYXRlcyBhcmUgaW5pdGlhbGx5IHNldCB0byBvcmlnaW4uXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGluIGtpbG9tZXRlcnMgYmV0d2VlbiByb3V0ZSBzdGFydC9lbmQgcG9pbnQuXG5cbiAgICAvLyBhbmltYXRlKGNvdW50ZXIpO1xuICAgIGZlYXR1cmVMYXllci5zZXRHZW9KU09OKGdlb2pzb24pO1xuXG4gICAgbGV0IGxhdE9yaWdpbiA9IG9yaWdpblsxXTtcbiAgICBsZXQgbG9uT3JpZ2luID0gb3JpZ2luWzBdO1xuICAgIGxldCBsYXREZXN0ID0gZGVzdGluYXRpb25bMV07XG4gICAgbGV0IGxvbkRlc3QgPSBkZXN0aW5hdGlvblswXTtcbiAgICAvL1xuICAgIG1hcC5maXRCb3VuZHMoXG4gICAgICBbXG4gICAgICAgIFtsYXRPcmlnaW4sIGxvbk9yaWdpbl0sXG4gICAgICAgIFtsYXREZXN0LCBsb25EZXN0XVxuICAgICAgXSxcbiAgICAgIHtcbiAgICAgICAgcGFkZGluZzogWzUwLCA1MF1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0KHRpbWUpIHtcbiAgICAvLyBIb3VycywgbWludXRlcyBhbmQgc2Vjb25kc1xuICAgIHZhciBocnMgPSB+fih0aW1lIC8gMzYwMCk7XG4gICAgdmFyIG1pbnMgPSB+figodGltZSAlIDM2MDApIC8gNjApO1xuXG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIGhvdXJzOiBocnMsXG4gICAgICBtaW51dGVzOiBtaW5zXG4gICAgfTtcbiAgICAvLyBPdXRwdXQgbGlrZSBcIjE6MDFcIiBvciBcIjQ6MDM6NTlcIiBvciBcIjEyMzowMzo1OVwiXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGxNYXRyaXgoZmlyc3QsIHNlY29uZCkge1xuICAgIGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm1hcGJveC5jb20vZGlyZWN0aW9ucy1tYXRyaXgvdjEvbWFwYm94L2RyaXZpbmcvJHtmaXJzdH07JHtzZWNvbmR9PyZhY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2liRzluWVc0MU1qQXhJaXdpWVNJNkltTnJjVFF5Y25saE1EQmxiMmt5ZFhCd1pIb3lPR05zWTNFaWZRLkU4TjRsUHk2dGlJMHhZM25vcjNNVGdgXG4gICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9ucyA9IGpzb24uZHVyYXRpb25zWzBdO1xuICAgICAgICBjb25zdCB0cmF2ZWxUaW1lID0gZHVyYXRpb25zWzFdO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBmb3JtYXQodHJhdmVsVGltZSk7XG4gICAgICAgIC8vIC8vXG5cbiAgICAgICAgdmFyIGFsZXJ0UGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpdmVBbGVydFBsYWNlaG9sZGVyXCIpO1xuICAgICAgICB2YXIgYWxlcnRUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXZlQWxlcnRCdG5cIik7XG5cbiAgICAgICAgZnVuY3Rpb24gcG9zdExvZyhtZXNzYWdlKSB7XG4gICAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zZWNvbmRhcnkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIHJvbGU9XCJhbGVydFwiPlxuICAgICA8ZGl2IGNsYXNzPVwiYWxlcnRNZXNzYWdlXCI+XG4gICAgICAgJHttZXNzYWdlfVxuICAgICA8L2Rpdj5cblxuXG4gICA8L2Rpdj5gO1xuXG4gICAgICAgICAgYWxlcnRQbGFjZWhvbGRlci5hcHBlbmQod3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFsZXJ0UGxhY2Vob2xkZXIuY2hpbGRFbGVtZW50Q291bnQgPT0gMCkge1xuICAgICAgICAgIHBvc3RMb2coYCR7cmVzdWx0LmhvdXJzfSBob3VyKHMpIGFuZCAke3Jlc3VsdC5taW51dGVzfSBtaW51dGVzYCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWxlcnRQbGFjZWhvbGRlci5jaGlsZEVsZW1lbnRDb3VudCA9PSAxKSB7XG4gICAgICAgICAgcG9zdExvZyhgJHtyZXN1bHQuaG91cnN9IGhvdXIocykgYW5kICR7cmVzdWx0Lm1pbnV0ZXN9IG1pbnV0ZXNgKTtcbiAgICAgICAgfSBlbHNlIGlmIChhbGVydFBsYWNlaG9sZGVyLmNoaWxkRWxlbWVudENvdW50ID09IDIpIHtcbiAgICAgICAgICAkKFwiI2xpdmVBbGVydFBsYWNlaG9sZGVyXCIpLmVtcHR5KCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwb3N0TG9nKGAke3Jlc3VsdC5ob3Vyc30gaG91cihzKSBhbmQgJHtyZXN1bHQubWludXRlc31gKTtcbiAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gICQoXCIjbGF0bG9uRm9ybVwiKS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhdGxvbkZvcm1cIikuZWxlbWVudHM7XG5cbiAgICBsZXQgbGF0TyA9IGlucHV0c1swXS52YWx1ZTtcbiAgICBsZXQgbG9uTyA9IGlucHV0c1sxXS52YWx1ZTtcbiAgICBsZXQgbGF0RCA9IGlucHV0c1syXS52YWx1ZTtcbiAgICBsZXQgbG9uRCA9IGlucHV0c1szXS52YWx1ZTtcbiAgICBnZW9qc29uLmZlYXR1cmVzWzBdLmdlb21ldHJ5LmNvb3JkaW5hdGVzID0gW2xvbk8sIGxhdE9dO1xuICAgIGdlb2pzb24uZmVhdHVyZXNbMV0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMgPSBbbG9uRCwgbGF0RF07XG4gICAgZmVhdHVyZUxheWVyLnNldEdlb0pTT04oZ2VvanNvbik7XG5cbiAgICBsZXQgb3JpZ2luID0gW2xhdE8sIGxvbkRdO1xuICAgIGxldCBkZXN0aW5hdGlvbiA9IFtsYXRELCBsb25EXTtcbiAgICBjb25zdCBwb2ludHMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhdGl0dWRlOiBsYXRPLFxuICAgICAgICBsb25naXR1ZGU6IGxvbk9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhdGl0dWRlOiBsYXRELFxuICAgICAgICBsb25naXR1ZGU6IGxvbkRcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3QgZGlzdGFuY2UgPSBIYXZlcnNpbmVHZW9sb2NhdGlvbi5nZXREaXN0YW5jZUJldHdlZW4oXG4gICAgICBwb2ludHNbMF0sXG4gICAgICBwb2ludHNbMV0sXG4gICAgICBcIm1pXCJcbiAgICApO1xuXG4gICAgJChcIiNkaXN0YW5jZUlucHV0XCIpLnZhbChgJHtkaXN0YW5jZX0gbWlsZXNgKTtcbiAgICBtYXAuZml0Qm91bmRzKFxuICAgICAgW1xuICAgICAgICBbbGF0TywgbG9uT10sXG4gICAgICAgIFtsYXRELCBsb25EXVxuICAgICAgXSxcbiAgICAgIHsgcGFkZGluZzogWzUwLCA1MF0gfVxuICAgICk7XG4gIH0pO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFOQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU5BO0FBakJBO0FBa0NBO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQU1BO0FBQ0E7QUFLQTtBQUFBO0FBRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/latlonDistance.js\n");

/***/ }),

/***/ 3:
/*!****************************************!*\
  !*** multi ./src/js/latlonDistance.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/latlonDistance.js */"./src/js/latlonDistance.js");


/***/ })

/******/ });