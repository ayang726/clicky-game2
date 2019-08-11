import React from "react"
import "./Navbar.css"

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="d-flex flex-row mx-auto">
                    <ul>
                        <li className="brand">
                            <strong>Clicky Game</strong>
                        </li>
                        <li className="message" id="message">
                            {props.message || "Click an image to begin!"}
                        </li>
                        <li className="score">
                            Score: {props.score || 0} | Top Score: {props.topScore || 0}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;