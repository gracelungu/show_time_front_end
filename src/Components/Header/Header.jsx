import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import menu from "../../assets/icons/menu.png";

import { connect } from 'react-redux';

class Header extends Component {
  toggleNav() {
    this.props.toggleNav();
  }

  render() {

    return (
      <header className="flex justify-between align-center">
        <div className="logo flex align-center">
          <img src={menu} width="18px" height="auto" alt="" onClick={() => this.toggleNav()} />
          <span >LOGO</span>
        </div>
        <div className="search">
          <input type="text" placeholder="Search.." />
        </div>
        <nav className="flex align-center">
          <div className="links">
            <Link to="" className="item active">
              Movies
            </Link>
            <Link to="" className="item">
              Tv Shows
            </Link>
          </div>
          <Link to="" className="btn btn-small btn-outline text-primary">
            REGISTER
          </Link>
          <Link to="" className="btn btn-small primary text-white">
            LOGIN
          </Link>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    navToggle: state.navToggle
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleNav: () => { dispatch({ type: 'TOGGLE_NAV' }) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);