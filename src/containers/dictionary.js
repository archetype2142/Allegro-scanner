import { Container } from 'unstated'

import Cookies from 'universal-cookie';

class DictionaryContainer extends Container {
    state = {
        Polski: {
            navbar: {
                machines: "Maszyny",
            },
            gauges: {
                temperature: "Temperatura"
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
            navbar: {
                machines: "Machines"
            },
            gauges: {
                temperature: "Temperature"
            },
            login: {
                loggingIn: "Logging in",
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