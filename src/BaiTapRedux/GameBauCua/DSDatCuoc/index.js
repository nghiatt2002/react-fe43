import React, { Component } from 'react';
import {connect} from 'react-redux';

class DSDatCuoc extends Component {

    renderDSDatCuoc = (list) => {
        return list.map((item, index) => {
           return (
                <div className="card col-4" key={index}>
                    <img className="card-img-top" src={item.hinhAnh} alt="Card cap" style={{ height: 200 }} />
                    <div className="card-body">
                        <h5 className="card-title" />
                        <div className="d-flex justify-content-around align-items-center">
                            <button className="btn btn-info" onClick={() => {this.props.tangGiamMucCuoc(item.ma, false)}}>-</button>
                            <span>{item.giaCuoc}$</span>
                            <button className="btn btn-info" onClick={() => {this.props.tangGiamMucCuoc(item.ma, true)}}>+</button>
                        </div>
                    </div>
                </div>
           )
        })
    }

    render() {
        const {DSDatCuoc} = this.props;
        return (
            <div className="bau-cua__chon">
                <div className="bau-cua__bang row">
                    {this.renderDSDatCuoc(DSDatCuoc)}
                </div>
            </div>
        )
    }
}

// lấy dữ liệu từ reducer
const mapStateToProps = (state) => {
    return {
        DSDatCuoc: state.GameBauCuaReducer.DSDatCuoc
    }
}

// 
const mapDispatchToProps = (dispatch) => {
    return {
        // key: là props của component
        // value: là 1 method gửi action lên reducer
        tangGiamMucCuoc: (ma, tangGiam) => {
            const action = {
                type: 'TANG_GIAM_MUC_CUOC',
                ma,
                tangGiam
            }

            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DSDatCuoc)
