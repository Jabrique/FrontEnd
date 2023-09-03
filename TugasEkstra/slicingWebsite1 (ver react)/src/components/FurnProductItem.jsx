import React from "react"

function FurnProductItem({image, title, price}){
    return(
        <div className="product-item">
            <img 
            src={image} 
            alt={title} 
            className="product-item__image" />
            <h3 className="product-item__title">{title}</h3>
            <p className="product-item__price">{price}</p>
        </div>
    )
}

export default FurnProductItem