import React, { Component } from 'react';
import DieuKien from '../GameTaiXiu/DieuKien'

export default class GameTaiXiu extends Component {
    render() {
        return (
            <section className="xi-ngau" style={{ background: 'url(./img/bg.jpg)', height: '100vh', overflowX: 'hidden' }}>
                <h1 className="text-center" style={{ color: 'white', fontWeight: 'bold', fontSize: 50 }}>
                    Game Tài Xỉu
  </h1>
                {/* <div className="xi-ngau__control row text-center mt-4">
                    <div className="col-4">
                        <button className="btn btn-lg rounded-circle" style={{ overflow: 'hidden' }}>
                            <img src="./img/tai.PNG" alt="tai" />
                        </button>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-around">
                        <span><i className="fa fa-dice-one" style={{ color: 'white', fontSize: 150 }} /></span>
                        <span><i className="fa fa-dice-two" style={{ color: 'white', fontSize: 150 }} /></span>
                        <span><i className="fa fa-dice-six" style={{ color: 'white', fontSize: 150 }} /></span>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-lg rounded-circle" style={{ overflow: 'hidden' }}>
                            <img src="./img/xiu.PNG" alt="xiu" />
                        </button>
                    </div>
                </div> */}
                <DieuKien />

                <div className="xi-ngau__ket-qua text-center mt-4" style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>
                    <p>
                        Bạn Chọn : <span style={{ color: '#f5cc74', fontSize: 35 }}>Tài</span>
                    </p>
                    <p>
                        Số Bàn Thắng : <span style={{ color: '#f5cc74', fontSize: 35 }}>1</span>
                    </p>
                    <p>
                        Tổng Số Bàn Chơi :
                <span style={{ color: '#f5cc74', fontSize: 35 }}>4</span>
                    </p>
                </div>
                <div className="xi-ngau__play text-center">
                    <button className="btn btn-success btn-lg" style={{ fontSize: 30, backgroundColor: 'white', color: '#d83226', fontWeight: 'bold' }}>
                        Chơi Game
                    </button>
                </div>
            </section>

        )
    }
}
