import React from "react";

function ShareLink({ location }) {
  const url = `https://www.google.com/maps?q=${location.lat},${location.lng}`;

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="share-box">
      <h2>Share Location</h2>
      <input type="text" value={url} readOnly />
      <button className="btn" onClick={copyLink}>
        🔗 Copy Link
      </button>
    </div>
  );
}

export default ShareLink;
