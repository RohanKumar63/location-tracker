import React from "react";

function LocationButton({ setLocation }) {
  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <button className="btn" onClick={getLocation}>
      📍 Get My Location
    </button>
  );
}

export default LocationButton;
