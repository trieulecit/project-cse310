import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import logo from "../logo.svg";
import "../assets/Header.css";
import "../routes/Routes";

const Header = ({handleUser}) => {
    function WrapHandleUser(event) {
        return (handleUser(event));
    }
    return (
        <div>
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
                    <Nav.Item style={{marginLeft: "10px"}}>
                        <Nav.Link as={Link} to={"/schedule"}>Schedule</Nav.Link>
                    </Nav.Item>
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
            <WrapHandleUser></WrapHandleUser>
            </Navbar>     
        </div>
    );
};

export default Header;
