import React from "react";
import data from "./data";
import Header from "./components/Header";
import Place from "./components/Place";

export default function App() {

    let places = data.map(info => {
        return <Place 
            {...info}
        />
            

    })

    return (
        <div>
            <Header />
            {places}
        </div>
    )
}