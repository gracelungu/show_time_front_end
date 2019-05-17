import React, { Component } from "react";
import "./Home.scss";

import Header from "../../Components/Header/Header";
import Genre from "../../Components/Genre/Genre";
import Classic from "../../Components/Classic/Classic";

class Home extends Component {
  render() {
    return (
      <section>
        <Header />

        <section className="body flex">
          <Genre />
          <div className="focus">
            <Classic />
          </div>
        </section>
      </section>
    );
  }
}

export default Home;
