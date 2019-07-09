import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Login.scss";
import Spinner from '../../Components/Spinner/Spinner';

import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";

import { connect } from 'react-redux';

import { emailLogin } from '../../actions/login';

class Login extends Component {

    constructor(props) {
        super(props);

        this.form = React.createRef();

        this.state = {
            email: '',
            password: '',
        }
    }

    onSubmit = (user) => {
        this.props.login(user).then((res) => {

            if (res.status !== 200) {
                console.log(res.data.message);
                return;
            }

            // Set the token
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.user.username);

            this.props.history.push('/');

        });
    }

    render() {
        return (
            <section className="login-page flex justify-center align-center">
                <div className="login ">
                    <div className="top flex justify-between align-start">
                        <div>
                            <div className="title flex align-center">
                                <span>Login</span>
                                <Spinner visible={this.props.loading} size="20"></Spinner>
                            </div>
                            <div className="subtitle">Welcome again</div>
                            {this.props.error ? <div className="error">{this.props.error}</div> : null}
                        </div>
                        <div className="social flex align-center">
                            <img src={google} width="80px" height="80px" alt="" />
                            <img src={facebook} width="80px" height="80px" alt="" />
                        </div>
                    </div>
                    <form action="" className="flex justify-between" ref={this.form} onSubmit={e => e.preventDefault()}>
                        <div className="section">
                            <div className="field">
                                <div className="label">Email</div>
                                <input type="email" required onChange={(e) => this.setState({ ...this.state, email: e.target.value })} />
                            </div>
                            <div className="field">
                                <div className="label">Password</div>
                                <input type="password" required minLength="6" onChange={(e) => this.setState({ ...this.state, password: e.target.value })} />
                            </div>
                            <div className="btn primary text-white" onClick={() => this.form.current.reportValidity() ? this.onSubmit(this.state) : null}>
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

const mapStateToProps = ({ auth }) => {
    const { loading, error } = auth;
    return {
        loading,
        error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(emailLogin(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
