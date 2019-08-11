import React from "react"
import Card from "../Card/Card"

export default function (props) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <Card cardName={props.cardName} cardClick={props.cardClick} />
        </div>
    )
}