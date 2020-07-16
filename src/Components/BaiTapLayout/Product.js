import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const {image, name, decs} = this.props.product
        return (
            <div className="col-xs-12 col-sm-6 col-lg-3 my-3">
                <div className="container">
                    <div className="card bg-light" >
                        <img className="card-img-top" src={image} alt={image} style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">{name}</h4>
                            <p className="card-text">{decs}</p>
                            <a href="#" className="btn btn-primary">Detail</a>
                            <a href="#" className="btn btn-danger">Cart</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
