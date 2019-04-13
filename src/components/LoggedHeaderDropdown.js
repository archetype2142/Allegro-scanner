import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import { dictionaryContainer } from "../containers/dictionary";
import Logout from "./Logout"

export default class LoggedHeaderDropdown extends Component {
    render() {
        return (
            <NavDropdown alignRight title={<Icon name="bars" />}>
                <Logout/>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">{dictionaryContainer.getText("header", "mainPage")}</NavDropdown.Item>
            </NavDropdown>
        );
    }
}
