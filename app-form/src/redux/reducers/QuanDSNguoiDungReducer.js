import {
  DK_NGUOI_DUNG,
  SUA_NGUOI_DUNG,
  XOA_NGUOI_DUNG,
} from "../types/BaiTapDatVeType";

const stateDefault = {
  mangNguoiDung: [
    {
      soTT: "1",
      taiKhoan: "A1",
      hoTen: "Nguyễn Văn A",
      matKhau: "ABC123",
      email: "abc@gmail.com",
      soDienThoai: "090909090909",
      loaiNguoiDung: "KhachHang",
    },
    {
      soTT: "2",
      taiKhoan: "A2",
      hoTen: "Nguyễn Văn B",
      matKhau: "ABC123",
      email: "abc@gmail.com",
      soDienThoai: "090909090909",
      loaiNguoiDung: "KhachHang",
    },
    {
      soTT: "3",
      taiKhoan: "A3",
      hoTen: "Nguyễn Văn C",
      matKhau: "ABC123",
      email: "abc@gmail.com",
      soDienThoai: "090909090909",
      loaiNguoiDung: "KhachHang",
    },
    {
      soTT: "4",
      taiKhoan: "A4",
      hoTen: "Nguyễn Văn D",
      matKhau: "ABC123",
      email: "abc@gmail.com",
      soDienThoai: "090909090909",
      loaiNguoiDung: "KhachHang",
    },
  ],
  nguoiDungSua: {
    soTT: "",
    taiKhoan: "",
    hoTen: "",
    matKhau: "",
    email: "",
    soDienThoai: "",
    loaiNguoiDung: "",
  },

  nguoiDungRedux: {
    values: {
      soTT: "",
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      loaiNguoiDung: "",
    },
  },
};

const QuanDSNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DK_NGUOI_DUNG: {
      // thêm dữ liệu người dùng mới vào mangNguoiDung
      const mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];
      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }

    case XOA_NGUOI_DUNG: {
      let mangNguoiDungCapNhat = [...state.mangNguoiDung];
      // tìm số TT người dùng xem có không?
      let i = mangNguoiDungCapNhat.findIndex(
        (nguoiDung) => nguoiDung.taiKhoan === action.tkNDXoa
      );

      if (i !== -1) {
        mangNguoiDungCapNhat.splice(i, 1);
      }
      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }

    case SUA_NGUOI_DUNG: {
      console.log(action);
      const mangNguoiDungCapNhat = [...state.mangNguoiDung];

      let ndUpdate = mangNguoiDungCapNhat.find(
        (nguoiDung) =>
          nguoiDung.taiKhoan === state.nguoiDungRedux.values.taiKhoan
      );

      if (ndUpdate) {
        ndUpdate.soTT = state.nguoiDungRedux.values.soTT;
        ndUpdate.hoTen = state.nguoiDungRedux.values.hoTen;
        ndUpdate.matKhau = state.nguoiDungRedux.values.matKhau;
        ndUpdate.soDienThoai = state.nguoiDungRedux.values.soDienThoai;
        ndUpdate.email = state.nguoiDungRedux.values.email;
        ndUpdate.loaiNguoiDung = state.nguoiDungRedux.values.loaiNguoiDung;
      }
      state.mangNguoiDung = mangNguoiDungCapNhat;

      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default QuanDSNguoiDungReducer;
