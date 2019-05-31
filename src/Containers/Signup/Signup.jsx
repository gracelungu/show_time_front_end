import React, { Component } from "react";
import "./Signup.scss";
import { Link } from 'react-router-dom';
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import Spinner from '../../Components/Spinner/Spinner';

import { connect } from 'react-redux';

import { emailAuth } from '../../actions/emailAuth';

class Signup extends Component {

  constructor(props) {
    super(props);

    this.form = React.createRef();

    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  onSubmit = (user) => {
    this.props.signup(user).then((res) => {

      if (res.status !== 201) {
        console.log(res.data.message);
        return;
      }

      this.props.history.push('/');

    });
  }

  render() {
    return (
      <section className="signup-page flex justify-center align-center">
        <div className="signup ">
          <div className="top flex justify-between align-start">
            <div>
              <div className="title flex align-center">
                <span>Create an account</span>
                <Spinner visible={this.props.loading} size="20"></Spinner>
              </div>
              <div className="subtitle">Register to join us</div>
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
                <div className="label">Username</div>
                <input type="text" placeholder="ex : batman, hulk008" required minLength="4" onChange={(e) => this.setState({ ...this.state, username: e.target.value })} />
              </div>
              <div className="field">
                <div className="label">Email</div>
                <input type="email" required onChange={(e) => this.setState({ ...this.state, email: e.target.value })} />
              </div>
            </div>
            <div className="section">
              <div className="field">
                <div className="label">Password</div>
                <input type="password" placeholder="Min character 6" required minLength="6" onChange={(e) => this.setState({ ...this.state, password: e.target.value })} />
              </div>
              <div className="btn primary text-white" onClick={() => this.form.current.reportValidity() ? this.onSubmit(this.state) : null}>
                REGISTER
                            </div>
              <div className="other">
                <span>Already have an account ? </span> <Link to="/login"><b>Login</b></Link>
              </div>
            </div>
          </form>
        </div>
      </section>
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
    signup: (user) => dispatch(emailAuth(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
