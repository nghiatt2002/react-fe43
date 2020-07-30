import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import ListSinhVien from './ListSinhVien'

export default class BaiTapQLSV extends Component {
    render() {
        return (
            <div className="container">
                <FormSinhVien />
                <ListSinhVien />
            </div>
        )
    }
}
