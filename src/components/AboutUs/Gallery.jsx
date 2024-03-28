import React from "react";
import "./Gallery.css";

function InstagramWidget() {
  return (
    <div className="instagram-widget-container">
      <iframe
        title="Instagram Feed"
        src="//lightwidget.com/widgets/7e5d594581685408b1bf98b3fc39fefe.html"
        className="instagram-widget"
      ></iframe>
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
