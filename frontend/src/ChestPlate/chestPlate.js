import React from "react";
import { Link } from "react-router-dom";
import "./chestPlate.css";
import baseURL from "../shared/baseURL";
class ChestPlate extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      your_name: "",
      contact_no: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(target.name);
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(data) {
    console.log(data+"hghghghgh");
    fetch(baseURL + "book_chessPlate", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Contact us >>>>>>>>>>>>>>>>>>", error.message);
      });
  }

  render() {
    return (
      <div class="container main-pay">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6">
            <h3 class="headerpay">Fill Information to Order Chess Plate</h3>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Enter Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  name="your_name"
                  value={this.state.your_name}
                  onChange={this.handleInputChange}
                />
                <small id="emailHelp" class="form-text text-muted">
                  Please enter the name that you want on chess plate.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Whatsapp No:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Contact no"
                  name="contact_no"
                  value={this.state.contact_no}
                  onChange={this.handleInputChange}
                />
                <small id="emailHelp" class="form-text text-muted">
                  We are taking this number for verification.
                </small>
              </div>

              <div class="form-group form-sub">
              <Link to="/success_chestPlate">
                <button type="submit" class="btn btn-secondary btn-lg btn-sub" onClick={()=>this.handleSubmit({
                  your_name: this.state.your_name,
                  contact_no: this.state.contact_no
                })}>
                  Submit
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6 col-payg align-items-center">
            <h4 class="headerpay">Online Payment Method</h4>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-sm-3 col-pay">
            <img
              src="./PaymentIcons/phonepe.png"
              class="imagepay"
              alt="Italian Trulli"
            />
            <p class="parapay">Upi id: 7340234190@ybl</p>
            <p class="parapay">PhonePe No: 7340234190</p>
          </div>
          <div class="col-12 col-sm-3 col-pay">
            <img
              src="./PaymentIcons/paytm.png"
              class="imagepay"
              alt="Italian Trulli"
            />
            <p class="parapay">Upi id: 7340234190@paytm</p>
            <p class="parapay">G-Pay No: 7340234190</p>
          </div>
          <div class="col-12 col-sm-3 col-pay">
            <img
              src="./PaymentIcons/gpay.png"
              class="imagepay"
              alt="Italian Trulli"
            />
            <p class="parapay">Upi id: utkarshagrawal2022@oksbi</p>
            <p class="parapay">G-Pay No: 7340234190</p>
          </div>
          <div class="col-12 col-sm-3 col-pay">
            <img
              src="./PaymentIcons/amazonpay.png"
              class="imagepay"
              alt="Italian Trulli"
            />
            <p class="parapay">Upi id: 7340234190@apl</p>
            <p class="parapay">Amazon Pay No: 7340234190</p>
          </div>
        </div>
        <div class="row row-succ">
          <div class="col-12">
            <p class="parapu">
              Note: After successful payment plz send your payment receipt
              screenshot on this no. 6377552654{" "}
            </p>
          </div>
        </div>
        <div class="row row-query">
          <div class="col-12">
            <p class="paracon">
              For any query plz contact:<b>6377552654</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ChestPlate;
