import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props) {
        super(props);

    }

    handleClick = () => {
        alert("hello FE43")
    }

    showMessage = (msg) => {
        alert(`Hello ${msg}`);
    }

    render() {
        return (
            <div>
                {/*C1: truyền theo callback function xử lý sự kiện */}
                <h3>C1: truyền theo callback function xử lý sự kiện</h3>
                <button className="btn btn-warning" onClick={this.handleClick}>
                    Click me!
                </button>
                <button className="btn btn-primary" onClick={this.showMessage.bind(this, 'NghiaTT1')}>
                    Click me!
                </button>
                <br /><hr />
                <h3>C2: dùng arrow function</h3>
                {/*C2: dùng arrow function */}
                <button className="btn btn-primary" onClick={() => {
                    this.handleClick();
                }}>
                    Click me!
                </button>
                <button className="btn btn-danger" onClick={() => {
                    this.showMessage('NghiaTT2');
                }}>
                    Click me!
                </button>
            </div>
        )
    }
}
