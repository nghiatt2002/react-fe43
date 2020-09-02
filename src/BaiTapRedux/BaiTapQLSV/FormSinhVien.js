import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

class FormSinhVien extends Component {

    state = {
        values: {
            tkhoan: '',
            matkhau: '',
            hoten: '',
            sdt: '',
            email: '',
            manhom: ''
        },
        error: {
            tkhoan: '',
            matkhau: '',
            hoten: '',
            sdt: '',
            email: '',
            manhom: ''
        }
    }

    // // chạy sau khi nhận props mới và trước khi render => trả về state mới
    // static getDerivedStateFromProps(newProps, currentState) {// param: props mới và state hiện tại

    //     // compare giá trị bất kỹ giữa props và state
    //     if (newProps.svEdit.edit && newProps.svEdit.tkhoan !== currentState.values.tkhoan) {
    //         // lấy props mới trả về state mới
    //         let newState = {...currentState, values: newProps.svEdit};
    //         return newState;
    //     }

    //     // trả về state cũ
    //     return null;
    // }

    componentWillReceiveProps(newProps) {
        this.setState({
            values: newProps.svEdit
        })
    }

    handleChangeInput = (e) => {
        // lấy giá trị mỗi lần input thay đổi
        let tagInput = e.target; // event.target là thẻ(component xảy ra sự kiện)
        let {name, value} = tagInput; // name là thuộc tính của event.target => sẽ get được name của thẻ đang xảy ra sự kiện

        // Các thuộc tính nằm trên thẻ gọi là Attribute
        // Các thuộc tính của đối tượng sau khi DOM gọi là property
        let label = e.target.getAttribute('label');

        let type = e.target.getAttribute('type');
        let newValues = {...this.state.values, [name]: value};

        let errMsg = '';
        // Check rỗng
        if (value.trim() === '') {
            errMsg = label + ' không được bỏ trống !/';
        } 

        // Check SĐT nhập số
        if (type === 'phone') {
            let regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value)) {
                errMsg = ` ${label} Chỉ được nhập số !`
            }
        }

        // check email
        if (type === 'email') {
            let regexEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
            if (!regexEmail.test(value)) {
                errMsg = ` ${label} không hợp lệ !`
            }
        }

        let newError = {...this.state.error, [name]: errMsg};

        this.setState({
            values: newValues,
            error: newError
        });
    }

    handleSubmitForm = (e) => {
        // ngăn sự kiện submit reload trang của browser
        e.preventDefault();

        let {values, error} = this.state;
        // duyệt các trường values của state
        for (let key in values) {
            if (values[key].trim() === '') {
                alert('Dữ liệu không hợp lệ!');
                return;
            }
        }

        // duyệt các trường error của state
        for (let key in error) {
            if (error[key].trim() !== '') {
                alert('Dữ liệu không hợp lệ!');
                return;
            }
        }

        // this.props.themSinhVien(this.state.values);
        this.props.dispatch({
            type: 'THEM_SV',
            sinhvien: this.state.values
        })
    }

    handleEditForm = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type: 'SUA_SV',
            svEdit: this.state.values
        })
    }

    render() {

        let {tkhoan, matkhau, hoten, sdt, email, manhom} = this.state.values;

        return (
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="tkhoan">Tài khoản</label>
                                <input type="text" label="Tài khoản" className="form-control" id="tkhoan" name="tkhoan" defaultValue={tkhoan} value={tkhoan} onChange={this.handleChangeInput} />
                                <p className="text text-danger">{this.state.error.tkhoan}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="hoten">Họ tên</label>
                                <input type="text" label="Họ tên" className="form-control" id="hoten" name="hoten" defaultValue={hoten} value={hoten} onChange={this.handleChangeInput} />
                                <p className="text text-danger">{this.state.error.hoten}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="matkhau">Mật khẩu</label>
                                <input type="text" label="Mật khẩu" className="form-control" id="matkhau" name="matkhau" value={matkhau} onChange={this.handleChangeInput} />
                                <p className="text text-danger">{this.state.error.matkhau}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input type="email" label="Email" className="form-control" id="email" name="email" value={email} onChange={this.handleChangeInput} />
                                <p className="text text-danger">{this.state.error.email}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="sdt">Số điện thoại</label>
                                <input type="phone" label="Số điện thoại" className="form-control" id="sdt" name="sdt" value={sdt} onChange={this.handleChangeInput} />
                                <p className="text text-danger">{this.state.error.sdt}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="manhom">Mã nhóm</label>
                                <input type="text" label="Mã nhóm" className="form-control" id="manhom" name="manhom" value={manhom} onChange={this.handleChangeInput} />
                                <p className="text text-danger">{this.state.error.manhom}</p>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success" onClick={this.handleSubmitForm}>Thêm sinh viên</button>
                        <button type="submit" className="btn btn-success" onClick={this.handleEditForm}>Chỉnh sửa sinh viên</button>
                    </form>
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         themSinhVien: (sinhvien) => {
//             const action = {
//                 type: 'THEM_SV',
//                 sinhvien
//             }

//             dispatch(action)
//         }
//     }
// }

const mapStateToProps = (state) => {
    return {
        svEdit: state.QLSVReducer.svEdit
    }
}

// export default connect(null, mapDispatchToProps)(FormSinhVien)
export default connect(mapStateToProps, null)(FormSinhVien)



