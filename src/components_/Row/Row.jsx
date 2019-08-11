import React from "react"
import Column from "../Column/Column"

export default function (props) {

    return (
        <div className="row my-4">
            {
                props.cardNames.map((cardName, index) => {
                    return <Column cardName={cardName} cardClick={props.cardClick} key={index} />
                })
            }
        </div>
    )
}