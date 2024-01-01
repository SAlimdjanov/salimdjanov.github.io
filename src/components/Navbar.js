import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLinks from "../content/NavLinks";

/**
 * Processes Navbar content
 *
 * @param {*} object Object to be processed
 * @param {*} styleClass Styles to be applied
 * @param {function} clickHandler Function to handle click events
 * @returns DOM Router links
 */
function mapListLinks(object, styleClass, clickHandler) {
    const listItems = object.map((item, index) => {
        return (
            <li key={index}>
                <Link
                    className={styleClass}
                    to={item.url}
                    key={index}
                    onClick={clickHandler}
                >
                    {item.component}
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
                {mapListLinks(navLinks, "links", handleLinkClick)}
            </ul>
        </nav>
    );
}

export default Navbar;
