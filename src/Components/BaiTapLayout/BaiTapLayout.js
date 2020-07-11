import React, { Component } from 'react'

import Header from './Header'
import Slider from './Slider'
import ProductList from './ProductList'
import Footer from './Footer'

export default class BaiTapLayout extends Component {
    
    // nội dung giao diện react class component chưa trong phương thức render
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <ProductList />
                <Footer />
            </div>
        )
    }
}
