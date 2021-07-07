import React, { Component } from "react";

class DemoHandleEvents extends Component {
  handleClick = () => {
    alert("nhấn nè");
  };
  handleDelete = (id) => {
    alert(id);
  };
  handleSubmit = (event) => {
    event.preventDefault(); // chặn load trang
    alert("run");
  };
  render() {
    return (
      <div>
        <h1>Demo Handle Events</h1>
        <section>
          <h2>click</h2>
          <button className="btn btn-info" onClick={this.handleClick}>
            click me
          </button>
          <button className="btn btn-danger" onClick={() => this.handleDelete(1)}>
            Delete
          </button>
        </section>
        <section>
          <h2>submit</h2>
          <form onSubmit={this.handleSubmit}>
            <button type="submit" className="btn btn-success">
              submit
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default DemoHandleEvents;
