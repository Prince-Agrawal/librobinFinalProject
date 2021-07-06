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

class AddBookModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book_name: "",
      author_name: "",
      subjects: "",
      class: "1",
      institution_name: "",
      medium: "English",
      type_of_board: "",
      stream: "",
      category_of_book: "school_book",
      condition_of_book: "Poor",
      discription: "",
      price_of_book: 0,
      myFile: null,
      count: 0,
      validFileSize: true,
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    // console.log(target.name)
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(target.name);
    this.setState({
      [name]: value,
    });
  }

  shouldUpdateInitialState = () => {
    const { data } = this.props;
    const { count } = this.state;
    return count === 0 && data && data.class;
  };
  handleChange = (event) => {
    // console.log(event.target.files[0].size / 1024);
    const fileSize = event.target.files[0].size / 1024;

    if (fileSize > 800) {
      this.setState({
        validFileSize: false,
      });
    } else {
      this.setState({
        myFile: event.target.files[0],
        validFileSize:true,
        loaded: 0,
      });
    }
  };

  render() {
    const { data } = this.props;
    // console.log('fsdfsfsfsbgncvb' , this.state.myFile);
    if (this.shouldUpdateInitialState()) {
      this.setState({
        book_name: this.props.data.book_name || this.state.book_name,
        author_name: this.props.data.author_name || this.state.author_name,
        subjects: this.props.data.subjects || this.state.subjects,
        class: this.props.data.class || this.state.class,
        institution_name:
          this.props.data.institution_name || this.state.institution_name,
        medium: this.props.data.medium || this.state.medium,
        type_of_board:
          this.props.data.type_of_board || this.state.type_of_board,
        stream: this.props.data.stream || this.state.stream,
        category_of_book:
          this.props.data.category_of_book || this.state.category_of_book,
        condition_of_book:
          this.props.data.condition_of_book || this.state.condition_of_book,
        discription: this.props.data.discription || this.state.discription,
        price_of_book:
          this.props.data.price_of_book || this.state.price_of_book,
        count: 1,
      });
    }
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
                  <h5 class="modal-title">Upload Your Book Details here</h5>
                </div>
              </ModalHeader>
              <ModalBody>
                <div>
                  <div class="modal-body">
                    <Form
                      role="form"
                      onSubmit={() => {
                        this.props.handleSubmit({
                          user_id: "1",
                          book_name: this.state.book_name,
                          author_name: this.state.author_name,
                          subjects: this.state.subjects,
                          class: this.state.class,
                          institution_name: this.state.institution_name,
                          medium: this.state.medium,
                          type_of_board: this.state.type_of_board,
                          stream: this.state.stream,
                          category_of_book: this.state.category_of_book,
                          condition_of_book: this.state.condition_of_book,
                          discription: this.state.discription,
                          price_of_book: this.state.price_of_book,
                          myFile: this.state.myFile,
                          // da
                        });
                      }}
                    >
                      <div class="form-group">
                        <Label for="exampleFormControlSelect1">
                          select class
                        </Label>
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                          name="class"
                          value={this.state.class}
                          onChange={this.handleInputChange}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>Ist Year</option>
                          <option>2st Year</option>
                          <option>3st Year</option>
                          <option>Final Year</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <Label htmlFor="usrname">Book Name</Label>
                        <Input
                          type="text"
                          class="form-control"
                          id="usrname"
                          placeholder="Enter book name here.."
                          name="book_name"
                          value={this.state.book_name}
                          onChange={this.handleInputChange}
                        >
                          {" "}
                        </Input>
                      </div>
                      <div class="form-group">
                        <Label htmlFor="usrname">Author Name</Label>
                        <Input
                          type="text"
                          class="form-control"
                          id="usrname"
                          placeholder="Enter author name.."
                          name="author_name"
                          value={this.state.author_name}
                          onChange={this.handleInputChange}
                        >
                          {" "}
                        </Input>
                      </div>

                      <div class="form-group">
                        <label for="psw">Upload Your Book Image Here </label>
                        <br />
                        {this.state.validFileSize === false && (
                          <p className="file-size-handel">
                            {" "}
                            File size greater than 800KB not allowed
                          </p>
                        )}
                        <input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                          name="myFile"
                          // value={this.state.myFile}
                          onChange={this.handleChange}
                        />
                      </div>

                      <div class="form-group">
                        <Label for="usrname">Subject Name </Label>
                        <Input
                          type="text"
                          class="form-control"
                          id="usrname"
                          placeholder="Enter subject  name"
                          name="subjects"
                          value={this.state.subjects}
                          onChange={this.handleInputChange}
                        ></Input>
                      </div>

                      <div class="form-group">
                        <Label for="usrname">school/college Name</Label>
                        <Input
                          type="text"
                          class="form-control"
                          id="usrname"
                          placeholder="Rajasthan technical university.."
                          name="institution_name"
                          value={this.state.institution_name}
                          onChange={this.handleInputChange}
                        ></Input>
                      </div>
                      <div class="form-group">
                        <Label for="exampleFormControlSelect1">
                          select Medium
                        </Label>
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                          name="medium"
                          value={this.state.medium}
                          onChange={this.handleInputChange}
                        >
                          <option>English</option>
                          <option>Hindi</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <Label for="usrname">Type of board</Label>
                        <Input
                          type="text"
                          class="form-control"
                          id="usrname"
                          placeholder="RBSE/CBSE/.."
                          name="type_of_board"
                          value={this.state.type_of_board}
                          onChange={this.handleInputChange}
                        ></Input>
                      </div>
                      <div class="form-group">
                        <Label for="usrname">Stream</Label>
                        <Input
                          type="text"
                          class="form-control"
                          id="usrname"
                          placeholder="Enter stream here arts/science/.."
                          name="stream"
                          value={this.state.stream}
                          onChange={this.handleInputChange}
                        ></Input>
                      </div>
                      <div class="form-group">
                        <Label for="psw">category of books</Label>

                        <select
                          type="text"
                          class="form-control"
                          id="psw"
                          placeholder=""
                          name="category_of_book"
                          value={this.state.category_of_book}
                          onChange={this.handleInputChange}
                        >
                          <option>school_book</option>
                          <option>college_book</option>
                          <option>coaching_module</option>
                          <option>other_prep_books</option>
                          <option>other_book</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <Label for="exampleFormControlSelect1">
                          Condition Of book
                        </Label>
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                          name="condition_of_book"
                          value={this.state.condition_of_book}
                          onChange={this.handleInputChange}
                        >
                          <option>Poor</option>
                          <option>Moderate</option>
                          <option>Good</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <Label for="psw">price of book </Label>
                        <Input
                          type="text"
                          class="form-control"
                          id="psw"
                          placeholder="enter price here"
                          name="price_of_book"
                          value={this.state.price_of_book}
                          onChange={this.handleInputChange}
                        >
                          {" "}
                        </Input>
                      </div>

                      <div class="form-group">
                        <Label for="exampleFormControlTextarea1">
                          Detail Description
                        </Label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="4"
                          name="discription"
                          value={this.state.discription}
                          onChange={this.handleInputChange}
                        ></textarea>
                      </div>

                      <div className="modal-footer">
                        <Button
                          type="submit"
                          value="submit"
                          className="btn btn-primary"
                        >
                          Save changes
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                          onClick={this.props.toggleModal}
                        >
                          Close
                        </Button>
                      </div>
                    </Form>
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

export default AddBookModel;
