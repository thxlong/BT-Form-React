import React, { Component } from "react";
import { connect } from "react-redux";
import { DK_NGUOI_DUNG } from "../redux/types/BaiTapDatVeType";

class FormDangKy extends Component {
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      soDienThoai: "",
      email: "",
      loaiNguoiDung: "",
    },

    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      soDienThoai: "",
      email: "",
      loaiNguoiDung: "",
    },

    valid: false,
  };

  handleChange = (e) => {
    // lấy giá trị mỗi lần value input thay đổi bởi người dùng
    let tagInput = e.target;
    let { name, value, pattern } = tagInput;

    let errorsMessage = "";

    if (value.trim() === "") {
      //kiểm tra bất kỳ control input nào người dùng nhập vào đều kiểm tra rỗng

      errorsMessage = name + " không được bỏ trống";
    }

    // Kiểm tra validation email, phone

    if (name === "email") {
      const regex = new RegExp(pattern);
      // console.log(regex);
      if (!regex.test(value)) {
        errorsMessage = name + " không đúng định dạng!";
      }
    }
    if (name === "soDienThoai") {
      const regex = new RegExp(pattern);
      // console.log(regex);
      if (!regex.test(value)) {
        errorsMessage = name + " không đúng định dạng!";
      }
    }

    let values = { ...this.state.values, [name]: value }; // cập nhật giá trị values cho state
    let errors = { ...this.state.errors, [name]: errorsMessage }; // cập nhật lỗi cho state

    this.setState({ ...this.state, values: values, errors: errors }, () => {
      // console.log(this.state);
      this.checkValid();
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Block sự kiện submit của browser
    this.props.dangKyNguoiDung(this.state.values);
  };

  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      // duyệt tất cả thuộc tính của đối tượng thì dụng for in <> duyệt thuộc tính của mảng thì dùng for of
      if (this.state.errors[key] !== "" || this.state.values[key] == "") {
        valid = false;
      }

      this.setState({
        ...this.state,
        valid: valid,
      });
    }
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
                    value={this.state.values.taiKhoan}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.taiKhoan}</p>

                  <span>Mật khẩu</span>
                  <input
                    className="form-control"
                    name="matKhau"
                    type="password"
                    value={this.state.values.matKhau}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.matKhau}</p>

                  <span>Email</span>
                  <input
                    className="form-control"
                    name="email"
                    value={this.state.values.email}
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>

                  <div className="mt-3">
                    {this.state.valid ? (
                      <button type="submit" className="btn btn-success mr-3">
                        Đăng ký
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-success mr-3"
                        disabled
                      >
                        Đăng ký
                      </button>
                    )}
                    {/* <button type="submit" className="btn btn-success mr-3">
                      Đăng ký
                    </button> */}
                    <button className="btn btn-info">Cập nhật</button>
                  </div>
                </div>

                {/* row phải */}
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>

                  <span>Số điện thoại</span>
                  <input
                    className="form-control"
                    name="soDienThoai"
                    pattern="^(0|[1-9][0-9]*)$"
                    value={this.state.values.soDienThoai}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                  <div className="form-group">
                    <span>Loại người dùng</span>
                    <select
                      className="form-control"
                      name="loaiNguoiDung"
                      value={this.state.values.loaiNguoiDung}
                      onChange={this.handleChange}
                      id
                    >
                      <p className="text-danger">
                        {this.state.errors.loaiNguoiDung}
                      </p>
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
