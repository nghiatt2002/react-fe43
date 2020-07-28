import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer';
import {BurgerReducer} from './BurgerReducer';

// store tổng ứng dụng
export const rootReducer = combineReducers({
    // nơi sẽ chứa các reducer cho nghiệp vụ(store con)
    GioHangReducer: GioHangReducer,
    BurgerReducer: BurgerReducer
})