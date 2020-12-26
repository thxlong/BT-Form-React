import React, { Component } from "react";

export default class FormDangKy extends Component {
  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                {/* row trái */}
                <div className="form-group col-6">
                  <span>Tài khoản</span>
                  <input className="form-control" name="taiKhoan " />

                  <span>Mật khẩu</span>
                  <input
                    className="form-control"
                    name="matKhau"
                    type="password"
                  />

                  <span>Email</span>
                  <input className="form-control" name="email " />

                  <div className='mt-3'>
                    <button className="btn btn-success">Đăng ký</button>
                    <button className="btn btn-info">Cập nhật</button>
                  </div>
                </div>

                {/* row phải */}
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input className="form-control" name="hoTen " />

                  <span>Số điện thoại</span>
                  <input className="form-control" name="soDienThoai " />
                  <div className="form-group">
                    <span>Mã loại người dùng</span>
                    <select className="form-control" name="loaiNguoiDung" id>
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
