import React, { Component } from "react"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Background from '../resources/header-img.png'

export default class LandingPage extends Component {
    constructor() {
        super()

    }


    render() {
        return (
            <div>
                <Container fluid>
                    <Row style={{padding:'2vh 10vw'}}>
                        <Col  xs={12} md={4} className='alignCenter'>
                                <h1 style={{paddingBottom:'2vh'}} className='small-font'>Access trustworthy reviews and product details with no hustle</h1>
                                <Button onClick={()=>{}} style={{fontWeight:'bold', backgroundColor:'#6c62fc', border:'#6c62fc'}}>Start scanning</Button>
                        </Col>
                        <Col xs={12} md={8}>
                            <img src={Background} style={{width:'100%'}} />
                        </Col>
                    </Row>
                    <Row style={{backgroundColor:'#f4f4f4',padding:'7vh 10vw'}}>
                        <p style={{
                            fontSize:'22px',
                            textAlign:'center',
                            fontWeight:'500'
                        }}>Product helps you to reach valuable information about any product within seconds on the go. All you have to do is scanning barcode of the product and you will recieve all of the meaningful product details and reviews.</p>
                    </Row>
                </Container>

            </div>
        )
    }
}
