const initialState = {
    tongTien: 100,
    DSDatCuoc: [
        {ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0},
        {ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0},
        {ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0},
        {ma: "ca", hinhAnh: "./img/ca.png", giaCuoc: 0},
        {ma: "nai", hinhAnh: "./img/nai.png", giaCuoc: 0},
        {ma: "ga", hinhAnh: "./img/ga.png", giaCuoc: 0}
    ],
    xucxac: [
        {ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0},
        {ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0},
        {ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0}
    ]
}

export const GameBauCuaReducer = (state = initialState, action) => {
    let index = -1;
    let {tongTien} = state;
    let DSDatCuoc = [...state.DSDatCuoc];
    switch (action.type) {
        case 'TANG_GIAM_MUC_CUOC':
            index = DSDatCuoc.findIndex((item) => item.ma === action.ma);

            if (index !== -1) {
                
                if (action.tangGiam) {
                    if (tongTien > 0) {
                        // tăng tiền cược
                        DSDatCuoc[index].giaCuoc += 10;

                        // giảm tiền tổng
                        tongTien -= 10;
                    }

                } else {
                    if (DSDatCuoc[index].giaCuoc > 0 ) {
                        // giảm tiền cược
                        DSDatCuoc[index].giaCuoc -= 10;

                        // tăng tiền tổng
                        tongTien += 10;
                    }
                }
            }

            // state.DSDatCuoc = DSDatCuoc;
            return {...state, DSDatCuoc, tongTien}
            break;
    
        default:
            break;
    }
    
    return {...state};
}