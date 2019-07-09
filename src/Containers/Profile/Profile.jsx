import React, { Component } from 'react';
import './Profile.scss';

import Header from '../../Components/Header/Header';
import Spinner from '../../Components/Spinner/Spinner';

import avatar from "../../assets/images/avatar.png";

import { connect } from 'react-redux';

import { getProfile, updateProfile } from '../../actions/profile';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.form = React.createRef();

        this.state = {
            username: '',
            picture: 'https://avatars2.githubusercontent.com/u/46924450?s=400&u=38c326678bcf1bd64ed1c226e02854ea9fa22aa0&v=4'
        }
    }

    async componentWillMount() {
        const username = localStorage.getItem('username');
        if (username === 'null') {
            this.props.history.push('/');
            return;
        }

        await this.props.getProfile(username);
    }

    render() {
        return (
            <section className="profile">
                <Header hideSearch={true} hideMenu={true}></Header>

                <div className="flex justify-center">
                    <div className="info flex justify-center column ">
                        <div className=" ">
                            <div className="title ">Profile <Spinner visible={this.props.loading} size="20"></Spinner></div>
                            {this.props.error ? <div className="error">{this.props.error}</div> : null}
                        </div>
                        <div className="details flex">
                            <div className="profile" style={{ backgroundImage: `url(${this.props.user.picture || avatar})` }}></div>
                            <div>
                                <div className="username">{this.props.user.username} <Spinner visible={this.props.loading} size="20"></Spinner></div>
                                <div className="email">{this.props.user.email} <Spinner visible={this.props.loading} size="20"></Spinner></div>

                                <form action="" ref={this.form} onSubmit={e => e.preventDefault()}>
                                    <div className="subtitle">Update</div>
                                    <div className="field">
                                        <div className="label">Username</div>
                                        <input type="text" placeholder="ex: batman" required minLength="4" onChange={(e) => this.setState({ ...this.state, username: e.target.value })} />
                                    </div>
                                    <div className="btn primary text-white" onClick={() => this.form.current.reportValidity() ? this.props.updateProfile({ username: this.state.username, picture: this.state.picture }) : null}>
                                        Update
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }

}

const mapStateToProps = ({ profile }) => {
    const { user, loading, error, } = profile;
    return {
        user,
        loading,
        error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfile: (username) => dispatch(getProfile(username)),
        updateProfile: ({ picture, username }) => dispatch(updateProfile({ picture, username }))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);