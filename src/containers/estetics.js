import React from 'react';

import { Container } from 'unstated'
import Cookies from 'universal-cookie';

import logo from '../resources/logo.png'
import white_logo from '../resources/white_logo.png'

class EsteticContainer extends Container {
    state = {
        theme: 'dark'
    }

    cookies = new Cookies()

    getValue() {
        if (this.cookies.get('theme') !== undefined) {
            if (this.cookies.get('theme') === 'dark') {
                return false
            } else {
                return true
            }
        } else {
            if (this.state.theme === 'dark') {
                return false
            } else {
                return true
            }
        }

    }

    getColor(variant) {
        if (this.cookies.get('theme') !== undefined) {
            if (this.cookies.get('theme') === 'dark') {
                if (variant === 'background') {
                    return "#5c6166"
                } else if (variant === 'text') {
                    return "#ffffff"
                }
            } else {
                if (variant === 'background') {
                    return "#eaebeb"
                } else if (variant === 'text') {
                    return "#000000"
                }
            }
        } else {
            if (this.state.theme === 'dark') {
                if (variant === 'background') {
                    return "#5c6166"
                } else if (variant === 'text') {
                    return "#ffffff"
                }
            } else {
                if (variant === 'background') {
                    return "#eaebeb"
                } else if (variant === 'text') {
                    return "#000000"
                }
            }
        }
    }

    setTheme(bool) {
        console.log("getTheme")
        if (bool == false) {
            this.cookies.set('theme', 'dark')
            this.setState({ theme: 'dark' })
        } else {
            this.cookies.set('theme', 'light')
            this.setState({ theme: 'light' })
        }
    }

    getTheme() {
        if (this.cookies.get('theme') !== undefined) {
            return this.cookies.get('theme')
        } else {
            return this.state.theme
        }
    }

    getIcon(variant) {
        if (variant === 'logo') {
            if (esteticContainer.getTheme() === 'dark') { return <img src={white_logo} className='Logo' /> } else { return <img src={logo} className='Logo' /> }
        }
    }

}
export const esteticContainer = new EsteticContainer()