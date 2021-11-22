import React from 'react'
import products from "../Data"
import ProductCard from '../Components/ProductCard'
import "./HomeScreen.css"

const HomeScreen = () => {
    return (
        <div>
            {products.map((product) =>(
                <ProductCard key={product.id} product={product}/>
                ))}
        </div>
    )
}

export default HomeScreen
