import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../BaiTapBurger/BTBurger.css';

class BTBurger extends Component {
    renderNhanBanh = () => {
        // console.log(this.props.burger)
        let {burger} = this.props;

        // C1:
        // let content = [];
        // for (let propsBurger in burger) {
        //     let nhanBanh = [];
        //     for (let i = 0; i < burger[propsBurger]; i++) {
        //         nhanBanh.push(
        //             <div key={i} className={propsBurger}></div>
        //         );
        //     }
        //     content.push(nhanBanh);
        // }
        // return content;

        // ==================================================

        // C2:
        // Object.entries móc tách những đối tượng trở thành những mảng con
        return Object.entries(burger).map(([loaiNhan, soLuong], index) => {

            let nhanBanh = [];
            for (let i = 0; i < soLuong; i++) {
                nhanBanh.push(
                    <div key={i} className={loaiNhan}></div>
                );
            }
            return nhanBanh;
        });
    }

    renderMenu = () => {
        // lấy props từ redux về
        let {menu, burger} = this.props;
        return Object.entries(menu).map(([menuName, price], index) => {
            console.log(menuName, price);


            return (
                <tr key={index}>
                    <td>{menuName}</td>
                    <td>
                    <button className="btn btn-info" onClick={() => {this.props.themNhanBanh(menuName, -1)}}>-</button>
                        <span className="mx-2">{burger[menuName]}</span>
                        <button className="btn btn-info" onClick={() => {this.props.themNhanBanh(menuName, 1)}}>+</button>
                    </td>
                    <td>{price}$</td>
                    <td>{price * burger[menuName]}$</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div className="container">
                <h3 className="display-4 text-center text-success">Bài tập burger</h3>
                <div className="row">
                    <div className="col-6 border border-warning">
                        <h3 className="text-center">Cửa hàng burger CyberSoft</h3>
                        <div className="breadTop"></div>
                        {this.renderNhanBanh()}
                        <div className="breadBottom"></div>
                    </div>

                    <div className="col-6 border border-warning">
                    <h3 className="text-center">Chọn thức ăn</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Thức ăn</th>
                                <th></th>
                                <th>Giá</th>
                                <th>Thành tiền</th>
                            </tr>
                            {this.renderMenu()}
                        </thead>
                        <tfoot>
                            <tr>
                                <td colSpan="2"></td>
                                <td><b>Tổng tiền:</b></td>
                                <td><b>{this.props.total}$</b></td>
                            </tr>
                        </tfoot>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        themNhanBanh: (loaiNhan, soLuong) => {
            // tạo action
            const action = {
                type: 'THEM_NHAN_BANH',
                loaiNhan,
                soLuong
            }

            // đẩy dữ liệu lên reducer
            dispatch(action);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BTBurger)

