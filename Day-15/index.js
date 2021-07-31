import React from "react";
import ReactDOM from "react-dom";

const yo = React.createElement;

class buttonClicked extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You have been hacked!💀";
    }

    return yo(
      "button", //  the element we want to render
      { onClick: () => this.setState({ liked: true }) }, // the function or event
      "Click Here to see the magic" // the inner text
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(yo(buttonClicked), domContainer);
