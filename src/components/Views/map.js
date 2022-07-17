import * as React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Mapbox() {
  return (
    <Map
      mapboxAccessToken='pk.eyJ1IjoiZGF2aWRtYXRpbXUiLCJhIjoiY2w1b2tpamltMDd4ZDNqcGJ4YzlueGs2eiJ9.TjHTyeCJ-ZuQqep66zk1ew'
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}