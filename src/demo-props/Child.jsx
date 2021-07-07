import React, { Component } from "react";

class Child extends Component {
  render() {
    console.log("props : ", this.props);
    return (
      <div>
        <h1>Child</h1>
        <p> Name : {this.props.ten} </p>
        <p> Say : {this.props.noi} </p>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Child;
