import {getRandomInt} from '../../util/randomInt';
import {TANG_GIAM_MUC_CUOC, CHOI_GAME} from '../constants/GameBauCuaConst';


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
        {ma: "bau", hinhAnh: "./img/bau.png"},
        {ma: "cua", hinhAnh: "./img/cua.png"},
        {ma: "tom", hinhAnh: "./img/tom.png"}
    ]
}

export const GameBauCuaReducer = (state = initialState, action) => {
    let index = -1;
    let {tongTien} = state;
    let DSDatCuoc = [...state.DSDatCuoc];
    switch (action.type) {
        case TANG_GIAM_MUC_CUOC:
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

            return {...state, DSDatCuoc, tongTien}

        case CHOI_GAME:
            let DSCuoc = [...state.DSDatCuoc];

            // tạo xúc xắc ngẫu nhiên
            let arrXucXac = [
                DSCuoc[getRandomInt(6)],
                DSCuoc[getRandomInt(6)],
                DSCuoc[getRandomInt(6)]
            ];

            // lấy ra những con đã cược
            DSCuoc = DSCuoc.filter((item) => item.giaCuoc > 0);

            // xử lý trả lại tiền
            for (let conCuoc of DSCuoc) {
                let traLaiTien = arrXucXac.find((item) => item.ma === conCuoc.ma);
                if (traLaiTien) {
                    tongTien += conCuoc.giaCuoc;
                }
            }

            // xử lý trả thưởng
            for (let xx of arrXucXac) {
                let trungThuong = DSCuoc.find((conCuoc) => conCuoc.ma === xx.ma);
                if (trungThuong) {
                    tongTien += trungThuong.giaCuoc;
                }
            }

            // reset giá trị đã cược về 0
            DSCuoc.map((x) => { 
                x.giaCuoc = 0; 
                return x
            });

            state.xucxac = arrXucXac;
            return {...state, DSDatCuoc, tongTien};

    
        default:
            return {...state};
    }
}