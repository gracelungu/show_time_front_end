import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import menu from "../../assets/icons/menu.png";

class Header extends Component {
  render() {
    return (
      <header className="flex justify-between align-center">
        <div className="logo flex align-center">
          <img
            src="../assets/icons/menu.png"
            width="20px"
            height="auto"
            alt=""
          />
          <img src={menu} width="18px" height="auto" alt="" />
          <span>LOGO</span>
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

export default Header;
