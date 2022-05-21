import React, { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import "../assets/navbar.css";
import "../routes/routes";
import MenuRoutes from "../routes/routes";

function Navbar(props) {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");

    const navToggle = () => {
        active === "nav__menu"
            ? setActive("nav__menu nav__active")
            : setActive("nav__menu");

        toggleIcon === "nav__toggler"
            ? setToggleIcon("nav__toggler toggle")
            : setToggleIcon("nav__toggler");
    };

    return (
        <Router>
            <nav className="nav">
                {/* <a href="/" className="nav__brand">
                logo
            </a> */}
                <Link to="/" className="nav__brand">
                    Logo
                </Link>
                <ul className="nav__menu">
                    <li className="nav__item">
                        <a href="/" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/schedule" className="nav__link">
                            Schedule
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/standings" className="nav__link">
                            Standings
                        </a>
                    </li>
                </ul>
                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>

            {/* <Routes>
                <Route path="/" element={1}></Route>
                <Route path="/schedule" element={1}></Route>
                <Route path="/standings" element={<Standings />}></Route>
            </Routes> */}
            <MenuRoutes />
        </Router>
    );
}

export default Navbar;
