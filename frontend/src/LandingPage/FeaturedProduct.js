import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./FeaturedProduct.css";

export class FeaturedProduct extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div>
        <div className="container">
        <div class="row row-head">
        <div class="col-12  col-sm-3">
        
        </div>
        <div class="col-12  col-sm-6 col-edit">
         <h3>FEATURED PRODUCT</h3>
        </div>
        <div class="col-12  col-sm-3">
         
        </div>
      </div>
        </div>
        <Carousel responsive={responsive}>
          <div>
            <img
              src="./LandingImage/land1.jpg"
              className="featureImage"
              alt="Logo"
            />
          </div>
          <div>
            <img
              src="./LandingImage/land2.jpg"
              className="featureImage"
              alt="Logo"
            />
          </div>
          <div>
            <img
              src="./LandingImage/land3.jpg"
              className="featureImage"
              alt="Logo"
            />
          </div>
          <div>
            <img
              src="./LandingImage/land4.jpg"
              className="featureImage"
              alt="Logo"
            />
          </div>
          <div>
          <img
            src="./LandingImage/land5.jpg"
            className="featureImage"
            alt="Logo"
          />
        </div>
        </Carousel>
        ;
      </div>
    );
  }
}

export default FeaturedProduct;
