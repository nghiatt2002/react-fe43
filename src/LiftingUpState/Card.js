import React, { Component } from 'react'

export default class Card extends Component {
    // render danh sách sản phẩm đã mua
    renderProductInCard = () => {
        return this.props.data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                        <img src={item.hinhAnh} alt={item.hinhAnh} style={{ width: 100 }} />
                    </td>
                    <td>{item.tenSP}</td>
                    <td>{item.giaBan}$</td>
                    <td>
                        <button className="btn btn-info">-</button>
                        <span className="mx-2">{item.soLuong}</span>
                        <button className="btn btn-info">+</button>
                    </td>
                    <td>17100000$</td>
                    <td><button className="btn btn-danger" onClick={() => {
                        this.props.handleDeleteFromProductCard(item)
                    }}>xóa</button></td>
                </tr>
            )
        })
    }

    getCountProduct = (maSP) => {
        console.log(this.props.data.find(product => product.maSP == maSP).length)
    }


    render() {
        return (
            <div>
                <h2>Card</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Hình Ảnh</th>
                            <th>Tên sảm phẩm</th>
                            <th>Giá bán</th>
                            <th>số lượng</th>
                            <th>thành giá</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProductInCard()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td>32300000</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
