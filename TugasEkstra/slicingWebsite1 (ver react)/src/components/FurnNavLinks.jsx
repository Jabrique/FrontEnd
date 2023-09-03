import React from "react"
import FurnNavLink from "./FurnNavLink"

function FurnNavLinks({className}){
    return (
        <ul className={className}>
            <FurnNavLink link={"home"}></FurnNavLink>
            <FurnNavLink link={"Product"}></FurnNavLink>
            <FurnNavLink link={"About"}></FurnNavLink>
            <FurnNavLink link={"Page"}></FurnNavLink>
            <FurnNavLink link={"Blog"}></FurnNavLink>
            <FurnNavLink link={"Contact"}></FurnNavLink>
        </ul>
    )
}

export default FurnNavLinks