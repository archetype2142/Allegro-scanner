import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import Logout from "./Logout";

export default class HeaderDropdown extends Component {
  render() {
    return (
      <NavDropdown alignRight title="Ustawienia">
        <NavDropdown.Item href="/cryptographyView">
          Ustaw klucz publiczny
        </NavDropdown.Item>
        <NavDropdown.Item href="/assignMachine">
          Dodaj urządzenie
        </NavDropdown.Item>
        <NavDropdown.Item href="/">Konto</NavDropdown.Item>
        <NavDropdown.Divider />
        <Logout />
      </NavDropdown>
    );
  }
}
