import React from "react";
import FurnProductItem from "./FurnProductItem";

function FurnProductList({products}){
    return(
        <div className="product-list">
            {products.map((product, index)=>(
                <FurnProductItem 
                key={index}
                {...product}
                ></FurnProductItem>
            ))}
        </div>
    )
}

export default FurnProductList