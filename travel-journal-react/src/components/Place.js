import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Place(props) {

    const fileName = props.imageURL;

    return (
        <div className="container">
            <img src={props.imageUrl} />
            <span className="information">
                <span className="locationInfo">
                    <div className = "wrapper">
                        <FontAwesomeIcon className="pointIcon" icon={faLocationDot} />
                        <h3>{props.location}</h3>
                    </div>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </span>
                <h1 className="placeName">{props.title}</h1>
                <p className="date">{props.date}</p>
                <p className="desc">{props.description}</p>
            </span>
        </div>
    )
}