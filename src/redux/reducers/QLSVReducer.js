const initialState = {
    mangSV: [{tkhoan:'nghiatt', matkhau:'200293', hoten:'Tran Trong Nghia', sdt: '0763200293', email: 'nghiatt2002@gmail.com', manhom: 'GRP10'}],
    svEdit: {tkhoan:'', matkhau:'', hoten:'', sdt: '', email: '', manhom: ''}
}

export const QLSVReducer = (state = initialState, action) => {
    let mangSVCapNhat = [...state.mangSV];
    let index = -1;
    switch (action.type) {
        case 'THEM_SV':
            // mangSVCapNhat.push(action.sinhvien);
            // state.mangSV = mangSVCapNhat;
            // return {...state};

            mangSVCapNhat = [...mangSVCapNhat, action.sinhvien]
            return {...state, mangSV:mangSVCapNhat};

        case 'CHI_TIET':
            state.svEdit = {...action.sinhvien};
            return {...state};

        case 'SUA_SV':
            index = mangSVCapNhat.findIndex((sv => sv.tkhoan === action.svEdit.tkhoan));
            console.log('index', index);
            if (index !== -1) {
                mangSVCapNhat[index] = action.svEdit;
            }
            state.mangSV = mangSVCapNhat;

            return {...state};

        case 'XOA_SV':
            index = mangSVCapNhat.findIndex(sinhvien => sinhvien.tkhoan === action.taikhoan);
            if (index !== -1) {
                mangSVCapNhat.splice(index, 1);
            }
            state.mangSV = mangSVCapNhat;
            return {...state};
    
        default:
            return {...state};
    }
}