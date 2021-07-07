import React, { Component } from "react";

export default class xucxacApp extends Component {
  render() {
    return (
      <div>
        <div
          className="gameXucXac"
          style={{
            backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
            width: "100%",
            height: "100%",
            position: "fixed",
            left: 0,
            top: 0,
          }}
        >
          <div className="container">
            <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
            <div className="row text-center">
              <div className="col-4">
                <button className="bg-danger display-4 p-5 text-light">
                  TÀI{" "}
                </button>
              </div>
              <div className="col-4">
                <div className="d-flex justify-content-center">
                  <img
                    src="./img/gameXucXac/1.png"
                    width={50}
                    height={50}
                    alt="hinh"
                  />
                  <img
                    src="./img/gameXucXac/1.png"
                    width={50}
                    height={50}
                    alt="hinh"
                  />
                  <img
                    src="./img/gameXucXac/1.png"
                    width={50}
                    height={50}
                    alt="hinh"
                  />
                </div>
              </div>
              <div className="col-4">
                <button className="bg-dark display-4 p-5 text-light">
                  XỈU{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="container text-center display-4">
            <div>
              bạn chọn : <span className="text-danger">TÀI</span>
            </div>
            <div>
              số bàn thắng : <span className="text-success">0</span>
            </div>
            <div>
              tổng số bàn chơi : <span className="text-warning">0</span>
            </div>
            <button className="btn btn-success" style={{ fontSize: 30 }}>
              PLAY GAME
            </button>
          </div>
        </div>
      </div>
    );
  }
}
