import React, { useState } from "react";
import MapView from "./components/MapView";
import "./styles/App.css";

function App() {
  const [location, setLocation] = useState(null);
  const [shareLink, setShareLink] = useState("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(coords);
        setShareLink(
          `https://www.google.com/maps?q=${coords.lat},${coords.lng}`
        );
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="container">
      <h1 className="title">📍 Live Location Tracker</h1>

      <div className="controls">
        <button onClick={getLocation}>Get My Location</button>
        {shareLink && (
          <button onClick={() => navigator.clipboard.writeText(shareLink)}>
            Copy Share Link
          </button>
        )}
      </div>

      {location && (
        <>
          <div className="map-container">
            <MapView location={location} />
          </div>

          <div className="info-card">
            <p><strong>Latitude:</strong> {location.lat}</p>
            <p><strong>Longitude:</strong> {location.lng}</p>
          </div>

          <div className="share-link">
            <p>
              Share this location: <br />
              <a href={shareLink} target="_blank" rel="noreferrer">
                {shareLink}
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
