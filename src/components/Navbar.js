import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import componentNames from "../content/ComponentNames";
import itemToPath from "../helpers/ConvertToPath";

/**
 * Processes Navbar content
 *
 * @param {Array} array Object to be processed
 * @param {String} styleClass Styles to be applied
 * @param {function} clickHandler Function to handle click events
 * @returns DOM Router links
 */
function mapListLinks(array, styleClass, clickHandler) {
    const listItems = array.map((item, index) => {
        return (
            <li key={index}>
                <Link
                    className={styleClass}
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
                    isNavbarHidden ? "" : "lines-rotate"
                }`}
                onClick={toggleNavbar}
            >
                <span className="hamburger-lines"></span>
                <span className="hamburger-lines"></span>
                <span className="hamburger-lines"></span>
            </div>

            <ul id="nav-links" className={isNavbarHidden ? "hide" : ""}>
                {mapListLinks(componentNames, "links", handleLinkClick)}
            </ul>
        </nav>
    );
}

export default Navbar;
