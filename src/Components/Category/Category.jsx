import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

import cap from "../../assets/images/cap.png";
import glass from "../../assets/images/glass.png";
import car from "../../assets/images/car.png";
import born from "../../assets/images/born.png";

import starFilled from "../../assets/icons/star-filled.png";

class Category extends Component {
  render() {
    return (
      <section className="category">
        <div className="top flex justify-between align-center">
          <div className="title">Weekly Top Rated Movies</div>
          <div className="more">See more </div>
        </div>

        <div className="items flex justify-start wrap">
          <div className="item">
            <div className="image" style={{ backgroundImage: `url(${cap})` }} />
            <div className="title">Captain Marvel</div>
            <div className="rate flex align-center">
              <div>
                <img src={starFilled} width="17px" height="auto" alt="" />
              </div>
              <div className="value">7.1</div>
            </div>
          </div>

          <div className="item">
            <div
              className="image"
              style={{ backgroundImage: `url(${glass})` }}
            />
            <div className="title">Captain Marvel</div>
            <div className="rate flex align-center">
              <div>
                <img src={starFilled} width="17px" height="auto" alt="" />
              </div>
              <div className="value">7.1</div>
            </div>
          </div>

          <div className="item">
            <div className="image" style={{ backgroundImage: `url(${car})` }} />
            <div className="title">Captain Marvel</div>
            <div className="rate flex align-center">
              <div>
                <img src={starFilled} width="17px" height="auto" alt="" />
              </div>
              <div className="value">7.1</div>
            </div>
          </div>

          <div className="item">
            <div
              className="image"
              style={{ backgroundImage: `url(${born})` }}
            />
            <div className="title">Captain Marvel</div>
            <div className="rate flex align-center">
              <div>
                <img src={starFilled} width="17px" height="auto" alt="" />
              </div>
              <div className="value">7.1</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Category;
