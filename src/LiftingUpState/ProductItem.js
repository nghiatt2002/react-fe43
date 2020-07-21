import React from 'react';

function ProductItem(props) {

    let {product, dataDetail, handleBuy} = props;

    return (
        <div className="card">
            <img className="card-img-top" src={product.hinhAnh} alt={product.hinhAnh} />
            <div className="card-body">
                <h4 className="card-title">{product.tenSP}</h4>
                <button className="btn btn-success" onClick={() => {
                    dataDetail(product)
                }}>Chi tiết</button>
                <button type="button" className="btn btn-danger" onClick={() => {
                    handleBuy(product)
                }}>Mua</button>
            </div>
        </div>
    )
}

export default ProductItem;
