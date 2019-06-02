import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Genre.scss";

import { connect } from 'react-redux';

class Genre extends Component {
  render() {

    const { navToggle } = this.props; console.log(navToggle);

    return (
      <div className="genre" style={{ display: navToggle ? null : 'block' }}>
        <span className="title">Genre</span>
        <div className="items flex column">
          <Link to="" className="item">
            Action
          </Link>
          <Link to="" className="item">
            Horror
          </Link>
          <Link to="" className="item">
            Comedy
          </Link>
          <Link to="" className="item">
            Adventure
          </Link>
          <Link to="" className="item">
            Drama
          </Link>
          <Link to="" className="item">
            Sci-Fi
          </Link>
          <Link to="" className="item">
            More
          </Link>
        </div>
        <span className="title">Pages</span>
        <div className="items flex column">
          <Link to="" className="item">
            Movies
          </Link>
          <Link to="" className="item">
            Tv Shows
          </Link>
          {
            localStorage.getItem('username') !== 'null'
              ?
              <Link to="/profile" className="item">
                Profile
          </Link>
              :
              <React.Fragment>
                <Link to="/login" className="item">
                  Login
          </Link>
                <Link to="/register" className="item">
                  Register
          </Link>
              </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ index, auth }) => {
  return {
    navToggle: index.navToggle,
    loggedIn: auth.loggedIn,
  }
}

export default connect(mapStateToProps)(Genre)
