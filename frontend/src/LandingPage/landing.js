import React, { useState, Component } from "react";

import { Helmet } from "react-helmet";
import BuyBanner from "./banner";

import ShowMore from "../Greeting/showMore";
import "./landing.css";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <Helmet>
          <title>Librobin a book collection</title>
        </Helmet>
        <BuyBanner />
        <div className="container" id="container-banner">
          <div className="section-one">
            <h1 className="titulo-amarelo">
              {" "}
              Learning today for better tomorrow!{" "}
            </h1>

            <p className="paragrafo">
              {" "}
              Librobin is a platform which makes the communication easier
              between buyer and seller!
            </p>
            <div className="section-two-mobile"></div>
            <p className="paragrafo">
              {" "}
              <span className="span-bold">Librobin essential features: </span>
            </p>
            <div className="container-icons">
              <ul>
                <li class="listedit">Get books in exciting discount</li>
                <li class="listedit">
                  Upto 30% off on all stationery items (like: Notebook/Registers
                  , pencils etc) and free delivery above 499/- in Kota.
                </li>
                <li class="listedit">
                  <div className="banner-shop">For Buyer</div> – Get
                  books/stationery items in one visit at exciting price
                </li>
                <a href="/buy_help" target="_blank" className="click_here_sell">
                  Click here
                </a>{" "}
                to know procedure.
                <li class="listedit">Sell your old books easily </li>
                <a
                  href="/sell_help"
                  target="_blank"
                  className="click_here_sell"
                >
                  Click here
                </a>{" "}
                to know procedure.
                <li class="listedit">
                  <div className="banner-shop">For Shopkeeper</div> - Come &
                  join to get more customer
                </li>
                <a
                  href="/shopkeeper_help"
                  target="_blank"
                  className="click_here_sell"
                >
                  Click here
                </a>{" "}
                to know procedure.
                
                

                <li class="listedit">
                  <div className="banner-shop">Type of books :</div>
                  <h4 className="type_heading">SCIENCE</h4>
                  – All
                  NEET/JEE prep. Books and Paper
                  <br />
                  - Coaching Study Material
                  <br />
                  - MBBS Syllabus (UG/PG) Upto 25% off on MRP (Dissection box /
                  physio. kit / apron / stethoscope etc)
                  <br />
                  - B.Tech / M.Tech all books
                  <br />
                  <h4 className="type_heading">ARTS</h4>
                  - REET
                  <br />
                  - CTET
                  <br />
                  - RAILWAY <br />
                  - SSC / LDC <br />
                  - DELHI POLICE <br />
                  - HIGH COURT <br />
                  - PATWARI <br />
                  - CONSTABLE <br />
                  <h4 className="type_heading">COMMERCE</h4>
                  - CPT <br />
                  - IPCC 1st/2nd <br />
                  - CA / CS <br />
                  - B.Com / M.Com <br />
                  - MBA / BBA books <br />
                  - All other compititive exam papers and books <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Banner;
