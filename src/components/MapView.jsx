import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issue in Leaflet
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapView = ({ location }) => {
  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100%" }} // ✅ Responsive, fits parent container
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[location.lat, location.lng]} icon={customIcon}>
        <Popup>You are here 📍</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
