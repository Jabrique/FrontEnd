import React from "react"

function FurnNavLink({link, href=""}){
    return (
        <li className="nav-list__item">
            <a href={href}>{link}</a>
        </li>
    )
}

export default FurnNavLink