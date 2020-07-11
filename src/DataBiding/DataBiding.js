import React, { Component } from 'react'

import StyleDataBising from './DataBiding.module.css'
export default class DataBiding extends Component {

    // biding thuộc tính
    sanPham = {
        maSP: 1,
        tenSP: 'Xiaomi Mi Mix 2',
        gia: 13000000,
        hinhAnh: 'https://picsum.photos/200/200'
    };


    // biding phương thức
    renderThongTin = () => {
        return (
            <div className="card">
                <img className="card-img" src={this.sanPham.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className={`${StyleDataBising.header}`}>{this.sanPham.tenSP}</h4>
                    <p className="card-text">{this.sanPham.gia}</p>
                </div>
            </div>
        );
    }


    render() {
        // biding dữ liệu là biến
        let title = "CYBER SOFT";
        let srcImg = `https://picsum.photos/400/400`;
        let hocVien = {
            ten: 'Trần Trọng Nghĩa',
            tuoi: 27
        }

        // biding dữ liệu là function
        const renderImg = () => {
            return (
                <img src="https://picsum.photos/200/200" />
            );
        }


        return (
            <div className="container">
                <h1 id="title">HELLO {title}</h1>
                <img src={srcImg} alt="{srcImg}" />
                <div className="card w-25">
                    <div className="card-body">
                        <h4 className="card-title titleDemo">Tên học viên: {hocVien.ten}</h4>
                        <p className="card-text">Tuổi: {hocVien.tuoi}</p>
                    </div>
                </div>
                {this.renderThongTin()}


                <div className="container">
                    {renderImg()}
                </div>

            </div>
        )
    }
}
