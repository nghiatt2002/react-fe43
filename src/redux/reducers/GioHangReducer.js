// khởi tạo giá trị ban đầu của store
const stateGioHang = {
    gioHang: [
        // {
        //     maSP: 1,
        //     tenSP: "VinSmart Live",
        //     hinhAnh: "./img/vsphone.jpg",
        //     giaBan: 5700000,
        //     soLuong: 1
        // }
    ]
}

export const GioHangReducer = (state = stateGioHang, action) => {
    let index = -1;
    let gioHangCapNhat = [...state.gioHang];
    switch (action.type) {
        case 'THEM_GIO_HANG':
            // xử lý logic thêm giỏ hàng
            index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.spGioHang.maSP);

            if (index === -1) {
                gioHangCapNhat.push(action.spGioHang);
            } else {
                gioHangCapNhat[index].soLuong += 1;
            }

            state.gioHang = gioHangCapNhat;
            break;

        case 'XOA_GIO_HANG':
            // xử lý logic xóa giỏ hàng
            gioHangCapNhat.splice(action.index, 1);
            state.gioHang = gioHangCapNhat;
            break;

        case 'XOA_GIO_HANG_MASP':
            // tìm index dựa vào mã sp
            index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
            if (index !== -1) {
                gioHangCapNhat.splice(index, 1);
            }

            state.gioHang = gioHangCapNhat;
            break;

        case 'TANG_GIAM_SL':
            if (action.tangGiam) {
                gioHangCapNhat[action.index].soLuong += 1;
            } else {
                if (gioHangCapNhat[action.index].soLuong > 1 ) {
                    gioHangCapNhat[action.index].soLuong -= 1;
                }
            }

            state.gioHang = gioHangCapNhat;
            break;
    
        default:
            break;
    }
    return {...state};
}