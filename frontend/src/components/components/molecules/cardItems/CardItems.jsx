import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './CardItems.css'

import ProductCard from '../../atoms/card/ProductCard';


const endpoint = 'http://localhost:8282/api'
const Cardgeneric = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    }


    return (
        <>
        
        <div class="cards-container">
            {products.map((product) => (<ProductCard key={product.id} {...product} />))}
        </div >
        
            
        </>
     );
};
export default Cardgeneric;