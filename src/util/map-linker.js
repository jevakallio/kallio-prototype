'use strict';

let mapInstance;
let streetViewInstance;
let linked = false;

module.exports = {
  registerMap,
  registerStreetView
};

function registerMap(map) {
  mapInstance = map;
  if(!linked && streetViewInstance) {
    mapInstance.setStreetView(streetViewInstance);
  }
}

function registerStreetView(streetView) {
  streetViewInstance = streetView;
  if(!linked && mapInstance) {
    mapInstance.setStreetView(streetViewInstance);
  }
}
