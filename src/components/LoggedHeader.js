import React from "react";
import "../styles/index.css"
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import pl_flag from "../resources/pl_flag.png"
import eng_flag from "../resources/eng_flag.png";

import { esteticContainer } from "../containers/estetics";
import { dictionaryContainer } from "../containers/dictionary";

import { ThemeToggle } from "./themeToggle";
import LoggedHeaderDropdown from "./LoggedHeaderDropdown";

export const LoggedHeader = props => {
    return (
        <Navbar expand="sm" bg={esteticContainer.getTheme()} className="header" variant={esteticContainer.getTheme()}>
            <Navbar.Brand exact to="/" as={Link}>
            SCAN.LEE
      </Navbar.Brand>
            <Nav><Nav.Link href="/swipe">Swiper</Nav.Link>
            <Nav.Link >Scan</Nav.Link></Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="ml-auto" navbar >
                    <Nav.Link><ThemeToggle refresh={props.refresh} /></Nav.Link>
                    <Nav.Link ><img src={pl_flag} alt="flag " className='Flag' onClick={() => { dictionaryContainer.setLanguage('Polski'); props.refresh() }} /><img src={eng_flag} alt="flag" className='Flag' onClick={() => { dictionaryContainer.setLanguage('English'); props.refresh() }} /></Nav.Link>
                </Nav>
                <Nav>
                    <LoggedHeaderDropdown />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
