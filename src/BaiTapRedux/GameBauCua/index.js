import React, { Component } from 'react';
import '../GameBauCua/index.css';
import DSDatCuoc from './DSDatCuoc';
import XucXac from './XucXac';
import {connect} from 'react-redux';

class GameBauCua extends Component {
    render() {
        const {tongTien, choiGame} = this.props;
        return (
            <div className="bau-cua">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="bau-cua__tien font-weight-bold">Tổng Tiền : {tongTien}$</div>
                        <h2 className="text-center text-danger">Bầu Cua</h2>
                        <div><button className="btn btn-info" onClick={() => {
                            {choiGame()}
                        }}>Chơi Game</button></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-7">
                            <DSDatCuoc />
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <XucXac />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// lấy dữ liệu từ store
const mapStateToProps = (state) => {
    return {
        // key: là props của component
        // value: là state được lưu trên reducer
        tongTien: state.GameBauCuaReducer.tongTien,
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        choiGame: () => {
            const action = {
                type: 'CHOI_GAME'
            }

            dispatch(action)
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBauCua)
