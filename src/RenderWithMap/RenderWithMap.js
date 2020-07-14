import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mangSP: [
                {MaSP: 1, TenSP: 'Sony XPeria Z3', Gia: 15500000, HangSX: 'Sony'},
                {MaSP: 2, TenSP: 'Sony XPeria Z2', Gia: 16500000, HangSX: 'Sony'},
                {MaSP: 3, TenSP: 'Sony XPeria Z1', Gia: 17500000, HangSX: 'Sony'},
                {MaSP: 4, TenSP: 'Iphone X 64G', Gia: 20000000, HangSX: 'Apple'},
                {MaSP: 5, TenSP: 'Iphone XS Max 64G', Gia: 25500000, HangSX: 'Apple'},
                {MaSP: 6, TenSP: 'Iphone 11 Pro Max 64G', Gia: 27500000, HangSX: 'Apple'},
                {MaSP: 7, TenSP: 'Samsung Galaxy Note 8', Gia: 10000000, HangSX: 'SamSung'},
                {MaSP: 8, TenSP: 'Samsung Galaxy Note 9', Gia: 12000000, HangSX: 'SamSung'},
                {MaSP: 9, TenSP: 'Samsung Galaxy Note 10', Gia: 17000000, HangSX: 'SamSung'}
            ]
        }
    }

    renderProductList = () => {
        return this.state.mangSP.map((sp, index) => {
            return (
                <tr key={index}>
                    <td><b>{sp.MaSP}</b></td>
                    <td>{sp.TenSP}</td>
                    <td>{sp.Gia}</td>
                    <td>
                        <button className="btn btn-danger mr-2">Xóa</button>
                        <button className="btn btn-warning">Sửa</button>
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
                            <th>Giá</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProductList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
