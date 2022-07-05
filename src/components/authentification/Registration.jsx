import React from 'react';
import { Link } from 'react-router-dom';

import illustration from "../../files/img/illustration.svg";

export default class Registration extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            valueFullName: '',
            valueCompanyName: '',
            valuePassword: ''
        }

        this.setValueFullName = this.setValueFullName.bind(this);
        this.setValueCompanyName = this.setValueCompanyName.bind(this);
        this.setValuePassword = this.setValuePassword.bind(this);
    }

    setValueFullName(event) {
        this.setState({ valueFullName: event.target.value })
    }

    setValueCompanyName(event) {
        this.setState({ valueCompanyName: event.target.value })
    }

    setValuePassword(event) {
        this.setState({ valuePassword: event.target.value })
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

        if (this.state.valueFullName && this.state.valueCompanyName && this.state.valuePassword) {
            buttonState = false;
        }

        return (
            <main className="main">
                <div className="main__inner">
                    <div className="sign-up-content">
                        <div className="sign-up-content__container container">
                            <div className="sign-up-content__content">
                                <h1 className="sign-up-content__title title-sign">Connect your team with WorkFly</h1>
                                <p className="sign-up-content__sub-title-steps"><span>3</span>/3 Company details</p>

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

                    <form method='LINK' action="/Dashboard" className="sign-up-form">
                        <h3 className="sign-up-form__title">Company details</h3>

                        <label htmlFor="full-name-form" className="sign-up-form__label">
                            <span className="sign-up-form__label-text text-star">Full name</span>
                            <input value={this.state.valueFullName} onChange={this.setValueFullName} id="full-name-form" type="text" className="sign-up-form__input" placeholder="Text" />
                            <span className="sign-up-form__warning-text">Please, enter your full name</span>
                        </label>

                        <label htmlFor="company-name-form" className="sign-up-form__label">
                            <span className="sign-up-form__label-text text-star">Company name</span>
                            <input value={this.state.setValueCompanyName} onChange={this.setValueCompanyName} id="company-name-form" type="text" className="sign-up-form__input" placeholder="Text" />
                            <span className="sign-up-form__warning-text">Please, enter your company name</span>
                        </label>

                        <label htmlFor="employees-form" className="sign-up-form__label">
                            <span className="sign-up-form__label-text">Amout of employees</span>
                            <select id="employees-form" className="sign-up-form__input select">
                                <option defaultValue disabled value="1">Choose</option>
                                <option value="2">0-10</option>
                                <option value="3">10-20</option>
                                <option value="4">20-40</option>
                                <option value="5">50+</option>
                            </select>
                            <span className="sign-up-form__warning-text">warning</span>
                        </label>

                        <label htmlFor="password-form" className="sign-up-form__label">
                            <span className="sign-up-form__label-text text-star">Password</span>
                            <input value={this.state.valuePassword} onChange={this.setValuePassword} data-view-password-input="1" id="password-form" type="password" className="sign-up-form__input" placeholder="Create password" />
                            <button data-view-password-button="1" onClick={this.viewPasswordInput} className="sign-up-form__button-view-password"></button>
                            <span className="sign-up-form__warning-text">Password requerments</span>
                        </label>

                        <button disabled={buttonState} className="sign-up-form__button-submit btn-blue">Registration</button>

                        <div className="sign-up-form__bottom-link-text">
                            By continuing, you’re agreeing to our
                            <a href="#" className="sign-up-form__bottom-link blue">
                                Customer Terms of Service
                            </a>
                            , and
                            <a href="#" className="sign-up-form__bottom-link blue">
                                Privacy Policy
                            </a>
                            .
                        </div>
                    </form>
                </div>
            </main>
        )

    }

}