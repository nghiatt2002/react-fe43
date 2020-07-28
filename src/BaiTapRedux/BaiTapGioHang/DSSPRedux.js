import React, { Component } from 'react';
import data from '../../data/dataDienThoai.json';
import SanPhanRedux from './SanPhanRedux';

export default class DSSPRedux extends Component {

    // phương thức render sản phẩm
    renderSanPham = () => {
        return data.map((sp, index) => {
            return (
                <div className="col-4" key={index}>
                    <SanPhanRedux sanpham={sp}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh Sách Sản Phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
