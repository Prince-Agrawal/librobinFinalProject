import React from "react";
import "./buy.css";
class Thanks extends React.Component {
  render() {
    return (
      <div>
        <h4 className="buy-meth">Steps to Sell your Book</h4>
        <p className="sell_title">
          Sell your old book with the help of librobin.
        </p>

        <p className="sell_title">
          Enter your book details and price when buyer take interest in purchase
          your book then they will contact you. so please enter your contact
          number and gmail id correctly.
        </p>
        <ol>
          <li className="buy-meth1-inst">
            {" "}
            Click on <a href="/sell">Sell a Book</a> Section.
          </li>
          <li className="buy-meth1-inst"> Login/signUp (for new user).</li>
          <li className="buy-meth1-inst"> Click on + icon/button.</li>
          <li className="buy-meth1-inst"> Enter you book details and price.</li>
          <li className="buy-meth1-inst">
            {" "}
            Wait for buyer.
            <br />
            Interested buyer will contact you according to their requirement
          </li>
        </ol>
        <p className="sell_note">
          Note: If you facing any problem in uploading your book then you will
          contact us by <a href="https://wa.link/4t9h9n">Click here</a>
        </p>
      </div>
    );
  }
}

export default Thanks;
