import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import Slider from "../Slider/PriceSlider";
import "./Filter.css";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sold_out: false,
      not_sold_out: false,
      hindi: false,
      english: false,
      class1_3: false,
      class4_8: false,
      class9_10: false,
      class_higher: false,
      poor: false,
      moderate: false,
      good: false,
      school_book: false,
      college_book: false,
      coaching_module: false,
      other_prep_books: false,
      other_book: false,
      low_price: 0,
      high_price: 100000,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(value);
    this.setState({
      [name]: value,
    });
  }

  handelFilterPrice = (value)=>{
    this.setState({
      low_price: value[0],
      high_price: value[1]
    })
  }

  render() {
    // console.log('SAAASASSASA' , this.state.low_price);

    return (
      <div>
        <div class="card border-primary" id="cardfilter">
          <div class="card-body ">
            <h4>Filter By Your choice</h4>
            {/*<h4>Avaliability</h4>

            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="sold_out"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                Sold Out{" "}
              </label>
            </div>

            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="not_sold_out"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                Available in stock
              </label>
            </div>
    <hr></hr>*/}

            <h4>Medium</h4>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="hindi"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" htmlFor="exampleCheck1">
                Hindi{" "}
              </label>
            </div>

            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="english"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                English
              </label>
            </div>
            <hr></hr>
            <h4>Class</h4>

            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="class1_3"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                1-3
              </label>
            </div>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="class4_8"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                4-8
              </label>
            </div>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="class9_10"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                9-10
              </label>
            </div>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="class11_12"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                11-12
              </label>
            </div>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="class_higher"
                onChange={this.handleInputChange}
                // onClick={}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                Higher Education
              </label>
            </div>
            <hr></hr>
            <h4>Quality of Book</h4>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="poor"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                Poor
              </label>
            </div>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="moderate"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                Moderate
              </label>
            </div>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="good"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                Good
              </label>
            </div>
            <hr></hr>
            <h4>Category of Book</h4>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="school_book"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                School book
              </label>
            </div>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="college_book"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                College Book
              </label>
            </div>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="coaching_module"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                Coaching Module
              </label>
            </div>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="other_prep_books"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                Other prep. books
              </label>
            </div>
            <div class="form-check">
              <Input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="other_book"
                onChange={this.handleInputChange}
              ></Input>
              <label class="form-check-label" for="exampleCheck1">
                Other books
              </label>
            </div>
            <hr></hr>
            <Slider handelFilterPrice={this.handelFilterPrice}/>
            
            
            

            <hr></hr>
            <Button
              onClick={() =>
                this.props.handelFilter({
                  sold_out: this.state.sold_out,
                  not_sold_out: this.state.not_sold_out,
                  hindi: this.state.hindi,
                  english: this.state.english,
                  class1_3: this.state.class1_3,
                  class4_8: this.state.class4_8,
                  class9_10: this.state.class9_10,
                  class_higher: this.state.class_higher,
                  poor: this.state.poor,
                  moderate: this.state.moderate,
                  good: this.state.good,
                  school_book: this.state.school_book,
                  college_book: this.state.college_book,
                  coaching_module: this.state.coaching_module,
                  other_prep_books: this.state.other_prep_books,
                  other_book: this.state.other_book,
                  low_price: this.state.low_price,
                  high_price: this.state.high_price
                })
              }
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
