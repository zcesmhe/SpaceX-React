import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {

    render() {

        return (

            <Navbar inverse fluid collapseOnSelect style={{background: "black", margin: "0"}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/">SpaceX</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/upcoming">
                            <NavItem>Upcoming Launches</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/history">
                            <NavItem>Launch History</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default NavBar;