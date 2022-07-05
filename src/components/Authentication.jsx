import React from 'react';
import logo from "../files/img/logo.svg";
import {
    Link,
    Outlet
} from "react-router-dom";

export default class Authentication extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <header className="header">
                    <div className="header__container container">
                        <div className="header__logo">
                            <img src={logo} alt="Logotype" className="header__logo-icon" />
                        </div>
                        <Link className="header__button btn-border" to="/Authentication/Signin">Sign in</Link>
                    </div>
                </header>
                <div>
                    <Outlet />
                </div >
            </>
        )
    }
}