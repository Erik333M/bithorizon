import React from 'react';
import "./location.css";

function Location() {
    return (
        <div className="location-page">
            <h2 className="title">Our Location</h2>
            <p className="description">Visit us at our office in Tbilisi, Georgia.</p>
            
            <div className="location-container">
                {/* Map Section */}
                <div className="map-container">
                    <iframe
                        title="Google Maps"
                        width="100%"
                        height="500px"
                        style={{ border: 0, borderRadius: "10px" }}
                        src="https://maps.google.com/maps?q=116%20Akaki%20Tsereteli%20Ave,%20Tbilisi,%20Georgia&output=embed"
                        allowFullScreen
                    ></iframe>
                </div>
                
                {/* Address Section */}
                <div className="address-container">
                    <h3>Our Address</h3>
                    <p>116 Akaki Tsereteli Ave</p>
                    <p>T'bilisi, Грузия</p>
                </div>
            </div>
        </div>
    );
}

export default Location;
