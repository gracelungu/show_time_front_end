import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import "./Header.scss";
import menu from "../../assets/icons/menu.png";

import { logout } from '../../actions/profile';

import { connect } from 'react-redux';

import avatar from "../../assets/images/avatar.png";

class Header extends Component {

  toggleNav() {
    this.props.toggleNav();
  }

  async handleLogout() {
    await this.props.logout();
    window.location.reload();
  }

  render() {

    return (
      <header className="flex justify-between align-center">
        <div className="logo flex align-center">
          {
            !this.props.hideMenu
              ?
              <img src={menu} width="18px" height="auto" alt="" onClick={() => this.toggleNav()} />
              :
              null
          }
          <Link to="/"><span >LOGO</span></Link>
        </div>

        {
          !this.props.hideSearch
            ?
            <div className="search">
              <input type="text" placeholder="Search.." />
            </div>
            :
            null
        }

        <nav className="flex align-center" >
          <div className="links" >

            <Link to="" className="item active">
              Movies
            </Link>
            <Link to="" className="item">
              Tv Shows
            </Link>
          </div>

          {
            localStorage.getItem('username') !== 'null'
              ?
              <React.Fragment>
                <Link to="#" className="item " onClick={() => this.handleLogout()}>
                  Logout
                </Link>
                <Link to="/profile"><div className="profile" style={{ backgroundImage: `url(${this.props.picture || avatar})` }}></div></Link>

              </React.Fragment>
              :
              <div>
                <Link to="/signup" className="btn btn-small btn-outline text-primary">
                  REGISTER
              </Link>
                <Link to="/login" className="btn btn-small primary text-white">
                  LOGIN
              </Link>
              </div>
          }
        </nav>
      </header>
    );
  }
}

const mapStateToProps = ({ index, auth, profile }) => {
  return {
    navToggle: index.navToggle,
    loggedIn: auth.loggedIn,
    picture: profile.user.picture
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleNav: () => { dispatch({ type: 'TOGGLE_NAV' }) },
    logout: () => { dispatch(logout()) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
