import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 27.964157,
      lng: -82.452606
    },
    zoom: 11
  };

const apiKey = process.env.REACT_APP_NAILS_APP_API_Key

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '275px', width: '275px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: {apiKey} }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={27.964157}
          lng={-82.452606}
          text="Nailed It!"
        />
      </GoogleMapReact>
    </div>
  );
}



