import "./Navbar.css";
import {NavLink} from "react-router-dom";
import React, {useContext} from "react";

function Navbar() {
    return (
        <div className="nav-bar">
            <div className="home-link">
                    <p>
                        <b>Home</b>
                    </p>

            </div>

            <div className="nav-links">

                    <p>
                        <b>Contact</b>
                    </p>

            </div>
        </div>
    );
}

export default Navbar;
