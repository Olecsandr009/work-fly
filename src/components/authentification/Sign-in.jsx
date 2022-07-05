import React from 'react';
import { Link } from 'react-router-dom';

import illustration from '../../files/img/illustration2.svg';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            valueEmail: "",
            valuePassword: "",
        }

        this.setEmailInput = this.setEmailInput.bind(this);
        this.setPasswordInput = this.setPasswordInput.bind(this);
    }

    setEmailInput(e) {
        this.setState({ valueEmail: e.target.value })
    }

    setPasswordInput(e) {
        this.setState({ valuePassword: e.target.value })
    }

    viewPasswordInput(e) {
        e.preventDefault();

        const input = document.querySelector("[data-view-password-input]");

        e.target.classList.toggle("view-password");
        input.classList.toggle("text");

        if (input && input.classList.contains("text")) {
            input.setAttribute('type', 'text');
        } else {
            input.setAttribute('type', 'password');
        }
    }

    render() {

        let buttonState = true;

        if (this.state.valueEmail && this.state.valuePassword) {
            buttonState = false;
        }

        return (

            <main className="main">
                <div className="main__inner">
                    <div className="sign-up-content">
                        <div className="sign-up-content__container container">
                            <div className="sign-up-content__content">
                                <h1 className="sign-up-content__title title-sign">Connect your team with WorkFly</h1>
                                <p className="sign-up-content__sub-title-steps">Have no account?
                                    <Link style={{ color: "inherit" }} to="/Authentication/Register"> Registration</Link>
                                </p>
                            </div>
                            <div className="sign-up-content__media-bottom">
                                <img src={illustration} alt="" className="sign-up-content__media-bottom-image" />
                            </div>
                        </div>
                    </div>
                    <form method="LINK" action="/Dashboard" className="sign-up-form">
                        <h3 className="sign-up-form__title">Welcome back!</h3>
                        <h4 className="sign-up-form__sub-title">
                            Please, enter your e-mail or phone number to login
                        </h4>

                        <label htmlFor="email-or-phone-form" className="sign-up-form__label">
                            <span className="sign-up-form__label-text">E-mail or phone number</span>
                            <input
                                onChange={this.setEmailInput}
                                value={this.state.valueEmail}
                                id="email-or-phone-form"
                                type="text"
                                className="sign-up-form__input"
                                autoFocus="autoFocus"
                            />
                            <span className="sign-up-form__warning-text">Wrong e-mail</span>
                        </label>

                        <label htmlFor="print-password-form" className="sign-up-form__label">
                            <span className="sign-up-form__label-text">Password</span>
                            <input
                                onChange={this.setPasswordInput}
                                value={this.state.valuePassword}
                                data-view-password-input="2"
                                id="print-password-form"
                                type="password"
                                className="sign-up-form__input"
                                placeholder="Password"
                            />
                            <button
                                data-view-password-button="2"
                                onClick={this.viewPasswordInput}
                                className="sign-up-form__button-view-password"
                            ></button>
                            <span className="sign-up-form__warning-text">Please, enter your company name</span>
                        </label>

                        <button disabled={buttonState} className="sign-up-form__button-submit btn-blue">Sign in</button>

                        <div className="sign-up-form__bottom-link-text">
                            You have a code?
                            <Link className="sign-up-form__bottom-link" to="/Authentication/Signin">Join your team</Link>
                            .
                        </div>
                    </form>
                </div>
            </main>

        )

    }

}

export default SignIn;