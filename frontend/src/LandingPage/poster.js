import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./poster.css"

export default class slid extends React.Component {
  render() {
    return (
      <Carousel>
        <div className="poster-image">
          <img src="./LandingImage/poster.jpeg" />
        </div>
        <div className="poster-image">
          <img src="./LandingImage/poster.jpeg" />
        </div>
        <div className="poster-image">
          <img src="./LandingImage/poster.jpeg" />
        </div>
      </Carousel>
    );
  }
}
