import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceGrinHearts } from "@fortawesome/free-solid-svg-icons"


export default function Header() {
    return (
        <header>
            <div>
                <FontAwesomeIcon id ="logo" icon={faFaceGrinHearts} />
                <h1>Meme Generator</h1>
            </div>
            <h3>React Course - Project 3</h3>
        </header>
    )
}