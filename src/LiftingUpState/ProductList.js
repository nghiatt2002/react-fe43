import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderProductList = () => {
        return this.props.data.map((item, index) => {
            return (
                <div className="col-sm-4" key={index}>
                    <ProductItem product={item} dataDetail={this.props.handleSelected} 
                    handleBuy={this.props.handleBuy}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderProductList()}
            </div>
        )
    }
}
