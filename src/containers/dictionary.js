import { Container } from 'unstated'

import Cookies from 'universal-cookie';

class DictionaryContainer extends Container {
    state = {
        Polski: {
            header: {
                login: "Zalogowanie",
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
}
export const dictionaryContainer = new DictionaryContainer()