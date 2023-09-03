import React from "react";
import FurnDiscoverButton from "./FurnDiscoverButton";

function FurnBestManufacturer() {
  return (
    <section className="furn-best-manufacturer">
      <div className="furn-best-manufacturer__image"></div>
      <div className="furn-best-manufacturer__description">
        <h2 className="furn-best-manufacturer__title">BEST FURNITURE MANUFACTURER</h2>
        <p className="furn-best-manufacturer__text">
        Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
        </p>
        <p className="furn-best-manufacturer__text">Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
        <FurnDiscoverButton></FurnDiscoverButton>
      </div>
    </section>
  );
}

export default FurnBestManufacturer;
