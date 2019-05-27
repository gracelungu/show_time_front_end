import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Login.scss";

import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";

class Login extends Component {
    render() {
        return (
            <section className="login-page flex justify-center align-center">
                <div className="login ">
                    <div className="top flex justify-between align-start">
                        <div>
                            <div className="title">Login</div>
                            <div className="subtitle">Welcome again</div>
                        </div>
                        <div className="social flex align-center">
                            <img src={google} width="80px" height="80px" alt="" />
                            <img src={facebook} width="80px" height="80px" alt="" />
                        </div>
                    </div>
                    <form action="" class="flex justify-between">
                        <div className="section">
                            <div className="field">
                                <div className="label">Email</div>
                                <input type="email" placeholder="" />
                            </div>
                            <div className="field">
                                <div className="label">Password</div>
                                <input type="password" />
                            </div>
                            <div className="btn primary text-white">
                                LOGIN
                            </div>

                            <div className="other">
                                <span>Don't have an account ? </span> <Link to="/signup"><b>Register</b></Link>
                            </div>

                        </div>
                    </form>
                </div>
            </section >
        );
    }
}

export default Login;
