import React, { Component } from 'react';
import {connect} from 'react-redux';

class ModalGioHangRedux extends Component {

    renderGioHang = () => {
        // this.props.gioHang là thuộc tính nhận từ redux
        return this.props.gioHang.map((spGH, index) => {
            return (
                <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td>{spGH.tenSP}</td>
                    <td>
                        <img src={spGH.hinhAnh} alt={spGH.hinhAnh} style={{ width: 100 }} />
                    </td>
                    <td>{spGH.giaBan}$</td>
                    <td>
                        <button className="btn btn-info" onClick={() => {
                            this.props.tangGiamSoLuong(index, false)
                        }}>-</button>
                        <span className="mx-2">{spGH.soLuong}</span>
                        <button className="btn btn-info" onClick={() => {
                            this.props.tangGiamSoLuong(index, true)
                        }}>+</button>
                    </td>
                    <td>{spGH.soLuong * spGH.giaBan}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => {
                            this.props.xoaGioHangIndex(index)
                        }}>xóa index</button>
                        <button className="btn btn-warning" onClick={() => {
                            this.props.xoaGioHangMaSP(spGH.maSP)
                        }}>xóa maSP</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-right" colSpan="5">Tổng tiền</td>
                            <td>{this.props.gioHang.reduce((tongTien, spGH, index) => {
                                return tongTien += spGH.soLuong * spGH.giaBan;
                            }, 0)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHangIndex: (index) => {
            const action = {
                type: 'XOA_GIO_HANG',
                index: index
            }

            // đưa action lên reducer
            dispatch(action);
        },
        xoaGioHangMaSP: (maSP) => {
            const action = {
                type: 'XOA_GIO_HANG_MASP',
                maSP: maSP
            }

            // đưa action lên reducer
            dispatch(action);
        },
        tangGiamSoLuong: (index, tangGiam) => {
            const action = {
                type: 'TANG_GIAM_SL',
                index,
                tangGiam
            }

            // đưa action lên reducer
            dispatch(action);
        }
    }
}

const mapStateToProps = (state) => {
    // state: là store tổng, => truy suất đến GioHangReducer => biến state trên reducer
    return {
        gioHang: state.GioHangReducer.gioHang // => tạo ra 1 props của component ModalGioHangRedux
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux)
