import React from "react";
import FurnProductList from "./FurnProductList";
import FurnDiscoverButton from "./FurnDiscoverButton";

function FurnProductsMayLike({productsMayLike}) {
  return (
    <section className="furn-products-may-like">
      <div className="container">
        <div className="furn-products-may-like__sectionTitle">
          <h2 className="furn-products-may-like__title">PRODUCTS YOU MAY LIKE</h2>
          <p className="furn-products-may-like__text">Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
        </div>
        <FurnProductList products={productsMayLike}></FurnProductList>        
        <div className="furn-products-may-like__discoverButton">
        <FurnDiscoverButton></FurnDiscoverButton>
        </div>
      </div>
    </section>
  );
}

export default FurnProductsMayLike;
