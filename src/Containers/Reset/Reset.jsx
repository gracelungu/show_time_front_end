import React, { Component } from "react";

class Reset extends Component {
    render() {
        return (
            <section className="login-page flex justify-center align-center">
                <div className="login ">
                    <div className="top flex justify-between align-start">
                        <div>
                            <div className="title">Reset password</div>
                            <div className="subtitle">An email containing the link to reset the password
                                will be sent to this address
                            </div>
                        </div>
                    </div>
                    <form action="" class="flex justify-between">
                        <div className="section">
                            <div className="field">
                                <div className="label">Email</div>
                                <input type="email" placeholder="" />
                            </div>
                            <div className="btn primary text-white">
                                SEND
                            </div>
                            <div className="other">
                                <span>Don't have an account ? </span> <b>Register</b>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Reset;
