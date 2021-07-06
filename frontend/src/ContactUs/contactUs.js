import React, { Component } from "react";
import validator from "validator";
import { Helmet } from "react-helmet";
import { Form, Label, Button, Input, FormFeedback } from "reactstrap";
import "./contact.css";
import baseUrl from "../shared/baseURL";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Thanks from "../Greeting/thanks"


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      your_name: "",
      email: "",
      phone_no: "",
      message: "",
      touched: {
        your_name: false,
        email: false,
        phone_no: false,
        isSubmiit: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleBlur = (field) => (eve) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(target.name);
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    // alert(JSON.stringify(this.state));
    const contactInfo = {
      your_name: this.state.your_name,
      email: this.state.email,
      phone_no: this.state.phone_no,
      message: this.state.message,
    };
    const errors = this.validate(
      this.state.your_name,
      this.state.email,
      this.state.phone_no
    );

    // console.log("fffffffffffffff" , errors)
    if (
      errors.your_name === "" &&
      errors.email === "" &&
      errors.phone_no === ""
    ) {
      this.setState({
        isSubmiit: true,
      });
      fetch(baseUrl + "contactus", {
        method: "POST",
        body: JSON.stringify(contactInfo),
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
    } else {
      alert("please enter a valid format");
    }
  }
  validate(your_name, email, phone_no) {
    const errors = {
      your_name: "",
      email: "",
      phone_no: "",
    };

    if (this.state.touched.your_name && your_name.length < 3) {
      errors.your_name = "your_name should be >=3 character";
    }
    if (this.state.touched.email && !validator.isEmail(email)) {
      errors.email = "Enter valid email";
    }

    const reg = /^\d+$/;
    if (this.state.touched.phone_no && !reg.test(phone_no)) {
      errors.phone_no = "Phone no should be a number";
    }
    return errors;
  }
  render() {
    const errors = this.validate(
      this.state.your_name,
      this.state.email,
      this.state.phone_no
    );

    if (this.state.isSubmiit) {
      return <Thanks> Thanks for the message. We will get back to you as soon as possible </Thanks>;
    }
    return (
      <div>
        <Helmet>
          <title>Contact Us</title>
        </Helmet>
        <div className="card" id="contact-card">
          <div className="container">
            <div className="row contact-row-content">
              <div className="col-12 col-sm-6">
                <h2 className="contactTitle">Send us a message</h2>
                <Form>
                  <div className="contact-form-group">
                    <Label for="exampleInputEmail1">Your Name</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="name"
                      name="your_name"
                      aria-describedby="namehelp"
                      placeholder="Your Name"
                      value={this.state.your_name}
                      onBlur={this.handleBlur("your_name")}
                      onChange={this.handleInputChange}
                      invalid={errors.your_name !== ""}
                    ></Input>
                    <FormFeedback>{errors.your_name}</FormFeedback>
                  </div>
                  <div className="contact-form-group">
                    <Label for="exampleInputEmail1">Email address</Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      invalid={errors.email !== ""}
                      name="email"
                      value={this.state.email}
                      onBlur={this.handleBlur("email")}
                      onChange={this.handleInputChange}
                    ></Input>
                    <FormFeedback>{errors.email}</FormFeedback>
                  </div>
                  <div className="contact-form-group">
                    <Label for="exampleInputEmail1">Phone no</Label>
                    <Input
                      type="phone"
                      className="form-control"
                      id="num"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your Number"
                      name="phone_no"
                      invalid={errors.phone_no !== ""}
                      onBlur={this.handleBlur("phone_no")}
                      onChange={this.handleInputChange}
                    ></Input>
                    <FormFeedback>{errors.phone_no}</FormFeedback>
                  </div>
                  <div className="contact-form-group">
                    <Label for="exampleFormControlTextarea1">
                      Your Message
                    </Label>
                    <textarea
                      className="form-control"
                      id="mess"
                      rows="7"
                      name="message"
                      value={this.state.message}
                      onBlur={this.handleBlur("message")}
                      onChange={this.handleInputChange}
                    ></textarea>
                  </div>
                  <div className="contact-butt">
                    <button
                      type="button"
                      class="btn btn-primary contact-btn"
                      onClick={this.handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
              <div className="col-12 ml-3  col-sm-4  ml-sm-5 contact-col-content">
                <div className="contact-right-side">
                  <div className="contact-icon-class">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="contact_description">
                    <h5>Find us</h5>
                    <p>We are Avaliable Online 24×7</p>
                  </div>
                </div>
                <div className="right-side">
                  <div className="contact-icon-class">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="contact_description">
                    <h5>Give us a ring </h5>
                    <p>
                      Harshit Gupta{"\n"}
                      +91-9929045582{"\n"}
                      <br />
                      Prince Agrawal{"\n"}
                      +91-6377552654{"\n"}
                      <br />
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div>
                {/*<div className="right-side">
                  <div className="contact-icon-class">
                    <i class="fa fa-briefcase"></i>
                  </div>
                  <div className="contact_description">
                    <h5>legal information </h5>
                    <p>
                      Creative Tim Ltd.{"\n"}
                      VAT · EN2341241{"\n"}
                      IBAN · EN8732ENGB2300099123{"\n"}
                      Bank · Great Britain Bank
                    </p>
                  </div>
    </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
