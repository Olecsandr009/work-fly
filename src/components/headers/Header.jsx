import React from "react";
import {
    Link,
} from "react-router-dom";

import logo from "../../files/img/logo.svg";

export default class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <div className="header__container container">
                    <div className="header__logo">
                        <img src={logo} alt="Logotype" className="header__logo-icon" />
                    </div>
                    <Link className="header__button btn-border" to="/">Sign in</Link>
                </div>
            </header>
        )
    }
}