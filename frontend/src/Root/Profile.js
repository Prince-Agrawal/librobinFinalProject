import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import baseURL from "../shared/baseURL";
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Loading from "../LoadingComponent";
import { Redirect } from "react-router";
import LandingPage from "../LandingPage/landing"
import "./profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      full_name: "",
      email: "",
      contact_no: "",
      whatsapp_no: "",
      location: "",
      isShow: true
    };
  }

  notify = () => toast("Your Profile is Successfully Updated");

  getProfile = () => {
    fetch(baseURL + `user_data?user_id=${localStorage.getItem("user_id")}`)
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
        let first = "",
          last = "";
        if (response.message.first_name !== null) {
          first = response.message.first_name;
        }
        if (response.message.last_name !== null) {
          last = response.message.last_name;
        }
        this.setState({
          info: response.message,
          full_name: first + " " + last,
          email: response.message.email,
          contact_no: response.message.contact_no,
          whatsapp_no: response.message.whatsapp_no,
          location: response.message.location,
        });
      })
      .catch((error) => {
        console.log("Contact us", error.message);
      });
  };

  componentDidMount() {
    this.getProfile();
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(target.name);
    this.setState({
      [name]: value,
    });
  };

  handleSaveChange = () => {
    // console.log("gfhgfhgffhfh")
    var res = this.state.full_name.split(" ");
    localStorage.removeItem("first_name");       // for updating seller section header
    localStorage.setItem("first_name" , res[0]);
    const signUpInfo = {
      user_id: this.state.info._id,
      first_name: res[0],
      last_name: res[1],
      contact_no: this.state.contact_no,
      whatsapp_no: this.state.whatsapp_no,
      location: this.state.location,
    };
    fetch(baseURL + "update_profile", {
      method: "PUT",
      body: JSON.stringify(signUpInfo),
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
        console.log("Contact us", error.message);
      });

    // this.props.handelRootStatus();
  };
  render() {
    if(localStorage.getItem("user_id")){
      if (this.state.info !== null){
        return (
          <div>
          <Helmet>
          <title>Profile</title>
        </Helmet>
          <ToastContainer />
          <div class="container">
          
            <div class="row profile-content">
              <img src="profile.jpeg" class="avatar" />
              <h2 class="header-name"> {this.state.full_name}</h2>
            </div>
            <div class="row row-below">
              <div class="col-12 col-sm-12  border border-secondary personal-info">
                <h4 class="headInfo">Personal Information</h4>
                <div class="all-information">
                  <div class="side">
                    <p>Name </p>
                    <Link className="profile_edit">Edit</Link>
                  </div>
                  <div class="per-header">
                    <input
                      type="text"
                      readonly
                      class="form-control-plaintext"
                      id="staticEmail"
                      name="full_name"
                      value={this.state.full_name}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <p>Email id</p>
                  <div class="per-header">
                    <p>{this.state.email}</p>
                  </div>
                  <div class="side">
                    <p>Contact No </p>
                    <Link className="profile_edit">Edit</Link>
                  </div>
  
                  <div class="per-header">
                    <input
                      type="text"
                      readonly
                      class="form-control-plaintext"
                      id="staticEmail"
                      name="contact_no"
                      value={this.state.contact_no}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div class="side">
                    <p>Whatsapp No </p>
                    <Link className="profile_edit">Edit</Link>
                  </div>
  
                  <div class="per-header">
                    <input
                      type="text"
                      readonly
                      class="form-control-plaintext"
                      id="staticEmail"
                      name="whatsapp_no"
                      value={this.state.whatsapp_no}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div class="side">
                    <p>Location </p>
                    <Link className="profile_edit">Edit</Link>
                  </div>
  
                  <div class="per-header">
                    <input
                      type="text"
                      readonly
                      class="form-control-plaintext"
                      id="staticEmail"
                      name="location"
                      value={this.state.location}
                      onChange={this.handleInputChange}
                    />
                  </div>
  
                  {/*<button
                    type="button"
                    class="btn  btn-lg btn-block border border-secondary order-butt "
                  >
                    {" "}
                    <i class="fa fa-book bookicon"></i>Your upload book Collection{" "}
                    <i class="fa fa-angle-right icon-class"></i>
                  </button>
                  <button
                    type="button"
                    class="btn  btn-lg btn-block border border-secondary order-butt"
                  >
                    {" "}
                    <i class="fa fa-book bookicon"></i>Your Sold Out Book
                    collection <i class="fa fa-angle-right icon-class"></i>
                  </button>*/}
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      onClick={() => {this.handleSaveChange() ; this.notify()}}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        )}
      else {
        return <div> <Loading/></div>;
      }
  }
  else{
    return(
      <Redirect to="/home" />
    )
  }
}
}

export default Profile;
