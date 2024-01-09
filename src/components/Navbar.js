import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import componentNames from "../content/ComponentNames";
import itemToPath from "../helpers/ConvertToPath";

/**
 * Processes Navbar content
 *
 * @param {Array} array Object to be processed
 * @param {function} clickHandler Function to handle click events
 * @returns DOM Router links
 */
function mapListLinks(array, clickHandler) {
    const listItems = array.map((item, index) => {
        return (
            <li key={index}>
                <Link
                    to={itemToPath(componentNames, item)}
                    key={index}
                    onClick={clickHandler}
                >
                    {item}
                </Link>
            </li>
        );
    });

    return listItems;
}

function Navbar() {
    const [isNavbarHidden, setNavbarHidden] = useState(true);

    const toggleNavbar = () => {
        setNavbarHidden(!isNavbarHidden);
    };

    const handleLinkClick = () => {
        setNavbarHidden(true);
    };

    return (
        <nav className="navbar-container">
            <Link id="home-link" to="/" onClick={handleLinkClick}>
                <h1 id="emblem">
                    <span className="angled-braces">&lt;</span>
                    <span id="name-initial">S</span>/
                    <span className="angled-braces">&gt;</span>
                </h1>
            </Link>

            <div
                className={`hamburger-menu ${
                    isNavbarHidden ? "" : "menu-selected"
                }`}
                onClick={toggleNavbar}
            >
                <span
                    className={`hamburger-lines ${
                        isNavbarHidden ? "" : "line-rotate-down"
                    }`}
                ></span>
                <span
                    className={`hamburger-lines ${
                        isNavbarHidden ? "" : "invisible"
                    }`}
                ></span>
                <span
                    className={`hamburger-lines ${
                        isNavbarHidden ? "" : "line-rotate-up"
                    }`}
                ></span>
            </div>

            <ul id="nav-links" className={isNavbarHidden ? "hide" : ""}>
                {mapListLinks(componentNames, handleLinkClick)}
            </ul>
        </nav>
    );
}

export default Navbar;
