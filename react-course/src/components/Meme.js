import React from "react";
import memesData from "../memesData.js"

export default function Meme() {

    const [memeUrl, setMemeUrl] = React.useState("");


    function getMeme() {
        setMemeUrl(memesData.data.memes[Math.floor(Math.random()*(memesData.data.memes.length))].url);
    }

    return (
        <div id="main-meme">
            <div id="form-container">
                <form>
                    <input placeholder="Top Text" type="text"></input>
                </form>
                <form>
                    <input placeholder="Bottom Text" type="text"></input>
                </form>
            </div>
            <button onClick={getMeme} id="meme-button">Get a new meme image 🎨</button>
            <div id="meme-container">
                <img src={memeUrl} />
            </div>
        </div>
    )
}