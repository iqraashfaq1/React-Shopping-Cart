import React from 'react'
import products from "../Data"
import ProductCard from '../Components/ProductCard'
import "./HomeScreen.css"

const HomeScreen = () => {
    return (
        <div className="products_wrapper">
            {products.map((product) =>(
                <ProductCard key={product._id} product={product}/>
                ))}
        </div>
    )
}

export default HomeScreen
