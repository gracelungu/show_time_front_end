import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";


import "./Classic.scss";

import bumb from "../../assets/images/bumb.jpg";
import avg from "../../assets/images/avg.jpg";
import aqua from "../../assets/images/aqua.jpg";
import starFilled from "../../assets/icons/star-filled.png";
import starOutline from "../../assets/icons/star-outline.png";

class Classic extends Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      centerMode: false,
      dots: false,
      fade: true,
      focusOnSelect: true
    };

    return (
      <Slider {...settings} className="classic ">
        <div>
          <div
            className="item flex align-end"
            style={{ backgroundImage: `url(${bumb})` }}
          >
            <div className="shade flex justify-between column ">
              <div>
                <div className="title">
                  Bumble bee Transformers <br />
                  Official trailer
                </div>
                <div className="rates ">
                  <img src={starFilled} width="17px" height="auto" alt="" />
                  <img src={starFilled} width="17px" height="auto" alt="" />
                  <img src={starFilled} width="17px" height="auto" alt="" />
                  <img src={starFilled} width="17px" height="auto" alt="" />
                  <img src={starOutline} width="17px" height="auto" alt="" />
                </div>
              </div>
              <div>
                <div className="btn-special">IN CINEMA</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="item flex align-end"
            style={{ backgroundImage: `url(${avg})` }}
          >
            <div className="shade flex justify-between column">
              <div>
                <div className="title">
                  Avengers End Game <br />
                  Official trailer
                </div>
                <div className="rates ">
                  <img src={starFilled} width="17px" height="auto" alt="" />
                  <img src={starFilled} width="17px" height="auto" alt="" />
                  <img src={starFilled} width="17px" height="auto" alt="" />
                  <img src={starFilled} width="17px" height="auto" alt="" />
                  <img src={starOutline} width="17px" height="auto" alt="" />
                </div>
              </div>
              <div>
                <div className="btn-special">UPCOMING</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="item flex align-end"
            style={{ backgroundImage: `url(${aqua})` }}
          >
            <div className="shade flex justify-between column">
              <div>
                <div className="title">
                  Aquaman <br />
                  Official trailer
                </div>
                <div className="rates ">
                  <img src={starFilled} width="17px" height="auto" alt="" />
                  <img src={starFilled} width="17px" height="auto" alt="" />
                  <img src={starFilled} width="17px" height="auto" alt="" />
                  <img src={starFilled} width="17px" height="auto" alt="" />
                  <img src={starOutline} width="17px" height="auto" alt="" />
                </div>
              </div>
              <div>
                <div className="btn-special">NEW</div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Classic;
