import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { dictionaryContainer } from "../containers/dictionary";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    if (this.state.email && this.state.password) {
      this.fetchUserData();
    }
  }

  async fetchUserData() {
    Swal.fire({
      title: "Logowanie w trakcie",
      showCancelButton: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });

    const requestData = {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        passwordHash: this.state.password
      }),
      headers: { "Content-Type": "application/json" }
    };

    const request = await fetch(
      // URLHERE,
      requestData
    );
    const response = await request.json();
    const error = response.error;
    const success = !response.error;
    if (success) {

    }

    if (error) {
      Swal.fire({
        title: "Logowanie nieudane",
        type: "error",
        text: "Niepoprawny e-mail lub hasło"
      });
    } else {
      Swal.fire({
        title: "Zalogowano",
        type: "success",
        showConfirmButton: false,
        timer: 1000
      }).then(login => {
        if (login.dismiss === Swal.DismissReason.timer) {
          window.location.href = "/";
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col />
            <Col>
              <Jumbotron>
                <h2>{dictionaryContainer.getText("login", "loggingIn")}</h2>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      {dictionaryContainer.getText("login", "password")}
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    {dictionaryContainer.getText("login", "login")}
                  </Button>
                  <Link to="/register" className="btn btn-link">
                    {dictionaryContainer.getText("login", "registration")}
                  </Link>
                </Form>
              </Jumbotron>
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}
