import React, { Component } from "react";
import { connect } from "react-redux";
import { DK_NGUOI_DUNG } from "../redux/types/BaiTapDatVeType";

class FormDangKy extends Component {
  state = {
    taiKhoan: "",
    hoTen: "",
    matKhau: "",
    soDienThoai: "",
    email: "",
    loaiNguoiDung: "",
  };

  handleChange = (e) => {
    // lấy giá trị mỗi lần value input thay đổi bởi người dùng
    let tagInput = e.target;
    let { name, value } = tagInput;

    this.setState(
      {
        [name]: value,
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Block sự kiện submit của browser
    this.props.dangKyNguoiDung(this.state);
  };
  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                {/* row trái */}
                <div className="form-group col-6">
                  <span>Tài khoản</span>
                  <input
                    className="form-control"
                    name="taiKhoan"
                    value={this.state.taiKhoan}
                    onChange={this.handleChange}
                  />

                  <span>Mật khẩu</span>
                  <input
                    className="form-control"
                    name="matKhau"
                    type="password"
                    value={this.state.matKhau}
                    onChange={this.handleChange}
                  />

                  <span>Email</span>
                  <input
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />

                  <div className="mt-3">
                    <button type="submit" className="btn btn-success mr-3">
                      Đăng ký
                    </button>
                    <button className="btn btn-info">Cập nhật</button>
                  </div>
                </div>

                {/* row phải */}
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.hoTen}
                    onChange={this.handleChange}
                  />

                  <span>Số điện thoại</span>
                  <input
                    className="form-control"
                    name="soDienThoai"
                    value={this.state.soDienThoai}
                    onChange={this.handleChange}
                  />
                  <div className="form-group">
                    <span>Loại người dùng</span>
                    <select
                      className="form-control"
                      name="loaiNguoiDung"
                      value={this.state.loaiNguoiDung}
                      onChange={this.handleChange}
                      id
                    >
                      <option disabled selected value="">
                        Vui lòng chọn...
                      </option>
                      <option value="khachHang">Khách hàng</option>
                      <option value="nhanVien">Nhân viên</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dangKyNguoiDung: (nguoiDung) => {
      const action = {
        type: DK_NGUOI_DUNG,
        nguoiDung,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormDangKy);
