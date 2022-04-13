/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/latlonToDMS.js":
/*!*******************************!*\
  !*** ./src/js/latlonToDMS.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*jshint esversion: 8 */\nfunction test(e) {\n  e.preventDefault();\n}\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  let scrollPos = 0;\n  const mainNav = document.getElementById(\"mainNav\");\n  const headerHeight = mainNav.clientHeight;\n});\n$(document).ready(function () {\n  function ConvertDMSToDD(degrees, minutes, seconds, direction) {\n    var dd = degrees + minutes / 60 + seconds / (60 * 60);\n\n    if (direction == \"S\" || direction == \"W\") {\n      dd = dd * -1;\n    } // Don't do anything for N or E\n\n\n    return dd;\n  }\n\n  const north = document.getElementById(\"north\");\n  const south = document.getElementById(\"south\");\n  const degreesLat = document.getElementById(\"degrees-lat\");\n  const minutesLat = document.getElementById(\"minutes-lat\");\n  const secondsLat = document.getElementById(\"seconds-lat\");\n  const degreesLon = document.getElementById(\"degrees-lon\");\n  const minutesLon = document.getElementById(\"minutes-lon\");\n  const secondsLon = document.getElementById(\"seconds-lon\");\n  const east = document.getElementById(\"east\");\n  const west = document.getElementById(\"west\");\n  const outputInputField = document.getElementById(\"output-field-input\");\n  const dmsBtn = document.getElementById(\"dmsBtn\");\n  const dmsForm = document.getElementById(\"dms\");\n  const latlonForm = document.getElementById(\"latlonForm\");\n\n  function DDtoDMS(lat, lon) {\n    //\n    let latitude = Math.abs(lat);\n    let longitude = Math.abs(lon);\n    let dLat = Math.floor(latitude);\n    let mLat = Math.floor((latitude - dLat) * 60);\n    sLat = Math.round((latitude - dLat - mLat / 60) * 1e3 * 3600) / 1e3;\n    dLon = Math.floor(longitude);\n    mLon = Math.floor((longitude - dLon) * 60);\n    sLon = Math.floor((longitude - dLon - mLon / 60) * 1e3 * 3600) / 1e3;\n    let degreesLatitude = dLat;\n    let minutesLatitude = mLat;\n    let secondsLatitude = sLat;\n    let degreesLongitude = dLon;\n    let minutesLongitude = mLon;\n    let secondsLongitude = sLon;\n    let latResult = `${degreesLatitude}° ${minutesLatitude}' ${secondsLatitude}''`;\n    let lonResult = `${degreesLongitude}° ${minutesLongitude}' ${secondsLongitude}''`;\n    let result = {\n      lat: {\n        degrees: degreesLatitude,\n        minutes: minutesLatitude,\n        seconds: secondsLatitude\n      },\n      lon: {\n        degrees: degreesLongitude,\n        minutes: minutesLongitude,\n        seconds: secondsLongitude\n      },\n      popupMessage: {\n        lat: latResult,\n        lon: lonResult\n      }\n    };\n    return result;\n  }\n\n  function check(elm) {\n    document.getElementById(elm).checked = true;\n  }\n\n  const convertLocationData = document.getElementById(\"convertLocationData\");\n  const latInputField = document.getElementById(\"latInputField\");\n  const lonInputField = document.getElementById(\"lonInputField\");\n  const latlonGeocoderBtn = document.getElementById(\"latlonGeocoderBtn\");\n\n  const CoordsApp = function _CoordsApp() {\n    return `\n     <h1>Origin State = [${CoordsApp.state.origin}] </h1> </br>\n     <h1>Destination State = [${CoordsApp.state.destination}] </h1>\n     <h1>User Location = [${CoordsApp.state.userLocation}] </h1>\n     <h1>trackingUser =  ${CoordsApp.state.trackingUser}</h1>\n    `;\n  };\n\n  const myhandler = {\n    set: function (obj, prop, value) {\n      obj[prop] = value;\n    }\n  };\n  CoordsApp.state = new Proxy({\n    origin: [],\n    destination: [],\n    userLocation: [],\n    trackingUser: false\n  }, myhandler);\n  L.mapbox.accessToken = \"pk.eyJ1IjoibG9nYW41MjAxIiwiYSI6ImNrcTQybTFoZzE0aDQyeXM1aGNmYnR1MnoifQ.4kRWNfEH_Yao_mmdgrgjPA\";\n  const map = L.mapbox.map(\"map\").setView([37.9, -77], 6);\n  L.mapbox.styleLayer(\"mapbox://styles/mapbox/streets-v11\").addTo(map); // add your tiles to the map\n  // L.marker is a low-level marker constructor in Leaflet.\n\n  const marker = L.marker([0, 0], {\n    icon: L.mapbox.marker.icon({\n      \"marker-size\": \"large\",\n      \"marker-color\": \"blue\"\n    })\n  }).addTo(map);\n  var locationControl = L.control.locate({\n    circleStyle: {\n      opacity: 0\n    },\n    followCircleStyle: {\n      opacity: 0\n    },\n    drawCircle: false,\n    follow: false,\n    icon: \"fas fa-map-marker-alt\",\n    // follow the user's location\n    setView: false,\n    remainActive: false\n  }).addTo(map);\n\n  async function findAddress(lat, lon) {\n    const query = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=pk.eyJ1IjoibG9nYW41MjAxIiwiYSI6ImNrcTQycnlhMDBlb2kydXBwZHoyOGNsY3EifQ.E8N4lPy6tiI0xY3nor3MTg`, {\n      method: \"GET\"\n    });\n\n    if (query.status !== 200) {\n      return;\n    }\n\n    const data = await query.json();\n    return data;\n  }\n\n  map.on(\"locationfound\", async function (e) {\n    let lat = e.latitude;\n    let lon = e.longitude;\n    var radius = e.accuracy;\n    localStorage.setItem(\"userLatLon\", `${lat}, ${lon}`);\n    locationControl.stop();\n    $(\"#latInputField\").val(lat);\n    $(\"#lonInputField\").val(lon);\n    north.checked = lat >= 0 ? true : false;\n    south.check = lat < 0 ? true : false;\n    east.checked = lon >= 0 ? true : false;\n    west.checked = lon < 0 ? true : false;\n    const dmsCalculated = DDtoDMS(lat, lon);\n    document.getElementById(\"degrees-lat\").value = dmsCalculated.lat.degrees;\n    document.getElementById(\"minutes-lat\").value = dmsCalculated.lat.minutes;\n    document.getElementById(\"seconds-lat\").value = dmsCalculated.lat.seconds;\n    document.getElementById(\"degrees-lon\").value = dmsCalculated.lon.degrees;\n    document.getElementById(\"minutes-lon\").value = dmsCalculated.lon.minutes;\n    document.getElementById(\"seconds-lon\").value = dmsCalculated.lon.seconds;\n    map.fitBounds([[lat, lon]], {\n      padding: [100, 100]\n    });\n    var popup = L.popup({\n      autoPan: true,\n      keepInView: true\n    }).setContent(`\n    <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <p class=\"card-text\">\n\n\n\n          <span><strong> Latitude: </strong> <span class=\"lat\">${lat} </span></span> <span> <strong>\n          Longitude: <span class=\"lon\">${lon}</span></strong> </span>\n          <br>\n          <div class= \"mt-1\">\n          ${dmsCalculated.popupMessage.lat} ${dmsCalculated.popupMessage.lon}\n        </div>\n          </p>\n          <div class=\" mt-2 altitude\">\n          <button class=\"btn btn-primary btn-sm\" id=\"getAltitude\" type=\"button \">\n              Get Altitude\n          </button>\n      </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n\n  `);\n    marker.setLatLng([lat, lon]).bindPopup(popup).openPopup();\n  });\n  map.on(\"locationerror\", function () {\n    alert(\"Position could not be found\");\n  });\n\n  const coordinatesGeocoder = function (query) {\n    // Match anything which looks like\n    // decimal degrees coordinate pair.\n    const matches = query.match(/^[ ]*(?:Lat: )?(-?\\d+\\.?\\d*)[, ]+(?:Lng: )?(-?\\d+\\.?\\d*)[ ]*$/i);\n\n    if (!matches) {\n      return null;\n    }\n\n    function coordinateFeature(lng, lat) {\n      return {\n        center: [lng, lat],\n        geometry: {\n          type: \"Point\",\n          coordinates: [lng, lat]\n        },\n        place_name: \"Lat: \" + lat + \" Lng: \" + lng,\n        place_type: [\"coordinate\"],\n        properties: {},\n        type: \"Feature\"\n      };\n    }\n\n    const coord1 = Number(matches[1]);\n    const coord2 = Number(matches[2]);\n    const geocodes = [];\n\n    if (coord1 < -90 || coord1 > 90) {\n      // must be lng, lat\n      geocodes.push(coordinateFeature(coord1, coord2));\n    }\n\n    if (coord2 < -90 || coord2 > 90) {\n      // must be lat, lng\n      geocodes.push(coordinateFeature(coord2, coord1));\n    }\n\n    if (geocodes.length === 0) {\n      // else could be either lng, lat or lat, lng\n      geocodes.push(coordinateFeature(coord1, coord2));\n      geocodes.push(coordinateFeature(coord2, coord1));\n    }\n\n    return geocodes;\n  };\n\n  async function getElevation(lon, lat) {\n    // Construct the API request\n    const query = await fetch(`https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2/tilequery/${lon},${lat}.json?layers=contour&limit=50&access_token=pk.eyJ1IjoibG9nYW41MjAxIiwiYSI6ImNrcTQycnlhMDBlb2kydXBwZHoyOGNsY3EifQ.E8N4lPy6tiI0xY3nor3MTg`, {\n      method: \"GET\"\n    });\n    if (query.status !== 200) return;\n    const data = await query.json(); // Display the longitude and latitude values\n    // Get all the returned features\n\n    const allFeatures = data.features; // For each returned feature, add elevation data to the elevations array\n\n    const elevations = allFeatures.map(feature => feature.properties.ele); // In the elevations array, find the largest value\n\n    const highestElevation = Math.max(...elevations);\n    $(\".altitude\").html(`<div> ${highestElevation} meters </div>`);\n  }\n\n  $(document).on(\"click\", \"#getAltitude\", function (e) {\n    e.preventDefault();\n    let lat = $(\".lat\").html();\n    let lon = $(\".lon\").html();\n    getElevation(lon, lat);\n  }); // Clear results container when search is cleared.\n\n  function format(time) {\n    // Hours, minutes and seconds\n    var hrs = ~~(time / 3600);\n    var mins = ~~(time % 3600 / 60);\n    let result = {\n      hours: hrs,\n      minutes: mins\n    }; // Output like \"1:01\" or \"4:03:59\" or \"123:03:59\"\n\n    return result;\n  }\n\n  $(\"#latlonForm\").on(\"submit\", function (e) {\n    e.preventDefault();\n    let latInput = document.getElementById(\"latInputField\");\n    let lonInput = document.getElementById(\"lonInputField\");\n    const lat = e.currentTarget[0].value;\n    const lon = e.currentTarget[1].value;\n    const parsedLat = parseFloat(lat);\n    const parsedLon = parseFloat(lon);\n    north.checked = lat >= 0 ? true : false;\n    south.check = lat < 0 ? true : false;\n    east.checked = lon >= 0 ? true : false;\n    west.checked = lon < 0 ? true : false;\n    const dmsCalculated = DDtoDMS(lat, lon);\n    map.fitBounds([[lat, lon]], {\n      padding: [100, 100]\n    });\n    $(\"#degrees-lat\").val(dmsCalculated.lat.degrees);\n    $(\"#minutes-lat\").val(dmsCalculated.lat.minutes);\n    $(\"#seconds-lat\").val(dmsCalculated.lat.seconds);\n    $(\"#degrees-lon\").val(dmsCalculated.lon.degrees);\n    $(\"#minutes-lon\").val(dmsCalculated.lon.minutes);\n    $(\"#seconds-lon\").val(dmsCalculated.lon.seconds); //  ${dmsCalculated.lat} ${dmsCalculated.lon}\n\n    marker.setLatLng([lat, lon]).bindPopup(`\n        <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n\n              <p class=\"card-text\">\n\n\n\n              <span><strong> Latitude: </strong> <span class=\"lat\">${lat} </span></span> <span> <strong>\n              Longitude: <span class=\"lon\">${lon}</span></strong> </span>\n              <br>\n              <div class= \"mt-1\">\n              ${dmsCalculated.popupMessage.lat} ${dmsCalculated.popupMessage.lon}\n            </div>\n              </p>\n              <div class=\" mt-2 altitude\">\n              <button class=\"btn btn-primary btn-sm\" id=\"getAltitude\" type=\"button \">\n                  Get Altitude\n              </button>\n          </div>\n            </div>\n          </div>\n        </div>\n  </div>\n\n\n      `).openPopup();\n  });\n  const title = $(\"title\").html();\n  const pageTitle = title.slice(11);\n  let bookmarkControl = new L.Control.Bookmarks({\n    name: pageTitle\n  }).addTo(map);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbGF0bG9uVG9ETVMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbGF0bG9uVG9ETVMuanM/N2U1NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzaGludCBlc3ZlcnNpb246IDggKi9cbmZ1bmN0aW9uIHRlc3QoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgc2Nyb2xsUG9zID0gMDtcbiAgY29uc3QgbWFpbk5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbk5hdlwiKTtcbiAgY29uc3QgaGVhZGVySGVpZ2h0ID0gbWFpbk5hdi5jbGllbnRIZWlnaHQ7XG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENvbnZlcnRETVNUb0REKGRlZ3JlZXMsIG1pbnV0ZXMsIHNlY29uZHMsIGRpcmVjdGlvbikge1xuICAgIHZhciBkZCA9IGRlZ3JlZXMgKyBtaW51dGVzIC8gNjAgKyBzZWNvbmRzIC8gKDYwICogNjApO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcIlNcIiB8fCBkaXJlY3Rpb24gPT0gXCJXXCIpIHtcbiAgICAgIGRkID0gZGQgKiAtMTtcbiAgICB9IC8vIERvbid0IGRvIGFueXRoaW5nIGZvciBOIG9yIEVcbiAgICByZXR1cm4gZGQ7XG4gIH1cbiAgY29uc3Qgbm9ydGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vcnRoXCIpO1xuICBjb25zdCBzb3V0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic291dGhcIik7XG4gIGNvbnN0IGRlZ3JlZXNMYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZ3JlZXMtbGF0XCIpO1xuICBjb25zdCBtaW51dGVzTGF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW51dGVzLWxhdFwiKTtcbiAgY29uc3Qgc2Vjb25kc0xhdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vjb25kcy1sYXRcIik7XG5cbiAgY29uc3QgZGVncmVlc0xvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVncmVlcy1sb25cIik7XG4gIGNvbnN0IG1pbnV0ZXNMb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbnV0ZXMtbG9uXCIpO1xuICBjb25zdCBzZWNvbmRzTG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmRzLWxvblwiKTtcbiAgY29uc3QgZWFzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWFzdFwiKTtcbiAgY29uc3Qgd2VzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VzdFwiKTtcbiAgY29uc3Qgb3V0cHV0SW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0LWZpZWxkLWlucHV0XCIpO1xuICBjb25zdCBkbXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRtc0J0blwiKTtcbiAgY29uc3QgZG1zRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG1zXCIpO1xuXG4gIGNvbnN0IGxhdGxvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhdGxvbkZvcm1cIik7XG5cbiAgZnVuY3Rpb24gRER0b0RNUyhsYXQsIGxvbikge1xuICAgIC8vXG5cbiAgICBsZXQgbGF0aXR1ZGUgPSBNYXRoLmFicyhsYXQpO1xuICAgIGxldCBsb25naXR1ZGUgPSBNYXRoLmFicyhsb24pO1xuICAgIGxldCBkTGF0ID0gTWF0aC5mbG9vcihsYXRpdHVkZSk7XG4gICAgbGV0IG1MYXQgPSBNYXRoLmZsb29yKChsYXRpdHVkZSAtIGRMYXQpICogNjApO1xuXG4gICAgc0xhdCA9IE1hdGgucm91bmQoKGxhdGl0dWRlIC0gZExhdCAtIG1MYXQgLyA2MCkgKiAxZTMgKiAzNjAwKSAvIDFlMztcbiAgICBkTG9uID0gTWF0aC5mbG9vcihsb25naXR1ZGUpO1xuICAgIG1Mb24gPSBNYXRoLmZsb29yKChsb25naXR1ZGUgLSBkTG9uKSAqIDYwKTtcbiAgICBzTG9uID0gTWF0aC5mbG9vcigobG9uZ2l0dWRlIC0gZExvbiAtIG1Mb24gLyA2MCkgKiAxZTMgKiAzNjAwKSAvIDFlMztcbiAgICBsZXQgZGVncmVlc0xhdGl0dWRlID0gZExhdDtcbiAgICBsZXQgbWludXRlc0xhdGl0dWRlID0gbUxhdDtcbiAgICBsZXQgc2Vjb25kc0xhdGl0dWRlID0gc0xhdDtcbiAgICBsZXQgZGVncmVlc0xvbmdpdHVkZSA9IGRMb247XG4gICAgbGV0IG1pbnV0ZXNMb25naXR1ZGUgPSBtTG9uO1xuICAgIGxldCBzZWNvbmRzTG9uZ2l0dWRlID0gc0xvbjtcblxuICAgIGxldCBsYXRSZXN1bHQgPSBgJHtkZWdyZWVzTGF0aXR1ZGV9wrAgJHttaW51dGVzTGF0aXR1ZGV9JyAke3NlY29uZHNMYXRpdHVkZX0nJ2A7XG5cbiAgICBsZXQgbG9uUmVzdWx0ID0gYCR7ZGVncmVlc0xvbmdpdHVkZX3CsCAke21pbnV0ZXNMb25naXR1ZGV9JyAke3NlY29uZHNMb25naXR1ZGV9JydgO1xuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICBsYXQ6IHtcbiAgICAgICAgZGVncmVlczogZGVncmVlc0xhdGl0dWRlLFxuICAgICAgICBtaW51dGVzOiBtaW51dGVzTGF0aXR1ZGUsXG4gICAgICAgIHNlY29uZHM6IHNlY29uZHNMYXRpdHVkZVxuICAgICAgfSxcbiAgICAgIGxvbjoge1xuICAgICAgICBkZWdyZWVzOiBkZWdyZWVzTG9uZ2l0dWRlLFxuICAgICAgICBtaW51dGVzOiBtaW51dGVzTG9uZ2l0dWRlLFxuICAgICAgICBzZWNvbmRzOiBzZWNvbmRzTG9uZ2l0dWRlXG4gICAgICB9LFxuICAgICAgcG9wdXBNZXNzYWdlOiB7IGxhdDogbGF0UmVzdWx0LCBsb246IGxvblJlc3VsdCB9XG4gICAgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrKGVsbSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsbSkuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBjb25zdCBjb252ZXJ0TG9jYXRpb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb252ZXJ0TG9jYXRpb25EYXRhXCIpO1xuICBjb25zdCBsYXRJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYXRJbnB1dEZpZWxkXCIpO1xuICBjb25zdCBsb25JbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb25JbnB1dEZpZWxkXCIpO1xuICBjb25zdCBsYXRsb25HZW9jb2RlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGF0bG9uR2VvY29kZXJCdG5cIik7XG5cbiAgY29uc3QgQ29vcmRzQXBwID0gZnVuY3Rpb24gX0Nvb3Jkc0FwcCgpIHtcbiAgICByZXR1cm4gYFxuICAgICA8aDE+T3JpZ2luIFN0YXRlID0gWyR7Q29vcmRzQXBwLnN0YXRlLm9yaWdpbn1dIDwvaDE+IDwvYnI+XG4gICAgIDxoMT5EZXN0aW5hdGlvbiBTdGF0ZSA9IFske0Nvb3Jkc0FwcC5zdGF0ZS5kZXN0aW5hdGlvbn1dIDwvaDE+XG4gICAgIDxoMT5Vc2VyIExvY2F0aW9uID0gWyR7Q29vcmRzQXBwLnN0YXRlLnVzZXJMb2NhdGlvbn1dIDwvaDE+XG4gICAgIDxoMT50cmFja2luZ1VzZXIgPSAgJHtDb29yZHNBcHAuc3RhdGUudHJhY2tpbmdVc2VyfTwvaDE+XG4gICAgYDtcbiAgfTtcblxuICBjb25zdCBteWhhbmRsZXIgPSB7XG4gICAgc2V0OiBmdW5jdGlvbihvYmosIHByb3AsIHZhbHVlKSB7XG4gICAgICBvYmpbcHJvcF0gPSB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgQ29vcmRzQXBwLnN0YXRlID0gbmV3IFByb3h5KFxuICAgIHsgb3JpZ2luOiBbXSwgZGVzdGluYXRpb246IFtdLCB1c2VyTG9jYXRpb246IFtdLCB0cmFja2luZ1VzZXI6IGZhbHNlIH0sXG4gICAgbXloYW5kbGVyXG4gICk7XG5cbiAgTC5tYXBib3guYWNjZXNzVG9rZW4gPVxuICAgIFwicGsuZXlKMUlqb2liRzluWVc0MU1qQXhJaXdpWVNJNkltTnJjVFF5YlRGb1p6RTBhRFF5ZVhNMWFHTm1ZblIxTW5vaWZRLjRrUldOZkVIX1lhb19tbWRncmdqUEFcIjtcbiAgY29uc3QgbWFwID0gTC5tYXBib3gubWFwKFwibWFwXCIpLnNldFZpZXcoWzM3LjksIC03N10sIDYpO1xuXG4gIEwubWFwYm94LnN0eWxlTGF5ZXIoXCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExXCIpLmFkZFRvKG1hcCk7IC8vIGFkZCB5b3VyIHRpbGVzIHRvIHRoZSBtYXBcblxuICAvLyBMLm1hcmtlciBpcyBhIGxvdy1sZXZlbCBtYXJrZXIgY29uc3RydWN0b3IgaW4gTGVhZmxldC5cbiAgY29uc3QgbWFya2VyID0gTC5tYXJrZXIoWzAsIDBdLCB7XG4gICAgaWNvbjogTC5tYXBib3gubWFya2VyLmljb24oe1xuICAgICAgXCJtYXJrZXItc2l6ZVwiOiBcImxhcmdlXCIsXG5cbiAgICAgIFwibWFya2VyLWNvbG9yXCI6IFwiYmx1ZVwiXG4gICAgfSlcbiAgfSkuYWRkVG8obWFwKTtcbiAgdmFyIGxvY2F0aW9uQ29udHJvbCA9IEwuY29udHJvbFxuICAgIC5sb2NhdGUoe1xuICAgICAgY2lyY2xlU3R5bGU6IHsgb3BhY2l0eTogMCB9LFxuICAgICAgZm9sbG93Q2lyY2xlU3R5bGU6IHsgb3BhY2l0eTogMCB9LFxuICAgICAgZHJhd0NpcmNsZTogZmFsc2UsXG4gICAgICBmb2xsb3c6IGZhbHNlLFxuICAgICAgaWNvbjogXCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIiwgLy8gZm9sbG93IHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAgICAgIHNldFZpZXc6IGZhbHNlLFxuICAgICAgcmVtYWluQWN0aXZlOiBmYWxzZVxuICAgIH0pXG4gICAgLmFkZFRvKG1hcCk7XG4gIGFzeW5jIGZ1bmN0aW9uIGZpbmRBZGRyZXNzKGxhdCwgbG9uKSB7XG4gICAgY29uc3QgcXVlcnkgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5tYXBib3guY29tL2dlb2NvZGluZy92NS9tYXBib3gucGxhY2VzLyR7bG9ufSwke2xhdH0uanNvbj9hY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2liRzluWVc0MU1qQXhJaXdpWVNJNkltTnJjVFF5Y25saE1EQmxiMmt5ZFhCd1pIb3lPR05zWTNFaWZRLkU4TjRsUHk2dGlJMHhZM25vcjNNVGdgLFxuICAgICAgeyBtZXRob2Q6IFwiR0VUXCIgfVxuICAgICk7XG4gICAgaWYgKHF1ZXJ5LnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBxdWVyeS5qc29uKCk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuICBtYXAub24oXCJsb2NhdGlvbmZvdW5kXCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgbGF0ID0gZS5sYXRpdHVkZTtcbiAgICBsZXQgbG9uID0gZS5sb25naXR1ZGU7XG4gICAgdmFyIHJhZGl1cyA9IGUuYWNjdXJhY3k7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJMYXRMb25cIiwgYCR7bGF0fSwgJHtsb259YCk7XG5cbiAgICBsb2NhdGlvbkNvbnRyb2wuc3RvcCgpO1xuICAgICQoXCIjbGF0SW5wdXRGaWVsZFwiKS52YWwobGF0KTtcbiAgICAkKFwiI2xvbklucHV0RmllbGRcIikudmFsKGxvbik7XG5cbiAgICBub3J0aC5jaGVja2VkID0gbGF0ID49IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgc291dGguY2hlY2sgPSBsYXQgPCAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGVhc3QuY2hlY2tlZCA9IGxvbiA+PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHdlc3QuY2hlY2tlZCA9IGxvbiA8IDAgPyB0cnVlIDogZmFsc2U7XG5cbiAgICBjb25zdCBkbXNDYWxjdWxhdGVkID0gRER0b0RNUyhsYXQsIGxvbik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWdyZWVzLWxhdFwiKS52YWx1ZSA9IGRtc0NhbGN1bGF0ZWQubGF0LmRlZ3JlZXM7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW51dGVzLWxhdFwiKS52YWx1ZSA9IGRtc0NhbGN1bGF0ZWQubGF0Lm1pbnV0ZXM7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmRzLWxhdFwiKS52YWx1ZSA9IGRtc0NhbGN1bGF0ZWQubGF0LnNlY29uZHM7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWdyZWVzLWxvblwiKS52YWx1ZSA9IGRtc0NhbGN1bGF0ZWQubG9uLmRlZ3JlZXM7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW51dGVzLWxvblwiKS52YWx1ZSA9IGRtc0NhbGN1bGF0ZWQubG9uLm1pbnV0ZXM7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmRzLWxvblwiKS52YWx1ZSA9IGRtc0NhbGN1bGF0ZWQubG9uLnNlY29uZHM7XG5cbiAgICBtYXAuZml0Qm91bmRzKFtbbGF0LCBsb25dXSwge1xuICAgICAgcGFkZGluZzogWzEwMCwgMTAwXVxuICAgIH0pO1xuICAgIHZhciBwb3B1cCA9IEwucG9wdXAoeyBhdXRvUGFuOiB0cnVlLCBrZWVwSW5WaWV3OiB0cnVlIH0pLnNldENvbnRlbnQoYFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG5cbiAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlxuXG5cblxuICAgICAgICAgIDxzcGFuPjxzdHJvbmc+IExhdGl0dWRlOiA8L3N0cm9uZz4gPHNwYW4gY2xhc3M9XCJsYXRcIj4ke2xhdH0gPC9zcGFuPjwvc3Bhbj4gPHNwYW4+IDxzdHJvbmc+XG4gICAgICAgICAgTG9uZ2l0dWRlOiA8c3BhbiBjbGFzcz1cImxvblwiPiR7bG9ufTwvc3Bhbj48L3N0cm9uZz4gPC9zcGFuPlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSBcIm10LTFcIj5cbiAgICAgICAgICAke2Rtc0NhbGN1bGF0ZWQucG9wdXBNZXNzYWdlLmxhdH0gJHtkbXNDYWxjdWxhdGVkLnBvcHVwTWVzc2FnZS5sb259XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiIG10LTIgYWx0aXR1ZGVcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIGlkPVwiZ2V0QWx0aXR1ZGVcIiB0eXBlPVwiYnV0dG9uIFwiPlxuICAgICAgICAgICAgICBHZXQgQWx0aXR1ZGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cblxuICBgKTtcbiAgICBtYXJrZXJcbiAgICAgIC5zZXRMYXRMbmcoW2xhdCwgbG9uXSlcbiAgICAgIC5iaW5kUG9wdXAocG9wdXApXG4gICAgICAub3BlblBvcHVwKCk7XG4gIH0pO1xuICBtYXAub24oXCJsb2NhdGlvbmVycm9yXCIsIGZ1bmN0aW9uKCkge1xuICAgIGFsZXJ0KFwiUG9zaXRpb24gY291bGQgbm90IGJlIGZvdW5kXCIpO1xuICB9KTtcbiAgY29uc3QgY29vcmRpbmF0ZXNHZW9jb2RlciA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgLy8gTWF0Y2ggYW55dGhpbmcgd2hpY2ggbG9va3MgbGlrZVxuICAgIC8vIGRlY2ltYWwgZGVncmVlcyBjb29yZGluYXRlIHBhaXIuXG4gICAgY29uc3QgbWF0Y2hlcyA9IHF1ZXJ5Lm1hdGNoKFxuICAgICAgL15bIF0qKD86TGF0OiApPygtP1xcZCtcXC4/XFxkKilbLCBdKyg/OkxuZzogKT8oLT9cXGQrXFwuP1xcZCopWyBdKiQvaVxuICAgICk7XG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb29yZGluYXRlRmVhdHVyZShsbmcsIGxhdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2VudGVyOiBbbG5nLCBsYXRdLFxuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICBjb29yZGluYXRlczogW2xuZywgbGF0XVxuICAgICAgICB9LFxuICAgICAgICBwbGFjZV9uYW1lOiBcIkxhdDogXCIgKyBsYXQgKyBcIiBMbmc6IFwiICsgbG5nLFxuICAgICAgICBwbGFjZV90eXBlOiBbXCJjb29yZGluYXRlXCJdLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICAgICAgdHlwZTogXCJGZWF0dXJlXCJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgY29vcmQxID0gTnVtYmVyKG1hdGNoZXNbMV0pO1xuICAgIGNvbnN0IGNvb3JkMiA9IE51bWJlcihtYXRjaGVzWzJdKTtcbiAgICBjb25zdCBnZW9jb2RlcyA9IFtdO1xuXG4gICAgaWYgKGNvb3JkMSA8IC05MCB8fCBjb29yZDEgPiA5MCkge1xuICAgICAgLy8gbXVzdCBiZSBsbmcsIGxhdFxuICAgICAgZ2VvY29kZXMucHVzaChjb29yZGluYXRlRmVhdHVyZShjb29yZDEsIGNvb3JkMikpO1xuICAgIH1cblxuICAgIGlmIChjb29yZDIgPCAtOTAgfHwgY29vcmQyID4gOTApIHtcbiAgICAgIC8vIG11c3QgYmUgbGF0LCBsbmdcbiAgICAgIGdlb2NvZGVzLnB1c2goY29vcmRpbmF0ZUZlYXR1cmUoY29vcmQyLCBjb29yZDEpKTtcbiAgICB9XG5cbiAgICBpZiAoZ2VvY29kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBlbHNlIGNvdWxkIGJlIGVpdGhlciBsbmcsIGxhdCBvciBsYXQsIGxuZ1xuICAgICAgZ2VvY29kZXMucHVzaChjb29yZGluYXRlRmVhdHVyZShjb29yZDEsIGNvb3JkMikpO1xuICAgICAgZ2VvY29kZXMucHVzaChjb29yZGluYXRlRmVhdHVyZShjb29yZDIsIGNvb3JkMSkpO1xuICAgIH1cblxuICAgIHJldHVybiBnZW9jb2RlcztcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRFbGV2YXRpb24obG9uLCBsYXQpIHtcbiAgICAvLyBDb25zdHJ1Y3QgdGhlIEFQSSByZXF1ZXN0XG4gICAgY29uc3QgcXVlcnkgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5tYXBib3guY29tL3Y0L21hcGJveC5tYXBib3gtdGVycmFpbi12Mi90aWxlcXVlcnkvJHtsb259LCR7bGF0fS5qc29uP2xheWVycz1jb250b3VyJmxpbWl0PTUwJmFjY2Vzc190b2tlbj1way5leUoxSWpvaWJHOW5ZVzQxTWpBeElpd2lZU0k2SW1OcmNUUXljbmxoTURCbGIya3lkWEJ3WkhveU9HTnNZM0VpZlEuRThONGxQeTZ0aUkweFkzbm9yM01UZ2AsXG4gICAgICB7IG1ldGhvZDogXCJHRVRcIiB9XG4gICAgKTtcbiAgICBpZiAocXVlcnkuc3RhdHVzICE9PSAyMDApIHJldHVybjtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcXVlcnkuanNvbigpO1xuXG4gICAgLy8gRGlzcGxheSB0aGUgbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSB2YWx1ZXNcblxuICAgIC8vIEdldCBhbGwgdGhlIHJldHVybmVkIGZlYXR1cmVzXG4gICAgY29uc3QgYWxsRmVhdHVyZXMgPSBkYXRhLmZlYXR1cmVzO1xuICAgIC8vIEZvciBlYWNoIHJldHVybmVkIGZlYXR1cmUsIGFkZCBlbGV2YXRpb24gZGF0YSB0byB0aGUgZWxldmF0aW9ucyBhcnJheVxuICAgIGNvbnN0IGVsZXZhdGlvbnMgPSBhbGxGZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLnByb3BlcnRpZXMuZWxlKTtcbiAgICAvLyBJbiB0aGUgZWxldmF0aW9ucyBhcnJheSwgZmluZCB0aGUgbGFyZ2VzdCB2YWx1ZVxuICAgIGNvbnN0IGhpZ2hlc3RFbGV2YXRpb24gPSBNYXRoLm1heCguLi5lbGV2YXRpb25zKTtcbiAgICAkKFwiLmFsdGl0dWRlXCIpLmh0bWwoYDxkaXY+ICR7aGlnaGVzdEVsZXZhdGlvbn0gbWV0ZXJzIDwvZGl2PmApO1xuICB9XG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIjZ2V0QWx0aXR1ZGVcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgbGF0ID0gJChcIi5sYXRcIikuaHRtbCgpO1xuICAgIGxldCBsb24gPSAkKFwiLmxvblwiKS5odG1sKCk7XG4gICAgZ2V0RWxldmF0aW9uKGxvbiwgbGF0KTtcbiAgfSk7XG5cbiAgLy8gQ2xlYXIgcmVzdWx0cyBjb250YWluZXIgd2hlbiBzZWFyY2ggaXMgY2xlYXJlZC5cblxuICBmdW5jdGlvbiBmb3JtYXQodGltZSkge1xuICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzXG4gICAgdmFyIGhycyA9IH5+KHRpbWUgLyAzNjAwKTtcbiAgICB2YXIgbWlucyA9IH5+KCh0aW1lICUgMzYwMCkgLyA2MCk7XG5cbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgaG91cnM6IGhycyxcbiAgICAgIG1pbnV0ZXM6IG1pbnNcbiAgICB9O1xuICAgIC8vIE91dHB1dCBsaWtlIFwiMTowMVwiIG9yIFwiNDowMzo1OVwiIG9yIFwiMTIzOjAzOjU5XCJcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gICQoXCIjbGF0bG9uRm9ybVwiKS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IGxhdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYXRJbnB1dEZpZWxkXCIpO1xuICAgIGxldCBsb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9uSW5wdXRGaWVsZFwiKTtcbiAgICBjb25zdCBsYXQgPSBlLmN1cnJlbnRUYXJnZXRbMF0udmFsdWU7XG4gICAgY29uc3QgbG9uID0gZS5jdXJyZW50VGFyZ2V0WzFdLnZhbHVlO1xuXG4gICAgY29uc3QgcGFyc2VkTGF0ID0gcGFyc2VGbG9hdChsYXQpO1xuICAgIGNvbnN0IHBhcnNlZExvbiA9IHBhcnNlRmxvYXQobG9uKTtcbiAgICBub3J0aC5jaGVja2VkID0gbGF0ID49IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgc291dGguY2hlY2sgPSBsYXQgPCAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGVhc3QuY2hlY2tlZCA9IGxvbiA+PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHdlc3QuY2hlY2tlZCA9IGxvbiA8IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgZG1zQ2FsY3VsYXRlZCA9IEREdG9ETVMobGF0LCBsb24pO1xuXG4gICAgbWFwLmZpdEJvdW5kcyhbW2xhdCwgbG9uXV0sIHtcbiAgICAgIHBhZGRpbmc6IFsxMDAsIDEwMF1cbiAgICB9KTtcblxuICAgICQoXCIjZGVncmVlcy1sYXRcIikudmFsKGRtc0NhbGN1bGF0ZWQubGF0LmRlZ3JlZXMpO1xuICAgICQoXCIjbWludXRlcy1sYXRcIikudmFsKGRtc0NhbGN1bGF0ZWQubGF0Lm1pbnV0ZXMpO1xuICAgICQoXCIjc2Vjb25kcy1sYXRcIikudmFsKGRtc0NhbGN1bGF0ZWQubGF0LnNlY29uZHMpO1xuICAgICQoXCIjZGVncmVlcy1sb25cIikudmFsKGRtc0NhbGN1bGF0ZWQubG9uLmRlZ3JlZXMpO1xuICAgICQoXCIjbWludXRlcy1sb25cIikudmFsKGRtc0NhbGN1bGF0ZWQubG9uLm1pbnV0ZXMpO1xuICAgICQoXCIjc2Vjb25kcy1sb25cIikudmFsKGRtc0NhbGN1bGF0ZWQubG9uLnNlY29uZHMpO1xuICAgIC8vICAke2Rtc0NhbGN1bGF0ZWQubGF0fSAke2Rtc0NhbGN1bGF0ZWQubG9ufVxuICAgIG1hcmtlclxuICAgICAgLnNldExhdExuZyhbbGF0LCBsb25dKVxuICAgICAgLmJpbmRQb3B1cChcbiAgICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XG5cblxuXG4gICAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+IExhdGl0dWRlOiA8L3N0cm9uZz4gPHNwYW4gY2xhc3M9XCJsYXRcIj4ke2xhdH0gPC9zcGFuPjwvc3Bhbj4gPHNwYW4+IDxzdHJvbmc+XG4gICAgICAgICAgICAgIExvbmdpdHVkZTogPHNwYW4gY2xhc3M9XCJsb25cIj4ke2xvbn08L3NwYW4+PC9zdHJvbmc+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSBcIm10LTFcIj5cbiAgICAgICAgICAgICAgJHtkbXNDYWxjdWxhdGVkLnBvcHVwTWVzc2FnZS5sYXR9ICR7ZG1zQ2FsY3VsYXRlZC5wb3B1cE1lc3NhZ2UubG9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiBtdC0yIGFsdGl0dWRlXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgaWQ9XCJnZXRBbHRpdHVkZVwiIHR5cGU9XCJidXR0b24gXCI+XG4gICAgICAgICAgICAgICAgICBHZXQgQWx0aXR1ZGVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuXG5cbiAgICAgIGBcbiAgICAgIClcbiAgICAgIC5vcGVuUG9wdXAoKTtcbiAgfSk7XG4gIGNvbnN0IHRpdGxlID0gJChcInRpdGxlXCIpLmh0bWwoKTtcblxuICBjb25zdCBwYWdlVGl0bGUgPSB0aXRsZS5zbGljZSgxMSk7XG4gIGxldCBib29rbWFya0NvbnRyb2wgPSBuZXcgTC5Db250cm9sLkJvb2ttYXJrcyh7XG4gICAgbmFtZTogcGFnZVRpdGxlXG4gIH0pLmFkZFRvKG1hcCk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFIQTtBQURBO0FBT0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/latlonToDMS.js\n");

/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** multi ./src/js/latlonToDMS.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/latlonToDMS.js */"./src/js/latlonToDMS.js");


/***/ })

/******/ });