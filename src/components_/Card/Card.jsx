import React from "react"
import "./Card.css"

export default function (props) {

    const imgSrc = `./assets/images/${props.cardName}.png`
    return (
        <div className="card" onClick={props.cardClick} >
            <img className="card-content" src={imgSrc} alt="..." name={props.cardName} />
        </div>
    )
}