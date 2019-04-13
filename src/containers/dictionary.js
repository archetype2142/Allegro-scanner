import { Container } from 'unstated'

import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';

class DictionaryContainer extends Container {
    state = {
        Polski: {
            header: {
                login: "Logowanie",
                register: "Rejestracja",
                mainPage: "Strona Główna",
                logout: "Wyloguj się"
            },
            login: {
                loggingIn: "Logowanie",
                password: "Hasło",
                login: "Zaloguj",
                registration: "Rejestracja"
            },
            register: {
                registration: "Rejestracja",
                password: "Hasło",
                confirmPassword: "Potwierdź hasło",
                register: "Zarejestruj",
                back: "Wróć"
            }
        },
        English: {
            header: {
                login: "Login",
                register: "Register",
                mainPage: "Main Page",
                logout: "Logout"
            },
            login: {
                loggingIn: "Log In",
                password: "Password",
                login: "Login",
                registration: "Registration"
            },
            register: {
                registration: "Registration",
                password: "Password",
                confirmPassword: "Confirm password",
                register: "Register",
                back: "Back"
            }
        },
        language: "Polski"
    }

    cookies = new Cookies()

    setLanguage(variant) {
        this.cookies.set('language', variant)
        this.setState({ language: variant })
    }

    getLanguage() {
        if (this.cookies.get('language') !== undefined) {
            return this.cookies.get('language')
        } else {
            return this.state.language
        }
    }

    getText(origin, variant) {
        return this.state[this.getLanguage()][origin][variant]
    }

    async setLocation(location) {
        Swal.fire({
            title: "Processing...",
            showCancelButton: false,
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });
        await window.sessionStorage.setItem("location", location.slice(1))
        console.log(location.slice(1))
        var token = this.cookies.get('Access-Token')
        var client = this.cookies.get('Client')
        var uid = this.cookies.get('Uid')
        var expiry = this.cookies.get('Expiry')
        var code = location.slice(1)
        console.log(code)

        const requestData = {
            method: "POST",
            headers: { "Content-Type": "application/json", 'Access-Token': token, 'Client': client, 'Uid': uid, 'Expiry': expiry },
            body: JSON.stringify({ code: code })
        };
        console.log(requestData)
        const request = await fetch(
            "https://tardis-back.herokuapp.com/barcodes",
            requestData
        )
        const response = await request.json();
        console.log(response)

        if (response.code) {
            Swal.fire({
                title: "Success!",
                type: "success",
                showConfirmButton: false,
                timer: 1000
            }).then(login => {
                if (login.dismiss === Swal.DismissReason.timer) {
                    window.location.href = "/";
                }
            });
        } else {
            Swal.fire({
                title: "Failure",
                type: "error",
                text: "Bad fetch"
            });
        }
    }
}
export const dictionaryContainer = new DictionaryContainer()