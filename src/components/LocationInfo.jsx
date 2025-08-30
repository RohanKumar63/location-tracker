import React from "react";

function LocationInfo({ location }) {
  return (
    <div className="info-box">
      <h2>Location Info</h2>
      <p><strong>Latitude:</strong> {location.lat}</p>
      <p><strong>Longitude:</strong> {location.lng}</p>
    </div>
  );
}

export default LocationInfo;
