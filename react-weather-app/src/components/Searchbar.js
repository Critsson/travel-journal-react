import React from "react";

export default function Searchbar(props) {

    const style = { width: "200px", height: "30px", padding: "10px", boxSizing: "border-box", backgroundColor: "transparent", border: "3px solid black", borderRadius: "8px"}
    const arr = props.multiples.map((place) => {
        return <button key={place.id} onClick={()=>props.handleButtonClick(place.lat, place.lng, place.city_ascii, place.admin_name, place.country)} className="other-options">{`${place.city_ascii}, ${place.admin_name}, ${place.country}`}</button>
    })

    return (
        <>
            <form className="searchbar" onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} style={style} type="text"></input>
            </form>
            {props.multiples.length > 1 && <h3>Did you mean?</h3>}
            {props.multiples.length > 1 && arr}
        </>

    )
}