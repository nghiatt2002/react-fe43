import React, { Component } from 'react'

export default class ClassProps extends Component {

    render() {
        const {image, name, gia} = this.props.xehoi;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={image} alt="" style={{width:300}} />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{gia}</p>
                </div>
            </div>
        )
    }
}
