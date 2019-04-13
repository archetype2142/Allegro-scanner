import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import { dictionaryContainer } from "../containers/dictionary";

export default class UnloggedHeaderDropdown extends Component {
  render() {
    return (
      <NavDropdown alignRight title={<Icon name="bars" />}>
        <NavDropdown.Item href="/login">
          {dictionaryContainer.getText("header", "login")}
        </NavDropdown.Item>
        <NavDropdown.Item href="/register">
          {dictionaryContainer.getText("header", "register")}
        </NavDropdown.Item>
        <NavDropdown.Item href="/loginn">
          {dictionaryContainer.getText("header", "/loginn")}
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">{dictionaryContainer.getText("header", "mainPage")}</NavDropdown.Item>
      </NavDropdown>
    );
  }
}
