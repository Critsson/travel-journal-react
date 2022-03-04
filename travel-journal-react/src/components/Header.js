import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'


export default function Header() {

    return (
        <header>
            <FontAwesomeIcon id = "globeIcon" icon={faEarthAmericas} />
            <h1>my travel journal.</h1>
        </header>
    )
}