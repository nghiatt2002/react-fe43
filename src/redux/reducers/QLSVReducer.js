const initialState = {
    mangSV: [{masv:1, hoten:'Tran Trong Nghia', sdt: '0763200293', email: 'nghiatt2002@gmail.com'}]
}

export const QLSVReducer = (state = initialState, action) => {
    let mangSVCapNhat = [...state.mangSV];
    let index = -1;
    switch (action.type) {
        case 'THEM_SV':
            mangSVCapNhat.push(action.sinhvien);
            state.mangSV = mangSVCapNhat;
            return {...state};

        case 'XOA_SV':
            index = mangSVCapNhat.findIndex(sinhvien => sinhvien.masv === action.masv);
            if (index !== -1) {
                mangSVCapNhat.splice(index, 1);
            }
            state.mangSV = mangSVCapNhat;
            return {...state};
    
        default:
            return {...state};
    }
}