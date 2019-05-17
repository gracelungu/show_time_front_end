import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Genre.scss";

class Genre extends Component {
  render() {
    return (
      <div className="genre">
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

export default Genre;
