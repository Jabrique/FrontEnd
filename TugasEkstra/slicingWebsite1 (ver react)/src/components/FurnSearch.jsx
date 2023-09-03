import React from "react";

function FurnSearch(){
    return(
        <div className="furn-search">
            <form className="furn-search__form">
                <input type="text" placeholder="Search products" 
                className="furn-search__input"/>
                <div className="furn-search__image"></div>
            </form>
        </div>
    )
}

export default FurnSearch