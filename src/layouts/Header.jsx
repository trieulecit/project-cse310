import React, { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import logo from "../logo.svg";
import "../assets/Header.css";
import "../routes/Routes";
import MenuRoutes from "../routes/Routes";

const Header = () => {
    return (
        <Navbar bg="myRed" variant="dark" fixed="top" expand="lg">
            <Navbar.Brand as={Link} to={"/"}>
                <img src={logo} alt="logo" width="40px" height="40px" />
                Football NEWS
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="justify-content-center">
                    <Nav.Link style={{marginLeft: "10px"}} as={Link} to={"/"} >Home</Nav.Link>
                    <NavDropdown style={{marginLeft: "10px"}} title="News">
                        <NavDropdown.Item as={Link} to={"news/epl"}>
                            EPL
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/news/laliga"}>
                            La Liga
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/news/seriea"}>
                            Serie A
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/news/bundesliga"}>
                            Bundesliga
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item as={Link} to={"/news/ligue1"}>
                            Ligue 1
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown style={{marginLeft: "10px"}} title="Schedule">
                        <NavDropdown.Item as={Link} to={"/schedule/epl"}>
                            EPL
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/schedule/laliga"}>
                            La Liga
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/schedule/seriea"}>
                            Serie A
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/schedule/bundesliga"}>
                            Bundesliga
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item as={Link} to={"/schedule/ligue1"}>
                            Ligue 1
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown style={{marginLeft: "10px"}} title="Standings">
                        <NavDropdown.Item as={Link} to={"/standings/epl"}>
                            EPL
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/standings/laliga"}>
                            La Liga
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/standings/seriea"}>
                            Serie A
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/standings/bundesliga"}>
                            Bundesliga
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/standings/ligue1"}>
                            Ligue 1
                        </NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;

// function Navbar(props) {
//     const [active, setActive] = useState("nav__menu");
//     const [toggleIcon, setToggleIcon] = useState("nav__toggler");

//     const navToggle = () => {
//         active === "nav__menu"
//             ? setActive("nav__menu nav__active")
//             : setActive("nav__menu");

//         toggleIcon === "nav__toggler"
//             ? setToggleIcon("nav__toggler toggle")
//             : setToggleIcon("nav__toggler");
//     };

//     return (
//         <Router>
//             <nav className="nav">
//                 {/* <a href="/" className="nav__brand">
//                 logo
//             </a> */}
//                 <Link to="/" className="nav__brand">
//                     Logo
//                 </Link>
//                 <ul className="nav__menu">
//                     <li className="nav__item">
//                         <a href="/" className="nav__link">
//                             Home
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="/schedule" className="nav__link">
//                             Schedule
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="/standings" className="nav__link">
//                             Standings
//                         </a>
//                     </li>
//                 </ul>
//                 <div onClick={navToggle} className={toggleIcon}>
//                     <div className="line1"></div>
//                     <div className="line2"></div>
//                     <div className="line3"></div>
//                 </div>
//             </nav>

//             {/* <Routes>
//                 <Route path="/" element={1}></Route>
//                 <Route path="/schedule" element={1}></Route>
//                 <Route path="/standings" element={<Standings />}></Route>
//             </Routes> */}
//             <MenuRoutes />
//         </Router>
//     );
// }

// export default Navbar;
