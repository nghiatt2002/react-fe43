import React, { Component } from 'react'
import data from '../data/dataDienThoai.json'
import ProductList from './ProductList'
import Card from './Card'

export default class ExampleCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productList: data,
            productSelected: null,
            cardList: []
        }
    }

    handleSelected = (data) => {
        this.setState({
            productSelected: data
        })
    }

    handleBuy = (product) => {

        let cardListUpdate = [...this.state.cardList];

        // tìm vị trí của những phẩn tử trong mảng
        let index =  cardListUpdate.findIndex(item => item.maSP == product.maSP);
        if (index >= 0) {
            cardListUpdate[index].soLuong += 1;
        } else {
            product.soLuong = 1;
            cardListUpdate = [...cardListUpdate, product];
        }

        this.setState({
            cardList: cardListUpdate
        })
    }

    handleDeleteFromProductCard = (product) => {
        let cardListUpdate = [...this.state.cardList];
        // tìm vị trí
        let index =  cardListUpdate.findIndex(item => item.maSP == product.maSP);
        // xoa
        if (index >= 0) {
            cardListUpdate.splice(index, 1);
        }

        // set state lại
        this.setState({
            cardList: cardListUpdate
        })
    }

    render() {
        let { productSelected } = this.state;
        return (
            <div>
                <div className="container">
                    <Card data={this.state.cardList} handleDeleteFromProductCard={this.handleDeleteFromProductCard}/>
                    <ProductList data={this.state.productList} handleSelected={this.handleSelected} handleBuy={this.handleBuy}/>
                    {
                        productSelected ? (
                            <div className="row">
                                <div className="col-sm-5">
                                    <img className="img-fluid" src={productSelected.hinhAnh} />
                                </div>
                                <div className="col-sm-7">
                                    <h3>Thông số kỹ thuật</h3>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Màn hình</td>
                                                <td>{productSelected.manHinh}</td>
                                            </tr>
                                            <tr>
                                                <td>Hệ điều hành</td>
                                                <td>{productSelected.heDieuHanh}</td>
                                            </tr>
                                            <tr>
                                                <td>Camera trước</td>
                                                <td>{productSelected.cameraTruoc}</td>
                                            </tr>
                                            <tr>
                                                <td>Camera sau</td>
                                                <td>{productSelected.cameraSau}</td>
                                            </tr>
                                            <tr>
                                                <td>RAM</td>
                                                <td>{productSelected.ram}</td>
                                            </tr>
                                            <tr>
                                                <td>ROM</td>
                                                <td>{productSelected.rom}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>

        )
    }
}
