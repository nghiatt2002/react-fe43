import React, { Component } from 'react'

export default class ReactLifeCircle extends Component {
    constructor(props) {
        super(props);
        console.log('contructor');

        this.state = {
            number: 1
        }
    }

    // props mới và state hiện tại
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null; // trả về state hiện tại
    }


    render() {
        console.log('render');
        return (
            <div>
                {this.state.number}
                <br/>
                <button onClick={()=> {this.setState({number: this.state.number + 1})}}>Click(+1)</button>

            </div>
        )
    }

    // chạy sau render và chạy 1 lần duy nhất
    componentDidMount() {
        console.log('componentDidMount');
    }

    // prevProps: là props mới, prevState: state mới
    // chạy sau render và chạy khi state hoặc props thay đổi
    // lưu: không setState trong file cycle này sẽ đi vào vòng lặp vô hạn
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    // chạy khi component bị xóa khỏi giao diện
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}
