import React, { Component } from "react";
import { dictionaryContainer } from "../containers/dictionary";
import Swal from "sweetalert2";
import { NavDropdown } from "react-bootstrap";
import Cookies from "universal-cookie";

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.Logout = this.Logout.bind(this);
        this.cookies = new Cookies();
    }

    async fetchData() {
        Swal.fire({
            title: "Wylogowywanie",
            showCancelButton: false,
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        var token = this.cookies.get('Access-Token')
        var client = this.cookies.get('Client')
        var uid = this.cookies.get('Uid')
        var expiry = this.cookies.get('Expiry')

        const requestData = {
            method: "DELETE",
            headers: { 'Access-Token': token, 'Client': client, 'Uid': uid, 'Expiry': expiry }
        };
        const request = await fetch(
            "https://tardis-back.herokuapp.com/auth/sign_out",
            requestData
        );
        const response = await request.json();
        console.log(response.success);

        if (response.success === true) {
            Swal.fire({
                title: "Wylogowano",
                type: "success"
            }).then(logout => {
                if (logout.value) {
                    this.cookies.remove("Access-Token");
                    if (this.cookies.get("Access-Token") === null) {
                        window.location.href = "/";
                    }
                }
            });
        } else {
            Swal.fire({
                title: "Błąd wylogowywania",
                type: "error",
                text: "Prosimy spróbować ponownie"
            });
        }
    }

    Logout() {
        Swal.fire({
            title: "Chcesz się wylogować?",
            type: "question",
            showCancelButton: true,
            cancelButtonText: "Nie",
            confirmButtonText: "Tak"
        }).then(result => {
            if (result.value) {
                this.fetchData();
            }
        });
    }

    render() {
        return (
            <NavDropdown.Item className="ml-auto" onClick={this.Logout}>
                {dictionaryContainer.getText('header', 'logout')}
            </NavDropdown.Item>
        );
    }
}