import React from "react";
import FurnHero from "./FurnHero";
import FurnPopulerProduct from "./FurnPopulerProduct";
import FurnBestManufacturer from "./FurnBestManufacturer";
import FurnProductsMayLike from "./FurnProductsMayLike";
import FurnInstagram from "./FurnInstagram";
import FurnTopPick from "./FurnTopPick";
import FurnServices from "./FurnServices";
import FurnToTop from "./FurnToTop";

function FurnBody({populerProducts, productsMayLike, topPickProducts, fetchPopularProducts}){
    return (
        <main>
            <FurnHero></FurnHero>
            <FurnPopulerProduct populerProducts={populerProducts} fetchPopulerProducts={fetchPopularProducts}></FurnPopulerProduct>
            <FurnBestManufacturer></FurnBestManufacturer>
            <FurnProductsMayLike productsMayLike={productsMayLike}></FurnProductsMayLike>
            <FurnInstagram></FurnInstagram>
            <FurnTopPick topPickProducts={topPickProducts}></FurnTopPick>
            <FurnServices></FurnServices>
            <FurnToTop></FurnToTop>
        </main>
    )
}

export default FurnBody