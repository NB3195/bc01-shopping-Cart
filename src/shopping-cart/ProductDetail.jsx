import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    const prodDetail = this.props.prodDetail;
    return (
      <div className="row product-detail">
        <div className="col-sm-5">
          <img className="img-fluid" src={prodDetail.hinhAnh} alt="asdas" />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>AMOLED, FHD+ 2232 x 1080 pixels</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>Android 9.0 (Pie)</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>20 MP</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>Chính 48 MP &amp; Phụ 8 MP, 5 MP</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>4 GB</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>6 GB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
