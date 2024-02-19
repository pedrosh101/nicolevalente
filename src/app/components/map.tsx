"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import React from "react";

const customIcon = L.divIcon({
  className: "custom-icon",
  html: `              <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  height="3em"
  width="3em"
  className="mt-1"
>
  <path d="M12 11.5A2.5 2.5 0 019.5 9 2.5 2.5 0 0112 6.5 2.5 2.5 0 0114.5 9a2.5 2.5 0 01-2.5 2.5M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" />
</svg>`,
  iconSize: [40, 40],
});

export default function Mapa() {
  return (
    <MapContainer
    center={[-19.527300322312055, -42.62326094418149]}
    zoom={20}
    style={{ height: "400px", width: "100%", marginTop: "10px", position: "relative", zIndex: 0 }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Marker
      position={[-19.527300322312055, -42.62326094418149]}
      icon={customIcon}
    ></Marker>
  </MapContainer>
  );
}
