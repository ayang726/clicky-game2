import React from "react";
import "./Jumbotron.css"

export default function (props) {
    return (
        <div className="text-center jumbotron">
            <h1 className="m-4 display-2"><strong>Clicky Game!</strong></h1>
            <h4><strong>Click on an image to earn points, but don't click on any more than once!</strong></h4>
        </div>
    )
}