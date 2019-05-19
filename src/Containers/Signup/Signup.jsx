import React, { Component } from "react";
import "./Signup.scss";

import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";

class Signup extends Component {
    render() {
        return (
            <section className="signup-page flex justify-center align-center">
                <div className="signup ">
                    <div className="top flex justify-between align-start">
                        <div>
                            <div className="title">Create an account</div>
                            <div className="subtitle">Register to join us</div>
                        </div>
                        <div className="social flex align-center">
                            <img src={google} width="80px" height="80px" alt="" />
                            <img src={facebook} width="80px" height="80px" alt="" />
                        </div>
                    </div>
                    <form action="" class="flex justify-between">
                        <div className="section">
                            <div className="field">
                                <div className="label">Username</div>
                                <input type="text" placeholder="ex : batman, hulk008" />
                            </div>
                            <div className="field">
                                <div className="label">Email</div>
                                <input type="email" />
                            </div>
                        </div>
                        <div className="section">
                            <div className="field">
                                <div className="label">Password</div>
                                <input type="password" placeholder="Min character 6" />
                            </div>
                            <div className="field">
                                <div className="label">Confirm password</div>
                                <input type="password" />
                            </div>
                            <div className="btn primary text-white">
                                REGISTER
                            </div>
                            <div className="other">
                                <span>Already have an account ? </span> <b>Login</b>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Signup;
