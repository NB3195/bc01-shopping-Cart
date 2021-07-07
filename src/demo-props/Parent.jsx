import React, { Component } from "react";
import Child from "./Child";
import ChildFunction from "./ChildFunction";
class Parent extends Component {
  state = {
    name: "Yasuo",
    say: "hasagi",
  };
  render() {
    return (
      <div>
        <h1>Parent</h1>
        <p>name : {this.state.name}</p>
        {/* cách truyền data từ Parent => Child */}
        <Child ten={this.state.name} noi={this.state.say}>
          <div>
            <h2>đây là nội dung từ parent chuyền cho child</h2>
            <p>this.props.children</p>
          </div>
        </Child>
        <ChildFunction ten={this.state.name} noi={this.state.say}>
          <div>
            <h2>đây là nội dung từ parent chuyền cho child</h2>
            <p>this.props.children</p>
          </div>
        </ChildFunction>
      </div>
    );
  }
}

export default Parent;
