import React, { Component } from "react";
import "./Suggests.scss";

import green from "../../assets/images/green.png";

class Suggests extends Component {
    render() {
        return (
            <section className="suggests">
                <div className="title">
                    New Trailers
                </div>
                <div className="items">
                    <div className="item">
                        <div className="image" style={{ backgroundImage: `url(${green})` }}></div>
                        <div className="title">Marvel Studios' Avengers:
                            Endgame - Official Trailer
                        </div>
                    </div>
                    <div className="item">
                        <div className="image" style={{ backgroundImage: `url(${green})` }}></div>
                        <div className="title">Marvel Studios' Avengers:
                            Endgame - Official Trailer
                        </div>
                    </div>
                    <div className="item">
                        <div className="image" style={{ backgroundImage: `url(${green})` }}></div>
                        <div className="title">Marvel Studios' Avengers:
                            Endgame - Official Trailer
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Suggests;
