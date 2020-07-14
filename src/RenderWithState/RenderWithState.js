import React, { Component } from 'react'

export default class RenderWithState extends Component {
    constructor(props) {
        super(props)

        // là thuộc tính chứa những giá trị thay đổi khi người dùng thao tác trên giao diện
        // là thuộc tính có sẵn của component
        this.state = {
            isLogin: false,
            userName: ""
        }
    }

    renderContent = () => {
        if (this.state.isLogin) {
            return (
                <div>
                    <p>Hello {this.state.userName}</p><br />
                    <button onClick={() => {
                        this.logout()
                    }}>Đăng xuất</button>
                </div>
            );
        }
        return <button onClick={() => {
            this.login()
        }}>Đăng nhập</button>;
    }

    login = () => {
        let newState = {
            isLogin: true,
            userName: 'NghiaTT'
        }

        // This.setState là 1 phương thức bất đồng bộ
        // Là phương thức có sẵn của component làm 2 nhiệm vụ:
        // 1 là thay đổi giá trị của states
        // 2 gọi render lại giao diện
        this.setState(newState)
    }

    logout = () => {
        let newState = {
            isLogin: false,
            userName: ''
        }

        // Là phương thức có sẵn của component làm 2 nhiệm vụ:
        // 1 là thay đổi giá trị của states
        // 2 gọi render lại giao diện
        this.setState(newState)
    }

    render() {
        return (
            <div className="container">
                {this.renderContent()}
            </div>
        )
    }
}
