import React from "react";
import "./buy.css";
class Thanks extends React.Component {
  render() {
    return (
      <div>
        <h4 className="buy-meth">Method-1 [Buy from Shop]</h4>
        <ol>
          <li className="buy-meth1-inst"> Click on <a href="/buy">Buy a Book</a> Section.</li>
          <li className="buy-meth1-inst"> Click on Buy from Shop Button.</li>
          <li className="buy-meth1-inst"> Fill the required information.</li>
          <li className="buy-meth1-inst"> Get order confirmation on your gmail.</li>
          <li className="buy-meth1-inst"> We wiil contact you asap.</li>
          [Note: Why we need your time -:<br /> Many seller registered on this website so
          we have to find which shopkepper will able to fulfill your requirement
          in minimum price with good discount.]
        </ol>
        <hr/>
        <h4 className="buy-meth">Method-2 [Buy from Website]</h4>
        <ol>
          <li className="buy-meth1-inst"> Click on <a href="/buy">Buy a Book </a>Section.</li>
          <li className="buy-meth1-inst"> Select book which you want to buy.</li>
          <li className="buy-meth1-inst"> After clicking you will get seller contact info below the book discription.</li>
          <li className="buy-meth1-inst"> Contact directly to seller.</li>
        </ol>
      </div>
    );
  }
}

export default Thanks;
