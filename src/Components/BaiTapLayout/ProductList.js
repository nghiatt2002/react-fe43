import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [
                {
                  image: "./img/sp_iphoneX.png",
                  name: "iPhone X",
                  decs: "Đây là iphone X"
                },
                {
                  image: "./img/sp_note7.png",
                  name: "Note 7",
                  decs: "Đây là Samsung galaxy note 7"
                },
                {
                  image: "./img/sp_blackberry.png",
                  name: "Blackberry",
                  decs: "Đây là Blackberry"
                },
                {
                  image: "./img/sp_vivo850.png",
                  name: "Vivo850",
                  decs: "Đây là Vivo 850"
                },
            ]
        }
    }

    renderProductList = () => {
        return this.state.productList.map((product, index) => {
            return <Product product={product} key={index}/>
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <h2 className="text-center my-4">BEST SMARTPHONE</h2>
                <div className="row">
                    {this.renderProductList()}
                </div>
            </div>
        )
    }
}
