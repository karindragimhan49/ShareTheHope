import React, { useEffect, useRef } from "react";

const MapComponent = () => {
  const mapRef = useRef(null); // Reference to the map container

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!document.querySelector(`script[src="https://maps.gomaps.pro/maps/api/js?key=AlzaSys_KDMv-8jFCGTc6fYhJFmzym0qi6waUhS"]`)) {
        const script = document.createElement("script");
        script.src = `https://maps.gomaps.pro/maps/api/js?key=AlzaSys_KDMv-8jFCGTc6fYhJFmzym0qi6waUhS`;
        script.async = true;
        script.defer = true;

        script.onload = initializeMap; // Initialize the map when script loads
        document.body.appendChild(script);
      } else if (window.google) {
        initializeMap(); // If script is already loaded, initialize the map
      }
    };

    const initializeMap = () => {
      if (mapRef.current && window.google) {
        new window.google.maps.Map(mapRef.current, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      }
    };

    loadGoogleMaps(); // Load Google Maps API or initialize map
  }, []);

  // Corrected `style` syntax
  return <div id="map" ref={mapRef} style={{ height: "500px", width: "100%" }}></div>;
};

export default MapComponent;
