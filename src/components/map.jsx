import React from "react";
import GoogleMapReact from 'google-map-react';
import flats from "../../data/flats"; // Import your flats data

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* Map over flats and create a marker for each */}
        {flats.map((flat, index) => (
          <AnyReactComponent
            key={index}
            lat={flat.lat} // Replace with the actual property names from your flats data
            lng={flat.lng}
            text={flat.name} // You can customize the text shown on the marker
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
