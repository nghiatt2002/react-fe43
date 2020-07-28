import React, { Component } from 'react';
import {connect} from 'react-redux';

class SanPhanRedux extends Component {
    render() {

        let {sanpham} = this.props;

        return (
            <div className="card">
                <img className="card-img-top" src={sanpham.hinhAnh} alt={sanpham.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{sanpham.tenSP}</h4>
                    <button className="btn btn-success" >Chi tiết</button>
                    <button type="button" className="btn btn-danger" onClick={() => {this.props.themGioHang(sanpham)}}>Mua</button>
                </div>
            </div>
        )
    }
}

// xây dựng hàm tạo ra props là hàm xử lý sự kiện => đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
    return {
        // tạo ra 1 props của component(là 1 hàm đưa dữ liệu lên store)
        themGioHang: (sanpham) => {
            const spGioHang = {
                maSP: sanpham.maSP,
                tenSP: sanpham.tenSP,
                hinhAnh: sanpham.hinhAnh,
                giaBan: sanpham.giaBan,
                soLuong: 1
            }

            // tạo action đưa dữ liệu lên reducer
            const action = {
                type: 'THEM_GIO_HANG', // bắt buộc
                spGioHang: spGioHang  // nội dung gửi lên reducer
            }

            // dùng hàm dispatch để đưa dữ liệu lên reducer
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(SanPhanRedux)