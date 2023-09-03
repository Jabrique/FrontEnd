import React from "react";
import FurnDiscoverButton from "./FurnDiscoverButton";

function FurnInstagram() {
  return (
    <section className="furn-instagram">
      <div className="container">
        <div className="furn-instagram__description">
          <div className="furn-instagram__logo"></div>
          <h2 className="furn-instagram__title">GET INSPIRED WITH INSTAGRAM</h2>
          <p className="furn-instagram__text">Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          <FurnDiscoverButton></FurnDiscoverButton>
        </div>
        <div className="furn-instagram__imageContainer">
          <div className="furn-instagram__image1"></div>
          <div className="furn-instagram__image2"></div>
        </div>
      </div>
    </section>
  );
}

export default FurnInstagram;
