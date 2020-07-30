import React, { Component } from 'react';
import {connect} from 'react-redux';

class FormSinhVien extends Component {

    state = {
        masv: '',
        hoten: '',
        sdt: '',
        email: '',
    }

    handleChangeInput = (e) => {
        // lấy giá trị mỗi lần input thay đổi
        let tagInput = e.target;
        let {name, value} = tagInput;

        this.setState({
            [name]: value
        });
    }

    handleSubmitForm = (e) => {
        // ngăn sự kiện submit reload trang của browser
        e.preventDefault();
        this.props.themSinhVien(this.state);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="masv">Mã SV</label>
                                <input type="text" className="form-control" id="masv" name="masv" value={this.state.masv} onChange={this.handleChangeInput} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="hoten">Họ tên</label>
                                <input type="text" className="form-control" id="hoten" name="hoten" value={this.state.hoten} onChange={this.handleChangeInput} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="sdt">Số điện thoại</label>
                                <input type="numeric" className="form-control" id="sdt" name="sdt" value={this.state.sdt} onChange={this.handleChangeInput} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChangeInput} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success" onClick={this.handleSubmitForm}>Thêm sinh viên</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themSinhVien: (sinhvien) => {
            const action = {
                type: 'THEM_SV',
                sinhvien
            }

            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(FormSinhVien)



