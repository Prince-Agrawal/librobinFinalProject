import React, { Component } from "react";

import Navbar from "./Navbar/navbar";

import CustomizedTables from "./Stationary/CardDetails/Card";
import { BrowserRouter  } from "react-router-dom";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import About from "./AboutUs/about";
import Contact from "./ContactUs/contactUs";
import Footer from "./Footer/footer";
import ToolBar from "./ToolBarComponent";
import Upload from "./Upload/Upload";
import Sell from "./SellerSection/sell";
import Buy from "./BuyerSection/Buyer";
import MobileFilter from "./BuyerSection/mobileFilter";
import Description from "./SellerSection/description";
import Forgot from "./Root/Forgot";
import SignUp from "./Root/SignUp";
import SignIn from "./Root/Login";
import Profile from "./Root/Profile";
import Thanks from "./Greeting/thanks"
import ChangePassword from "./Root/ChangePassword";
import baseUrl from "./shared/baseURL";
import Active from "./active";
// import LandingPage from "./LandingPage/landing"
import HowItWorkBuy from "./HowItWork/buy"
import HowItWorkSell from "./HowItWork/sell"
import HowItWorkShopkeeper from "./HowItWork/shopkepper"
import BuyStationary from "./Stationary/Stationary"
import yourOrder from "./Stationary/YourOrder/yourOrders"
import yourSingleOrder from "./Stationary/YourOrder/singel_order"
import CardDetail from "./Stationary/CardDetails/Card"
import LandingPage from "./LandingPage/LandingPage"
import poster from "./LandingPage/poster"
import chestPlate from "./ChestPlate/chestPlate"
import chestPlateSuccess from "./ChestPlate/registerSuccess"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBooks: [],
      open: false,
      isFooterShow: true,
      error: false,
    };
    this.setBooks = this.setBooks.bind(this);
  }

  handelFooterVisibility = (val) => {
    // console.log("ffffffffffffffffffffff");
    this.setState({
      isFooterShow: val,
    });
  };

  setOpen = (value) => {
    this.setState({
      open: value,
    });
  };
  setBooks = async (value) => {
    console.log("set books------");
    try {
      const inputVal = {
        search_field: value,
      };
      const res = await fetch(baseUrl + "book", {
        method: "POST",
        body: JSON.stringify(inputVal),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      });
      const response = await res.json();

      this.setState({
        searchBooks: response,
      });
      // console.log(">>>>>>>>>>>>>>>>................." , response);
    } catch (e) {
      console.log("setBooks error_________________", e);
      // throw new Error("Opss!");
      this.setState({
        error: true,
      });
    }

    // console.log(this.state.searchBooks)
  };

  componentDidMount() {
    this.setBooks("");
  }

  render() {
    console.log("+++++++++++++++++++++++++++++++", this.state.open);
    if (this.state.error === true) {
      return (
        <p>Something went wrong</p>
        );
    } else
      return (
        <div>
          <BrowserRouter>
            <Navbar
              setBooks={this.setBooks}
              open={this.state.open}
              setOpen={this.setOpen}
            />
            <ToolBar />
            <marquee scrollamount="8">
              You can buy books and stationary items directly from whatsapp to order 
              <a href="https://wa.link/4t9h9n">
                <strong> click here</strong>{" "}
              </a>
            </marquee>
            <div
              onClick={() => {
                this.setOpen();
              }}
            >
              <Switch>
                <Route
                  exact path="/"
                  component={LandingPage}
                />
                <Route exact path="/temp" component={poster} />
                <Route exact path="/contact" component={Contact} />

                <Route exact path="/aboutUs" component={About} />
                <Route exact path="/upload" component={Upload} />
                <Route exact path="/sell" component={Sell} />
                <Route exact path="/card_detail" component={CardDetail} />
                <Route exact path="/buy">
                  {" "}
                  <Buy
                    handelFooterVisibility={this.handelFooterVisibility}
                  />{" "}
                </Route>
                <Route exact path="/book_chestPlate" component={chestPlate} />
                <Route exact path="/success_chestPlate" component={chestPlateSuccess} />
                <Route exact path="/buy_stationary" component={BuyStationary} />
                <Route exact path="/your_orders" component={yourOrder} />
                <Route exact path="/description" component={Description} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={SignIn} />
                <Route path="/profile" component={Profile} />
                <Route path="/forgot" component={Forgot} />
                <Route path="/change_password" component={ChangePassword} />
                <Route path="/mobile_filter" component={MobileFilter} />
                <Route path="/active" component={Active} />
                <Route path="/buy_help" component={HowItWorkBuy} />
                <Route path="/sell_help" component={HowItWorkSell} />
                <Route path="/shopkeeper_help" component={HowItWorkShopkeeper} />
                yourSingleOrder
                <Route path="/order_detail" component={yourSingleOrder} />
              
                
                <Redirect to="/" />
              </Switch>
            </div>
            <div
              onClick={() => {
                this.setOpen(false);
              }}
            >
              {this.state.isFooterShow === true && <Footer />}
            </div>
          </BrowserRouter>
        </div>
      );
  }
}

export default App;
