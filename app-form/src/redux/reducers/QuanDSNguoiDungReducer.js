const stateDefault = {
  mangNguoiDung: [
    {
      soTT: "1",
      taiKhoan: "AAA",
      hoTen: "Nguyễn Văn A",
      matKhau: "ABC123",
      email: "abc@gmail.com",
      soDienThoai: "090909090909",
      loaiNguoiDung: "KhachHang",
    },
  ],
};

const QuanDSNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      break;
  }
  return { ...state };
};

export default QuanDSNguoiDungReducer;
