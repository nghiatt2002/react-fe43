import React, { Component } from 'react'

export default class BaiTapBanKinh extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // src: './glassesImage/v1.png',
            arrProduct: [
                { id: 1, price: 100, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
                { id: 2, price: 200, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
                { id: 3, price: 300, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
                { id: 4, price: 400, name: 'DIOR D6005U', url: './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
                { id: 5, price: 500, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
                { id: 6, price: 600, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
                { id: 7, price: 700, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
                { id: 8, price: 800, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
                { id: 9, price: 900, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
            ],
            productSelected: {}
        }
    }

    // Load toàn bộ kính
    renderGlasses = () => {
        return this.state.arrProduct.map((product, index) => {
            return (
                <div className="col-4 my-4" key={index}>
                    <button className="btn" onClick={() => { this.changeGlasses(product) }}>
                        <img src={product.url} alt={product.url} width={150} />
                    </button>
                </div>
            );
        })
    }

    // thay đổi url kính khi click vào từng loại kính
    changeGlasses = (product) => {
        this.setState({
            productSelected: product
        })
    }

    render() {
        let product = this.state.productSelected;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6" >
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Virtual Glasses</h4>
                                <div className="row">
                                    {this.renderGlasses()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Model</h4>
                                <div className="model">
                                    <img src="./glassesImage/model.jpg" alt="./glassesImage/model.jpg" width="100%"/>
                                    {
                                        product ? (
                                            <div>
                                                <div className="model__detail">
                                                    <h3>{product.name}</h3>
                                                    <label type="button" className="btn btn-danger mr-2">${product.price}</label>
                                                    <label className="stocking">Stocking</label>
                                                    <p className="mt-2 mb-0">{product.desc}</p>
                                                </div>
                                                <div className="model__changeGlasses">
                                                    <img src={product.url} alt={product.url} width="100%" />
                                                </div>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
