import React, { Component } from "react"
// import Button from "react-bootstrap/Button"
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Background from '../resources/header-img.png'

export default class HandleBarcode extends Component {

    componentDidMount() {
        const { barcode } = this.props.match.params
        window.sessionStorage.setItem('barcode', barcode)
        console.log(barcode)

        var token = this.cookies.get('Access-Token')
        var client = this.cookies.get('Client')
        var uid = this.cookies.get('Uid')
        var expiry = this.cookies.get('Expiry')

        const requestData = {
            method: "POST",
            headers: { 'Access-Token': token, 'Client': client, 'Uid': uid, 'Expiry': expiry },
            body: JSON.stringify({
                code: barcode
            }),
        };
        const request = fetch(
            "https://tardis-back.herokuapp.com/barcodes",
            requestData
        )
        const response = request.json();
        console.log(response.code);
    }
    render() {
        return (
            <div></div>
        );
    }
}

