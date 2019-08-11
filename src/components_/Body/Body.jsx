import React from "react"
import "./Body.css"
import Row from "../Row/Row"

export default function (props) {
    let cardNames = [];
    return (
        <div className="container my-4 mx-auto">
            {props.cardNameArray.map((cardName, index) => {
                cardNames.push(cardName)

                if ((index + 1) % 4 === 0 || (index + 1) === props.cardNameArray.length) {
                    const propsValue = cardNames;
                    cardNames = [];
                    return <Row cardNames={propsValue} key={index} cardClick={props.cardClick} />
                }
                else return null;

            })}
        </div>
    );
}