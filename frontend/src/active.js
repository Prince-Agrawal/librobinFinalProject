import React, { Component } from "react";
import "./active.css";

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  notify = () => {
    this.setState({
      isVisible: true,
    });

    setTimeout(() => {
      this.setState({
        isVisible: false,
      });
    }, 3000);
  };
  render() {
    return (
      <div>
        <button onClick={this.notify}>Notify !</button>
        {this.state.isVisible && (
          <div id="snackbar">Some text is here . . .</div>
        )}
      </div>
    );
  }
}

export default Active;
