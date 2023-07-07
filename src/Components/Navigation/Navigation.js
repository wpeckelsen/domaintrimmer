import "./Navigation.css";
import {Link, NavLink, Outlet} from "react-router-dom";
import React, {useContext} from "react";

function Navigation() {
    return (
        <div>
            <nav className="nav-bar">
                <div className="home-link">
                    <Link to="/">
                        <p>
                            <b>Home</b>
                        </p>
                    </Link>
                </div>

                <div className="nav-links">
                    <Link to="/about">
                        <p>
                            <b>
                                About
                            </b>
                        </p>
                    </Link>


                    <Link to="/contact">
                        <p>
                            <b>
                                Contact
                            </b>

                        </p>
                        </Link>

                </div>
            </nav>

            <Outlet/>
        </div>
    );
}

export default Navigation;
