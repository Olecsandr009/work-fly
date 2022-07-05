import React from 'react';
import { Link } from 'react-router-dom'

import illustration from "../../files/img/illustration.svg";

export default class VerificationCode extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            timer: 26,
            valueInput1: "",
            valueInput2: "",
            valueInput3: "",
            valueInput4: "",
        }

        this.setValueInput1 = this.setValueInput1.bind(this);
        this.setValueInput2 = this.setValueInput2.bind(this);
        this.setValueInput3 = this.setValueInput3.bind(this);
        this.setValueInput4 = this.setValueInput4.bind(this);
    }

    setValueInput1(event) {
        this.setState({ valueInput1: event.target.value })
    }
    setValueInput2(event) {
        this.setState({ valueInput2: event.target.value })
    }
    setValueInput3(event) {
        this.setState({ valueInput3: event.target.value })
    }
    setValueInput4(event) {
        this.setState({ valueInput4: event.target.value })
    }

    render() {

        let buttonState = true;

        if (this.state.valueInput1 && this.state.valueInput2 && this.state.valueInput3 && this.state.valueInput4) {
            buttonState = false;
        }

        let timerID = window.setTimeout(() => {
            this.setState({ timer: this.state.timer -= 1 })
        }, 1000)

        let styleTimer

        let stylePadding

        if (!this.state.timer) {
            styleTimer = {
                display: "none"
            }
            stylePadding = {
                paddingBottom: "24px"
            }
            clearTimeout(timerID)
        }

        return (
            <main className="main">
                <div className="main__inner">
                    <div className="sign-up-content">
                        <div className="sign-up-content__container container">
                            <div className="sign-up-content__content">
                                <h1 className="sign-up-content__title title-sign">Connect your team with WorkFly</h1>
                                <p className="sign-up-content__sub-title-steps"><span>2</span>/3 Please, verificate your e-mail</p>

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

                    <form method='LINK' action="/Authentication/Register/Registration" className="sign-up-form">
                        <h3 className="sign-up-form__title">Verification code</h3>
                        <h4 className="sign-up-form__sub-title">
                            Please, enter the code we sent to the e-mail company@company.com
                        </h4>

                        <label htmlFor="number-form1" className="sign-up-form__label number">
                            <input value={this.state.valueInput1} onChange={this.setValueInput1} inputMode="numeric" maxLength="1" type="text" id="number-form1" className="sign-up-form__input-number" />
                            <input value={this.state.valueInput2} onChange={this.setValueInput2} inputMode="numeric" maxLength="1" type="text" id="number-form1" className="sign-up-form__input-number" />
                            -
                            <input value={this.state.valueInput3} onChange={this.setValueInput3} inputMode="numeric" maxLength="1" type="text" id="number-form1" className="sign-up-form__input-number" />
                            <input value={this.state.valueInput4} onChange={this.setValueInput4} inputMode="numeric" maxLength="1" type="text" id="number-form1" className="sign-up-form__input-number" />
                        </label>

                        <button disabled={buttonState} className="sign-up-form__button-submit btn-blue">Continue</button>

                        <div style={styleTimer} className="sign-up-form__timer">00:{this.state.timer}</div>

                        <div style={stylePadding} className="sign-up-form__bottom-link-text">
                            Didn't receive an email?
                            <Link className='sign-up-form__bottom-link' to="/Register/Verification-code"> Resend</Link>
                        </div>
                    </form>
                </div>
            </main>
        )

    }

}