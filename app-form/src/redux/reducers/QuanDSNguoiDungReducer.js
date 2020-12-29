import { DK_NGUOI_DUNG } from "../types/BaiTapDatVeType";

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
    case DK_NGUOI_DUNG: {
      // thêm dữ liệu người dùng mới vào mangNguoiDung
      const mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];
      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default QuanDSNguoiDungReducer;
