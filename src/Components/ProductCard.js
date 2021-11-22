import React from 'react'
import products from '../Data'
import "./ProductCart.css"

const ProductCard = ({product}) => {
    return (
        <div className="productCard__wrapper">
            <img className="productCard__img" src={product.image}/>
        </div>
    )
}

export default ProductCard
