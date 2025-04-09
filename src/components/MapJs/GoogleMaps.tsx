"use client";

import React, { useEffect, useRef } from "react";

const DEFAULT_CENTER = { lat: 50.43421748315109, lng: 16.648986452869664 };
const DEFAULT_ZOOM = 15;

export const GoogleMaps = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current && window.google) {
      const map = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });

      new window.google.maps.Marker({
        position: DEFAULT_CENTER,
        map: map,
        title: "Bohaterów Getta 10/1, Kłodzko, 57-300",
      });
    }
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-[551px] rounded-lg shadow-lg z-0"
      style={{ width: "100%", height: "551px" }}
    />
  );
};
