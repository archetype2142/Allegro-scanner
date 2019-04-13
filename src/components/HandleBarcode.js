import React, { Component } from "react"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Background from '../resources/header-img.png'
import Cookies from "universal-cookie";

export default class HandleBarcode extends Component {
    constructor(props) {
        super(props);
        this.cookies = new Cookies()
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        window.sessionStorage.setItem('barcode', windows.location.pathname)
        console.log(windows.location.pathname)
    }
    async fetchData() {
        var token = this.cookies.get('Access-Token')
        var client = this.cookies.get('Client')
        var uid = this.cookies.get('Uid')
        var expiry = this.cookies.get('Expiry')

        const requestData = {
            method: "POST",
            headers: { 'Access-Token': token, 'Client': client, 'Uid': uid, 'Expiry': expiry },
            body: JSON.stringify({
                code: windows.location.pathname
            }),
        };
        console.log(requestData)
        const request = await fetch(
            "https://tardis-back.herokuapp.com/barcodes",
            requestData
        )
        const response = await request.json();
        console.log(await response.code);
        window.location.href = "/"
    }
    render() {
        return (
            <div>
                {this.fetchData()}
                qwertyuiopjhgfdsdfghjk
            </div>
        );
    }
}

