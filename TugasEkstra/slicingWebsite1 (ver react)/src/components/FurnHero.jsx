import React from "react"
import FurnDiscoverButton from "./FurnDiscoverButton"

function FurnHero(){
    return (
        <section className="hero">
            <img src="/image/heroImage.jpg" alt="heroImage" className="hero__image"/>
            <div className="hero__box">
                <p className="hero__discount">70% SALE OFF</p>
                <h1 className="hero__title">FURNITURE AT COST</h1>
                <p className="hero__text">Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                <FurnDiscoverButton></FurnDiscoverButton>
            </div>
        </section>
    )
}

export default FurnHero