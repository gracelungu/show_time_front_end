import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Genre.scss";

import { connect } from 'react-redux';

class Genre extends Component {
  render() {

    const { navToggle } = this.props;

    return (
      <div className="genre" style={{ display: navToggle ? 'none' : 'block' }}>
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
          <Link to="" className="item">
            Login
          </Link>
          <Link to="" className="item">
            Register
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navToggle: state.navToggle
  }
}

export default connect(mapStateToProps)(Genre)
