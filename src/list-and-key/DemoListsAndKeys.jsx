import React, { Component } from "react";

class DemoListsAndKeys extends Component {
  state = {
    listFriend: [
      {
        id: "1",
        name: "Phan Thùy Duyên",
        age: 19,
      },
      {
        id: "2",
        name: "Phan Huế Anh",
        age: 20,
      },
      {
        id: "3",
        name: "Nguyễn Phong Dinh",
        age: 19,
      },
    ],
  };

  renderListFriend = () => {
    const listFriend = this.state.listFriend;
    return listFriend.map((friend, index) => (
      <tr key={index}>
        <td>{friend.id}</td>
        <td>{friend.name}</td>
        <td>{friend.age}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div>
        <h1>Demo Lists And Keys</h1>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>{this.renderListFriend()}</tbody>
        </table>
      </div>
    );
  }
}

export default DemoListsAndKeys;
