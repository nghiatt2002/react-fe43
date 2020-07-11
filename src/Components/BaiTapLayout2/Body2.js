import React, { Component } from 'react'
import Banner2 from './Banner2'
import ProductList2 from './ProductList2'

export default class Body2 extends Component {
    render() {
        return (
            <div className="body container">
                <Banner2/>
                <ProductList2 />
            </div>
        )
    }
}
