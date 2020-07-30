import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListSinhVien extends Component {

    renderDSSinhVien = (mangSV) => {
        return mangSV.map((sinhvien, index) => {
            return (
                <tr key={index}>
                    <td>{sinhvien.masv}</td>
                    <td>{sinhvien.hoten}</td>
                    <td>{sinhvien.sdt}</td>
                    <td>{sinhvien.email}</td>
                    <td>
                        <button type="button" className="btn btn-info mr-2">Chỉnh sửa</button>
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
                        <th>Mã SV</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
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

const mapStetToProps = (state) => {
    return {
        mangSV: state.QLSVReducer.mangSV
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        xoaSinhVien: (masv) => {
            const action = {
                type: 'XOA_SV',
                masv
            }

            dispatch(action)
        }
    }
}

export default connect(mapStetToProps, mapDispatchToProps)(ListSinhVien)

