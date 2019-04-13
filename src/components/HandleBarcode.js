import React, { Component } from "react"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Background from '../resources/header-img.png'
import Cookies from "universal-cookie";
import { dictionaryContainer } from "../containers/dictionary";

export default class HandleBarcode extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        { dictionaryContainer.setLocation(window.location.pathname) }
        return false
    }
}

