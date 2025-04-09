import React, { useEffect } from "react";
import "./Gallery.css";

function InstagramWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.curator.io/published/7d95ff30-adc8-491d-a34b-d7e5ef050b7c.js";
    script.async = true;
    script.charset = "UTF-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="curator-feed-default-feed-layout">
      <a
        href="https://curator.io"
        target="_blank"
        rel="noopener noreferrer"
        className="crt-logo crt-tag"
      >
        Powered by Curator.io
      </a>
    </div>
  );
}

function Gallery() {
  return (
    <>
      <h1 className="gallery-title">Gallery </h1>
      <InstagramWidget />
    </>
  );
}

export { InstagramWidget, Gallery };
