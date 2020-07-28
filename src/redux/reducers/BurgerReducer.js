const stateBurger = {
    burger: {beef: 1, cheese: 1, salad: 1},
    menu: {
        beef: 30,
        cheese: 10,
        salad: 5
    },
    total: 45,
}

export const BurgerReducer = (state = stateBurger, action) => {
    let burgerUpdate = {...state.burger};
    
    switch (action.type) {
        case 'THEM_NHAN_BANH':
            let {loaiNhan, soLuong} = action;

            // thay đổi số lượng
            if (soLuong === -1 & state.burger[loaiNhan] < 1) {
                return {...state};
            }
            burgerUpdate[loaiNhan] += soLuong;

            // tính lại tổng tiền
            state.total += soLuong * state.menu[loaiNhan];

            state.burger = burgerUpdate;
            break;
    
        default:
            break;
    }

    return {...state};
}