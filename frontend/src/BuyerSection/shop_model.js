import { red } from "@material-ui/core/colors";
import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
} from "reactstrap";
import baseURL from "../shared/baseURL";
class AddShopModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      phone_no: "",

      state: "",
      city: "",
      address: "",

      area: "",
      new_old: "New",
      book_name: "",
      type_of_book: "Prepration Books",
      discription: "",
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    // console.log(target.name)
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(target.name);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <Modal
            isOpen={this.props.isModalOpen}
            toggle={this.props.toggleModal}
            className="seller-model_class"
          >
            <div class="modal-content">
              <ModalHeader toggle={this.props.toggleModal}>
                {" "}
                <div class="modal-header">
                  <h5 class="modal-title">Fill Books Details to Buy a Book</h5>
                </div>
              </ModalHeader>
              <ModalBody>
                <div>
                  <div class="modal-body">
                    <form role="form">
                      <div className="form-group">
                        <label htmlFor="usrname">Your Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="usrname"
                          placeholder="Enter your name"
                          name="user_name"
                          value={this.state.user_name}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="usrname">Mob. Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="usrname"
                          placeholder="Enter your Number"
                          name="phone_no"
                          value={this.state.phone_no}
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Type of item
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          name="type_of_book"
                          value={this.state.type_of_book}
                          onChange={this.handleInputChange}
                        >
                          <option>Prepration Books</option>
                          <option>Coaching Modules </option>
                          <option>Stationery Items</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="usrname">Item Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="usrname"
                          placeholder="Enter Item name"
                          name="book_name"
                          value={this.state.book_name}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="usrname">State</label>
                        <input
                          type="text"
                          className="form-control"
                          id="usrname"
                          placeholder="Enter your state name"
                          name="state"
                          value={this.state.state}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="usrname">City</label>
                        <input
                          type="text"
                          className="form-control"
                          id="usrname"
                          placeholder="Enter your city name"
                          name="city"
                          value={this.state.city}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="usrname">Location(Area)</label>
                        <input
                          type="text"
                          className="form-control"
                          id="usrname"
                          placeholder="Enter Location"
                          name="area"
                          value={this.state.area}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="usrname">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="usrname"
                          placeholder="Enter your address"
                          name="address"
                          value={this.state.address}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Old-New
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          name="new_old"
                          value={this.state.new_old}
                          onChange={this.handleInputChange}
                        >
                          <option>Old</option>
                          <option>New</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Detail Description
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={4}
                          defaultValue={""}
                          name="discription"
                          value={this.state.discription}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </form>
                    <div className="modal-footer">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={() => {
                          this.props.handelSubmit({
                            user_name: this.state.user_name,
                            phone_no: this.state.phone_no,
                            state: this.state.state,
                            city: this.state.city,
                            address: this.state.address,
                            area: this.state.area,
                            new_old: this.state.new_old,
                            type_of_book: this.state.type_of_book,
                            book_name: this.state.book_name,
                            discription: this.state.discription,
                          });
                        }}
                      >
                        Save changes
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                        onClick={this.props.toggleModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AddShopModel;
