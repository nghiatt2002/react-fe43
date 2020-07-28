import React, { Component } from 'react'
import ModalGioHangRedux from './ModalGioHangRedux'
import DSSPRedux from './DSSPRedux'

export default class BTGioHangRedux extends Component {
    render() {
        return (
            <div className="container">
            <h3 className="text-center">BÀi Tập Giỏ Hàng Redux</h3>
                <ModalGioHangRedux />
                <DSSPRedux />
            </div>
        )
    }
}
