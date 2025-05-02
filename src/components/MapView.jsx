import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { provinceOutageTimes } from "../blackoutData";

const outages = {};
function getProvinceColor(provCode, currentTime) {
  const code = provCode.length < 10 ? `0${provCode}` : provCode;
  // Use a static object to store random outage times per province
  if (!(provCode in outages) && Number(code) in provinceOutageTimes) {
    // Random outage time between 1 and 5 (inclusive/exclusive)
    outages[provCode] = Math.random() * 4 + 1; // Range: [1, 5)
  }
  const outage = outages[provCode];
  return currentTime >= outage
    ? "#222" // Power off (dark)
    : "#ffe066"; // Power on (bright yellow)
}

export default function MapView({ currentTime }) {
  const [geojson, setGeojson] = useState(null);

  useEffect(() => {
    fetch("/spain.json")
      .then((r) => r.json())
      .then(setGeojson);
  }, []);

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[40.5, -3.7]}
        zoom={6}
        style={{
          height: "60vh",
          width: "60vw",
          minWidth: 350,
          maxWidth: "100vw",
          margin: "0 auto",
          display: "block",
        }}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          opacity={0.35}
        />
        {geojson && (
          <GeoJSON
            data={geojson}
            style={(feature) => ({
              fillColor: getProvinceColor(
                feature.properties.cod_prov,
                currentTime,
              ),
              fillOpacity: 0.8,
              color: "#666",
              weight: 0.7,
            })}
            onEachFeature={(feature, layer) => {
              if (feature.properties?.name) {
                layer.bindTooltip(feature.properties.name, {
                  permanent: false,
                  direction: "center",
                  className: "province-label",
                });
              }
            }}
          />
        )}
        {/* Grid overlay could be added here with a separate layer */}
      </MapContainer>
    </div>
  );
}
