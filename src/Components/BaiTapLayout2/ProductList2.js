import React, { Component } from 'react'
import Product2 from './Product2'

export default class ProductList2 extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <Product2 />
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Product2 />
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Product2 />
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <Product2 />
                </div>
            </div>
        )
    }
}
