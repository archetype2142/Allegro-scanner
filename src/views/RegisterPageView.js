import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  Jumbotron,
  Col,
  Container,
  Row,
  Overlay,
  Popover
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { SHA256 } from "sha2";
import { validateContainer } from "../containers/register";
import { Subscribe } from "unstated";
import Swal from "sweetalert2";

import { configContainer } from "../containers/config";
import { dictionaryContainer } from "../containers/dictionary";

export default class RegisterPage extends Component {
  constructor(props, context) {
    super(props, context);
    window.sessionStorage.getItem("bolidSession");
    console.log(window.sessionStorage.getItem("bolidSession"));
    if (window.sessionStorage.getItem("bolidSession") !== null) {
      window.location.href = "/devices";
    }

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      submitted: false,
      errors: [],
      errorEmail: false,
      errorPasswordLenght: false,
      errorPasswordMatch: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate(email, password) {
    const errors = [];

    if (email.length < 5) {
      this.setState({ errorEmail: true });
    } else {
      this.setState({ errorEmail: false });
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
      this.setState({ errorEmail: true });
    } else {
      this.setState({ errorEmail: false });
    }

    if (email.indexOf(".") === -1) {
      this.setState({ errorEmail: true });
    } else {
      this.setState({ errorEmail: false });
    }

    if (password.length < 6) {
      this.setState({ errorPasswordLenght: true });
    } else {
      this.setState({ errorPasswordLenght: false });
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ errorPasswordMatch: true });
    } else {
      this.setState({ errorPasswordMatch: false });
    }

    return errors;
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    await this.validate(email, password);

    const confirmPassword = this.state.confirmPassword;
    const errorEmail = this.state.errorEmail;
    const errorPasswordLenght = this.state.errorPasswordLenght;
    const errorPasswordMatch = this.state.errorPasswordMatch;

    if (email && password && confirmPassword) {
      if (
        errorEmail === false &&
        errorPasswordLenght === false &&
        errorPasswordMatch === false
      ) {
        this.fetchData();
      } else {
        console.log("TODO Swal, Check errors");
      }
    }
  }

  async fetchData() {
    Swal.fire({
      title: "Rejestracja w trakcie",
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
        passwordHash: SHA256(this.state.password).toString("hex")
      }),
      headers: { "Content-Type": "application/json" }
    };
    const request = await fetch(
      configContainer.getUrl() + "/api/v1/users/register",
      requestData
    );
    const response = await request.json();
    const success = !response.error;
    if (success) {
      const session = response.session;
      validateContainer.updateSession(session);

      const expirationTime = response.expirationTime;
      validateContainer.updateExpirationTime(expirationTime);

      const authLevel = response.authLevel;
      validateContainer.updateAuthLevel(authLevel);
    }
    if (success) {
      Swal.fire({
        title: "Rejestracja udana",
        type: "success",
        text: "Konto stworzone"
      }).then(register => {
        if (window.sessionStorage.getItem("bolidLevel") === "0") {
          window.location.href = "/";
        } else if (window.sessionStorage.getItem("bolidLevel") === "1") {
          window.location.href = "/";
        }
      });
    } else {
      Swal.fire({
        title: "Rejestracja nieudana",
        type: "error",
        text: "Taki e-mail już istnieje"
      });
    }
  }

  render() {
    return (
      <div className="register">
        <Container>
          <Row>
            <Col />
            <Col>
              <Jumbotron>
                <h2>
                  {dictionaryContainer.getText("register", "registration")}
                </h2>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      ref="email"
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      {dictionaryContainer.getText("register", "password")}
                    </Form.Label>
                    <Form.Control
                      ref="password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="checkBasicPassword">
                    <Form.Label>
                      {dictionaryContainer.getText(
                        "register",
                        "confirmPassword"
                      )}
                    </Form.Label>
                    <Form.Control
                      ref="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Subscribe to={[validateContainer]}>
                    {counterContainer => (
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={this.handleSubmit}
                      >
                        {dictionaryContainer.getText("register", "register")}
                      </Button>
                    )}
                  </Subscribe>
                  <Link to="/" className="btn btn-link">
                    {dictionaryContainer.getText("register", "back")}
                  </Link>

                  <Overlay
                    show={this.state.errorEmail}
                    target={() => {
                      return ReactDOM.findDOMNode(this.refs.email);
                    }}
                    placement="right"
                  >
                    <Popover id="popover-email" title="Niepoprawny e-mail">
                      Sprawdź czy e-mail posiada odpowiednie symbole
                    </Popover>
                  </Overlay>

                  <Overlay
                    show={this.state.errorPasswordLenght}
                    target={() => {
                      return ReactDOM.findDOMNode(this.refs.password);
                    }}
                    placement="right"
                  >
                    <Popover id="popover-password" title="Hasło za krótkie">
                      Hasło musi zawierać minimum 6 znaków
                    </Popover>
                  </Overlay>

                  <Overlay
                    show={this.state.errorPasswordMatch}
                    target={() => {
                      return ReactDOM.findDOMNode(this.refs.confirmPassword);
                    }}
                    placement="right"
                  >
                    <Popover
                      id="popover-confirmPassword"
                      title="Hasła nie pasują"
                    >
                      Sprawdź czy hasła zostały wpisane tak samo
                    </Popover>
                  </Overlay>
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