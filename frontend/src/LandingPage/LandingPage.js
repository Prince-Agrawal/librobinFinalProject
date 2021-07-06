import React, { useState, Component } from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import BuyBanner from "./banner";
import "./LandingPage.css";
import FeaturedProduct from "./FeaturedProduct";
// import poster from "./Poster";

class LandingPage extends Component {
  render() {
    return (
      <div>
        {" "}
        <BuyBanner />
       
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-4 col-one">
              <h3 class="header">Staitonary Items</h3>
              <img src="./LandingImage/stationary1.jpeg" class="golimg" />
              <p class="parad">
                Spiral/Non-Spiral Notebook , Rough Register , Pens , Pencils ,
                Highlighter etc
              </p>
              <a href="/buy_stationary">
                <button type="button" class="btn btn-outline-dark">
                  Buy Stationary
                </button>
              </a>
            </div>
            <div class="col-12 col-sm-4 col-one">
              <h3 class="header">Old/New Books</h3>
              <img src="./LandingImage/buy1.jpeg" class="golimg" />
              <p class="parad">
                Kota coaching study material , medical books ,
                science/commerce/arts all competition exam
              </p>
              <a href="/buy">
                <button type="button" class="btn btn-outline-dark">
                  Buy Now
                </button>
              </a>
            </div>
            <div class="col-12 col-sm-4 col-one">
              <h3 class="header">Sell Books</h3>
              <img src="./LandingImage/sell1.jpeg" class="golimg" />
              <p class="parad">
                Sell all streams science/commerce/arts books easily
              </p>
              <a href="/sell">
                <button type="button" class="btn btn-outline-dark">
                  Sell Now
                </button>
              </a>
            </div>
            <div class="col-12 col-sm col-one">
              <h3 class="header">Chess Plate</h3>
              <img src="./LandingImage/namePlate.png" class="golimg" />
              <p class="parad">
                Chess Plate for MBBS students in only 60Rs.
              </p>
              <a href="/book_chestPlate">
                <button type="button" class="btn btn-outline-dark">
                  Book Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <FeaturedProduct />
      </div>
    );
  }
}
export default LandingPage;
