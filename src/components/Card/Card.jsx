import React from "react"
import "./Card.css"
import images from "./images";

export default function (props) {
    return (
        <div className="card" onClick={props.cardClick} >
            <img className="card-content" src={images[props.cardName]} alt="..." name={props.cardName} />
        </div>
    )
}