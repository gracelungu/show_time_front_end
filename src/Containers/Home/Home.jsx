import React, { Component } from "react";
import "./Home.scss";

import Header from "../../Components/Header/Header";
import Genre from "../../Components/Genre/Genre";
import Classic from "../../Components/Classic/Classic";
import Category from "../../Components/Category/Category";
import Suggests from "../../Components/Suggests/Suggests";

class Home extends Component {

  componentWillMount() {
    const token = localStorage.getItem('token');
  }

  render() {
    return (
      <section>
        <Header />

        <section className="body flex justify-between">

          <Genre />

          <div className="focus">
            <Classic />
            <Category />
            <Category />
          </div>

          <Suggests />

        </section>
      </section>
    );
  }
}



export default Home;
