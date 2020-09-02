import {TANG_GIAM_MUC_CUOC} from '../constants/GameBauCuaConst'
// import * as CONSTANT from '../constants/GameBauCuaConst';

export function tangGiamAction(ma, tangGiam) {
    return  {
        type: 'TANG_GIAM_MUC_CUOC',
        // type: CONSTANT.TANG_GIAM_MUC_CUOC
        ma,
        tangGiam
    }
}