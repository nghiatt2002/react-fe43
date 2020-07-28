import React, { Component } from 'react';
import {connect} from 'react-redux';

class XucXac extends Component {

    renderXucXac = (listXucXac) => {
        return listXucXac.map((item, index) => {
            return (
                <div className={`bau-cua__xoay bau-cua__xoay--${index + 1}`} key={index}>
                    <img src={item.hinhAnh} alt="hinhanh" />
                </div>
            )
        })
    }

    render() {
        const {xucxac} = this.props;
        return (
            <div className="bau-cua__do w-100 h-100">
                <img src="./img/dia.png" alt="hinh" className="w-100 h-100" />
                {this.renderXucXac(xucxac)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        xucxac: state.GameBauCuaReducer.xucxac
    }
}

export default connect(mapStateToProps, null)(XucXac)