import React, { Component } from "react";

class DemoDataBinding extends Component {
  // property
  tenBaiHat = "Big City Boi";
  tenCaSi = "BinZ";
  // method
  renderInfo = () => {
    return (
      <div>
        <p> Tên bài hát là : {this.tenBaiHat} </p>
        <p>Tên Ca Sĩ : {this.tenCaSi}</p>
      </div>
    );
  };
  render() {
    const like = 10000;
    return (
      <div>
        <h1>Demo Data Binding</h1>
        {this.renderInfo()}
        <p>like : {like}</p>
      </div>
    );
  }
}

export default DemoDataBinding;
