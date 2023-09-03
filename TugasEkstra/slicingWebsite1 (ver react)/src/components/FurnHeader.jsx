import React from "react";
import FurnLogo from "./FurnLogo";
import FurnNav from "./FurnNav";
import FurnSearch from "./FurnSearch";

function FurnHeader(){
    return (
        <header>
            <FurnLogo></FurnLogo>
            <FurnNav></FurnNav>
            <div className="header__account">
                <FurnSearch></FurnSearch>
                <p className="header__myAccount">MyAccount</p>
                <div className="header__wishlist">
                    <p>0</p>
                </div>
            </div>
        </header>
    )
}

export default FurnHeader