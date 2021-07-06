import React from "react";
import "./thanks.css";
class Thanks extends React.Component {
  render() {
    return (
      <div class="conatiner thankMain">
        <div class="row justify-content-center ro-content">
          <div class="col-12 align-items-center co-content">
            <img
              class="icon-check"
              src={require("./righttick.gif")}
              alt="right-logo"
              width="200px"
            />
            {/* <i class="fa fa-check-circle icon-check"></i> */}
          </div>
        </div>
        <div class="row justify-content-center ">
          <div class="col-12 align-items-center">
            <p class="para">{this.props.children}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Thanks;
