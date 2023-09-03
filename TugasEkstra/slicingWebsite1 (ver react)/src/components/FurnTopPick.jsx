import React from "react";
import FurnProductList from "./FurnProductList";
import FurnDiscoverButton from "./FurnDiscoverButton";

function FurnTopPick({topPickProducts}){
    return(
        <section className="furn-top-pick">
            <div className="container">
                <div className="furn-top-pick__sectionTitle">
                    <h2 className="furn-top-pick__title">TOP PICK</h2>
                    <p className="furn-top-pick__text">Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                </div>
                <FurnProductList products={topPickProducts}></FurnProductList>
                <div className="furn-top-pick__discoverButton">
                    <FurnDiscoverButton></FurnDiscoverButton>
                </div>
            </div>
        </section>
    )
}

export default FurnTopPick