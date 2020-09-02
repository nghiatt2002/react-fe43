import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListSinhVien extends Component {

    renderDSSinhVien = (mangSV) => {
        return mangSV.map((sinhvien, index) => {
            return (
                <tr key={index}>
                    <td>{sinhvien.tkhoan}</td>
                    <td>{sinhvien.matkhau}</td>
                    <td>{sinhvien.hoten}</td>
                    <td>{sinhvien.sdt}</td>
                    <td>{sinhvien.email}</td>
                    <td>{sinhvien.manhom}</td>
                    <td>
                        <button type="button" className="btn btn-info mr-2" onClick={()=>{this.props.chinhSua(sinhvien)}}>Chỉnh sửa</button>
                        <button type="button" className="btn btn-danger" onClick={() => {this.props.xoaSinhVien(sinhvien.masv)}}>Xóa</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        const {mangSV} = this.props;
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Mã nhóm</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody className="table-striped">
                    {this.renderDSSinhVien(mangSV)}
                </tbody>
            </table>

        )
    }
}

// const mapStetToProps = (state) => {
//     return {
//         mangSV: state.QLSVReducer.mangSV
//     }
// }

function mapStetToProps (state) {
    return {
        mangSV: state.QLSVReducer.mangSV
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        xoaSinhVien: (taikhoan) => {
            // const action = {
            //     type: 'XOA_SV',
            //     taikhoan
            // }

            dispatch(
                {
                    type: 'XOA_SV',
                    taikhoan
                }
                // action
            )
        },
        chinhSua: (sinhvien) => {
            dispatch(
                {
                    type: 'CHI_TIET',
                    sinhvien
                }
            )
        }
    }
}

export default connect(mapStetToProps, mapDispatchToProps)(ListSinhVien)

