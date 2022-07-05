import React from 'react';
import { Link } from 'react-router-dom';

import illustration from "../../files/img/illustration.svg";

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            valueEmail: "",
            valuePhoneNumber: ""
        }

        this.setEmail = this.setEmail.bind(this);
        this.setPhoneNumber = this.setPhoneNumber.bind(this);
    }

    setEmail(event) {
        this.setState({ valueEmail: event.target.value })
    }

    setPhoneNumber(event) {
        this.setState({ valuePhoneNumber: event.target.value })
    }

    render() {

        let buttonState = true;

        if (this.state.valueEmail && this.state.valuePhoneNumber) {
            buttonState = false;
        }

        return (
            <main className="main">
                <div className="main__inner">
                    <div className="sign-up-content">
                        <div className="sign-up-content__container container">
                            <div className="sign-up-content__content">
                                <h1 className="sign-up-content__title title-sign">Connect your team with WorkFly</h1>
                                <p className="sign-up-content__sub-title-steps"><span>1</span>/3 - Registration</p>

                                <p className="sign-up-content__sign-in">
                                    Already have an accout?
                                    <Link className="sign-up-content__sign-in-link" to="/Authentication/Signin">Sign in</Link>
                                </p>
                            </div>
                            <div className="sign-up-content__media-bottom">
                                <img src={illustration} alt="" className="sign-up-content__media-bottom-image" />
                            </div>
                        </div>
                    </div>

                    <form method="LINK" action="/Authentication/Register/Verification-code" className="sign-up-form">
                        <h3 className="sign-up-form__title">Welcome</h3>
                        <h4 className="sign-up-form__sub-title">
                            lets get started with a few simple steps!
                        </h4>

                        <label htmlFor="email-form" className="sign-up-form__label">
                            <span className="sign-up-form__label-text text-star">E-mail</span>
                            <input value={this.state.valueEmail} onChange={this.setEmail} id="email-form" type="email" className="sign-up-form__input" autoFocus="autofocus" />
                            <span className="sign-up-form__warning-text">Please, enter your work e-mail</span>
                        </label>

                        <label htmlFor="phone-form" className="sign-up-form__label">
                            <span className="sign-up-form__label-text text-star">Phone number</span>
                            <input value={this.state.valuePhoneNumber} onChange={this.setPhoneNumber} id="phone-form" type="text" className="sign-up-form__input" placeholder="+1 (000) 000-0000" />
                            <span className="sign-up-form__warning-text">Please, enter your work phone number</span>
                        </label>

                        <button disabled={buttonState} className="sign-up-form__button-submit btn-blue">Get started</button>

                        <div className="sign-up-form__bottom-link-text">
                            You have a code?
                            <Link className="sign-up-form__bottom-link" to="/Authentication/Signin">Join your team</Link>
                        </div>
                    </form>
                </div>
            </main>
        )

    }

}