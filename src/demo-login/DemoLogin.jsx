import React, { Component } from "react";

class DemoLogin extends Component {
  /**
   * isLogin là thuộc tính giúp chúng ta xác định là đã login hay chưa
   *      true : đã login
   *      false : chưa login
   */
  // isLogin = false; // làm cách này sai vì render không chạy lại dẫn đến UI không dc update
  state = {
    isLogin: false,
  };
  handleLogin = () => {
    // this.state.isLogin = true; //làm cách này sai vì render không chạy lại dẫn đến UI không dc update
    this.setState({
      isLogin: true,
    });
    console.log(this.state.isLogin);
  };
  renderLogin = () => {
    if (this.state.isLogin) {
      return <p> Nguyễn Phong Hào </p>;
    } else {
      return (
        <button className="btn btn-info" onClick={this.handleLogin}>
          Login
        </button>
      );
    }
  };
  render() {
    console.log("run render");
    return (
      <div>
        <h1>State & conditional rendering</h1>
        {this.renderLogin()}
      </div>
    );
  }
}

export default DemoLogin;
