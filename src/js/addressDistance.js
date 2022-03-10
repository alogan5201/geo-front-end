/*jshint esversion: 8 */
import HaversineGeolocation from "haversine-geolocation";
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [0, 0],
      },
      properties: {
        "marker-color": "blue",
        "marker-size": "large",
        "marker-symbol": "1",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [0, 0],
      },
      properties: {
        title: "Mapbox SF",
        description: "155 9th St, San Francisco",
        "marker-color": "#fc4353",
        "marker-size": "large",
        "marker-symbol": "2",
      },
    },
  ],
};
var loader = document.getElementById("loader");
const map = L.mapbox.map("map").setView([37.9, -77], 6);
L.mapbox.accessToken =
  "pk.eyJ1IjoibG9nYW41MjAxIiwiYSI6ImNrcTQybTFoZzE0aDQyeXM1aGNmYnR1MnoifQ.4kRWNfEH_Yao_mmdgrgjPA";

const layer = L.mapbox
  .styleLayer("mapbox://styles/mapbox/streets-v11")
  .addTo(map)
  .on("load", finishedLoading); // add your tiles to the map

startLoading();
function startLoading() {
  loader.className = "";
}
function finishedLoading() {
  // first, toggle the class 'done', which makes the loading screen
  // fade out
  loader.className = "done";
  setTimeout(function () {
    // then, after a half-second, add the class 'hide', which hides
    // it completely and ensures that the user can interact with the
    // map again.
    loader.className = "d-none";
  }, 500);
}
// L.marker is a low-level marker constructor in Leaflet.

var featureLayer = L.mapbox.featureLayer().addTo(map);
map.on("layeradd", function (e) {
  if ($("#loader").hasClass("loading")) {
    $("#loader").removeClass("loading").addClass("d-none");
  }
});
var locationControl = L.control
  .locate({
    circleStyle: { opacity: 0 },
    followCircleStyle: { opacity: 0 },
    drawCircle: false,
    follow: false,
    icon: "fas fa-map-marker-alt",

    setView: false,
    remainActive: false,
  })
  .addTo(map);
const LocationState = function _LocationState() {
  let data = {
    origin: {
      lat: LocationState.state.lat,
    },
    destination: {
      lon: LocationState.state.lon,
    },
  };
  return data;
};
const myhandler = {
  set: function (obj, prop, value) {
    obj[prop] = value;
  },
};

LocationState.state = new Proxy({ lat: null, lon: null }, myhandler);
$(document).on("click", ".leaflet-bar-part.leaflet-bar-part-single", function (
  e
) {
  e.preventDefault();
  alert("clicked");
});

map.on("locationfound", function (e) {
  map.fitBounds(e.bounds);

  let lat = e.latlng.lat;

  let lon = e.latlng.lng;

  setOrigin(lat, lon);
  geojson.features[0].geometry.coordinates = [lon, lat];

  featureLayer.setGeoJSON(geojson);

  var inputs = document.getElementById("getDistanceForm").elements;

  if (inputs[0].nodeName === "INPUT" && inputs[0].type === "number") {
    // Update text input
    inputs[0].value = lat;
    inputs[1].value = lon;
  }

  setTimeout(() => {
    locationControl.stop();
  }, 500);
});

async function setOrigin(lat, lon) {
  const query = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=pk.eyJ1IjoibG9nYW41MjAxIiwiYSI6ImNsMGh4MjRxajBjeGYzam95dWFqcmh3N2MifQ.QEKn6_4BpAy6ekkJoIWPIA`,
    { method: "GET" }
  );
  if (query.status !== 200) {
    return;
  }
  const data = await query.json();
  if (data.features.length > 0) {
    $("#addressInputFieldOrigin").val(data.features[0].place_name);

    $("#lonInputField").focus();
  } else if (data.features.length == 0) {
    alert("No Address found from your location");
  }
}
const title = $("title").html();

const pageTitle = title.slice(11);
console.log(pageTitle);

let bookmarkControl = new L.Control.Bookmarks({
  name: pageTitle,
}).addTo(map);

function inputFocus(x) {
  if ($("#secondOutput").hasClass("second")) {
    $("#secondOutput").removeClass("second").addClass("fadeOut");
    $("#firstOutput").removeClass("first").addClass("fadeOut");
    setTimeout(() => {
      $("#secondOutput").addClass("d-none");
      $("#firstOutput").addClass("d-none");
    }, 2000);
  }

  //
}

window.addEventListener("DOMContentLoaded", () => {
  const north = document.getElementById("north");
  const south = document.getElementById("south");
  const degreesLat = document.getElementById("degrees-lat");
  const minutesLat = document.getElementById("minutes-lat");
  const secondsLat = document.getElementById("seconds-lat");

  const degreesLon = document.getElementById("degrees-lon");
  const minutesLon = document.getElementById("minutes-lon");
  const secondsLon = document.getElementById("seconds-lon");
  const east = document.getElementById("east");
  const west = document.getElementById("west");
  const outputInputField = document.getElementById("output-field-input");
  const dmsBtn = document.getElementById("dmsBtn");
  const dmsForm = document.getElementById("dms");

  const latlonForm = document.getElementById("latlonForm");

  function DDtoDMS(lat, lon) {
    //

    let latitude = Math.abs(lat);
    let longitude = Math.abs(lon);
    let dLat = Math.floor(latitude);
    let mLat = Math.floor((latitude - dLat) * 60);

    sLat = Math.round((latitude - dLat - mLat / 60) * 1e3 * 3600) / 1e3;
    dLon = Math.floor(longitude);
    mLon = Math.floor((longitude - dLon) * 60);
    sLon = Math.floor((longitude - dLon - mLon / 60) * 1e3 * 3600) / 1e3;
    let degreesLatitude = dLat;
    let minutesLatitude = mLat;
    let secondsLatitude = sLat;
    let degreesLongitude = dLon;
    let minutesLongitude = mLon;
    let secondsLongitude = sLon;

    let latResult = `${degreesLatitude}° ${minutesLatitude}' ${secondsLatitude}''`;

    let lonResult = `${degreesLongitude}° ${minutesLongitude}' ${secondsLongitude}''`;
    let result = {
      lat: {
        degrees: degreesLatitude,
        minutes: minutesLatitude,
        seconds: secondsLatitude,
      },
      lon: {
        degrees: degreesLongitude,
        minutes: minutesLongitude,
        seconds: secondsLongitude,
      },
      popupMessage: { lat: latResult, lon: lonResult },
    };
    return result;
  }
  function check(elm) {
    document.getElementById(elm).checked = true;
  }

  const convertLocationData = document.getElementById("convertLocationData");
  const latInputField = document.getElementById("latInputField");
  const lonInputField = document.getElementById("lonInputField");
  const latlonGeocoderBtn = document.getElementById("latlonGeocoderBtn");

  const App = function _App() {
    return `
   <h1>Global State = [${App.state.count}] </h1>
  `;
  };

  const handler = {
    set: function (obj, prop, value) {
      obj[prop] = value;
    },
  };

  App.state = new Proxy({ count: 0 }, handler);

  // Initial Loading of the App

  const CoordsApp = function _CoordsApp() {
    return `
   <h1>Origin State = [${CoordsApp.state.origin}] </h1> </br>
   <h1>Destination State = [${CoordsApp.state.destination}] </h1>
   <h1>User Location = [${CoordsApp.state.userLocation}] </h1>
   <h1>trackingUser =  ${CoordsApp.state.trackingUser}</h1>
  `;
  };

  const myhandler = {
    set: function (obj, prop, value) {
      obj[prop] = value;
    },
  };

  CoordsApp.state = new Proxy(
    { origin: [], destination: [], userLocation: [] },
    myhandler
  );

  function addRoute() {
    App.state.count++;

    const origin = CoordsApp.state.origin;

    const destination = CoordsApp.state.destination;

    //map.flyTo([centerLat, centerLon])
    /* map.panInsideBounds([
         [origin[1] , origin[0] ], // southwestern corner of the bounds
         [destination[1] , destination[0], {padding: [50,50]} ] // northeastern corner of the bounds
       ]);
       //

      geojson.features[0].geometry.coordinates = [origin[0], origin[1]];
      geojson.features[1].geometry.coordinates = [destination[0], destination[1]]

  */
    //
    let latD = destination[1];
    let lonD = destination[0];
    let latO = origin[1];
    let lonO = origin[0];
    geojson.features[0].geometry.coordinates = [lonO, latO];
    geojson.features[1].geometry.coordinates = [lonD, latD];
    //
    featureLayer.setGeoJSON(geojson);

    //featureLayer.setGeoJSON(geojson).addTo(map);

    /*
      map.fitBounds(featureLayer.getBounds(), {
  padding: [50,50]

      });
      map.zoomOut()
  */

    let latOrigin = origin[1];
    let lonOrigin = origin[0];
    let latDest = destination[1];
    let lonDest = destination[0];
    //
    map.fitBounds(
      [
        [latOrigin, lonOrigin],
        [latDest, lonDest],
      ],
      { padding: [50, 50] }
    );
  }

  function addNewRoute() {
    const origin = CoordsApp.state.origin;

    const destination = CoordsApp.state.destination;
    let latD = destination[1];
    let lonD = destination[0];
    let latO = origin[1];
    let lonO = origin[0];
    geojson.features[0].geometry.coordinates = [lonO, latO];
    geojson.features[1].geometry.coordinates = [lonD, latD];

    featureLayer.setGeoJSON(geojson);
    // A simple line from origin to destination.

    // A single point that animates along the route.
    // Coordinates are initially set to origin.

    // Calculate the distance in kilometers between route start/end point.

    // animate(counter);
    featureLayer.setGeoJSON(geojson);

    let latOrigin = origin[1];
    let lonOrigin = origin[0];
    let latDest = destination[1];
    let lonDest = destination[0];
    //
    map.fitBounds(
      [
        [latOrigin, lonOrigin],
        [latDest, lonDest],
      ],
      {
        padding: [50, 50],
      }
    );
  }

  function format(time) {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);

    let result = {
      hours: hrs,
      minutes: mins,
    };
    // Output like "1:01" or "4:03:59" or "123:03:59"
    return result;
  }
  const getAddress = async (lat, lon) => {
    const query = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=pk.eyJ1IjoibG9nYW41MjAxIiwiYSI6ImNrcTQycnlhMDBlb2kydXBwZHoyOGNsY3EifQ.E8N4lPy6tiI0xY3nor3MTg`,
      { method: "GET" }
    );
    if (query.status !== 200) {
      return;
    }
    const data = await query.json();

    return data;
  };
  function callMatrix(first, second) {
    fetch(
      `https://api.mapbox.com/directions-matrix/v1/mapbox/driving/${first};${second}?&access_token=pk.eyJ1IjoibG9nYW41MjAxIiwiYSI6ImNrcTQycnlhMDBlb2kydXBwZHoyOGNsY3EifQ.E8N4lPy6tiI0xY3nor3MTg`
    )
      .then((response) => response.json())
      .then((json) => {
        const durations = json.durations[0];
        const travelTime = durations[1];
        const result = format(travelTime);
        // //

        var alertPlaceholder = document.getElementById("liveAlertPlaceholder");
        var alertTrigger = document.getElementById("liveAlertBtn");

        function postLog(message) {
          var wrapper = document.createElement("div");
          wrapper.innerHTML = `
    <div class="alert alert-secondary d-flex align-items-center justify-content-between" role="alert">
     <div class="alertMessage">
       ${message}
     </div>


   </div>`;

          alertPlaceholder.append(wrapper);
        }
        if (alertPlaceholder.childElementCount == 0) {
          postLog(`${result.hours} hour(s) and ${result.minutes} minutes`);
        } else if (alertPlaceholder.childElementCount == 1) {
          postLog(`${result.hours} hour(s) and ${result.minutes} minutes`);
        } else if (alertPlaceholder.childElementCount == 2) {
          $("#liveAlertPlaceholder").empty();
          setTimeout(() => {
            postLog(`${result.hours} hour(s) and ${result.minutes}`);
          }, 200);
        }
      });
  }
  async function convertAddressToCoordinates(address) {
    const query = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibG9nYW41MjAxIiwiYSI6ImNrcTQycnlhMDBlb2kydXBwZHoyOGNsY3EifQ.E8N4lPy6tiI0xY3nor3MTg`,
      { method: "GET" }
    );
    if (query.status !== 200) {
      return;
    }
    const data = await query.json();

    return data;
  }

  $("#getDistanceForm").on("submit", async function (e) {
    e.preventDefault();
    $("#loader").removeClass("d-none").addClass("loading");

    const coordsOrigin = await convertAddressToCoordinates(
      e.currentTarget[0].value
    );

    const coordsDestination = await convertAddressToCoordinates(
      e.currentTarget[1].value
    );

    let latOrigin = coordsOrigin.features[0].center[1];
    let lonOrigin = coordsOrigin.features[0].center[0];

    let latDestination = coordsDestination.features[0].center[1];
    let lonDestination = coordsDestination.features[0].center[0];
    geojson.features[0].geometry.coordinates = [lonOrigin, latOrigin];
    geojson.features[1].geometry.coordinates = [lonDestination, latDestination];
    featureLayer.setGeoJSON(geojson);
    const points = [
      {
        latitude: latOrigin,
        longitude: lonOrigin,
      },
      {
        latitude: latDestination,
        longitude: lonDestination,
      },
    ];

    const distance = HaversineGeolocation.getDistanceBetween(
      points[0],
      points[1],
      "mi"
    );

    $("#distanceInput").val(`${distance} miles`);
    $("#distanceInput").focus();
    map.fitBounds(
      [
        [latOrigin, lonOrigin],
        [latDestination, lonDestination],
      ],
      { padding: [50, 50] }
    );
    //geojson.features[1].geometry.coordinates = [lonD, latD]
    //featureLayer.setGeoJSON(geojson)
    /*
    let origin = [latO, lonD]
    let destination = [latD, lonD]
    const points = [
      {
        latitude: latO,
        longitude: lonO,
      },
      {
        latitude: latD,
        longitude: lonD,
      },
    ]

    const distance = HaversineGeolocation.getDistanceBetween(points[0], points[1], 'mi')


    $('#distanceInput').val(`${distance} miles`)
    $('#distanceInput').focus()
    map.fitBounds(
      [
        [latO, lonO],
        [latD, lonD],
      ],
      {padding: [50, 50]}
    )*/
  });
});
