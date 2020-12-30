import React, { Component } from "react";
import { connect } from "react-redux";
import { XOA_NGUOI_DUNG } from "../redux/types/BaiTapDatVeType";

class TableDanhSachNguoiDung extends Component {
  renderDanhSachNguoiDung = () => {
    const { mangNguoiDung } = this.props;
    return mangNguoiDung.map((nguoiDung, index) => {
      return (
        <tr key={index}>
          <td>{nguoiDung.soTT + 1}</td>
          <td>{nguoiDung.taiKhoan}</td>
          <td>{nguoiDung.hoTen}</td>
          <td>{nguoiDung.matKhau}</td>
          <td>{nguoiDung.email}</td>
          <td>{nguoiDung.soDienThoai}</td>
          <td>{nguoiDung.loaiNguoiDung}</td>
          <button className="btn btn-info mr-3">Chỉnh sửa</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.dispatch({
                type: XOA_NGUOI_DUNG,
                nguoiDung,
              });
            }}
          >
            Xoá
          </button>
        </tr>
      );
    });
  };
  render() {
    // console.log("render", this.props.mangSinhVien);
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>STT</th>
              <th>Tài khoản</th>
              <th>Họ tên</th>
              <th>Mật khẩu</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Loại người dùng</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderDanhSachNguoiDung()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangNguoiDung: state.QuanDSNguoiDungReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps, null)(TableDanhSachNguoiDung);
