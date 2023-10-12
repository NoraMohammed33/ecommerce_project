import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../utils/baseUrl';
import Product from '../Product/Product';

export default function Products() {
    const [products, setProducts] = useState([])
    const getAllProducts = async () => {
        let { data } = await axios.get(`${baseUrl}/products`)
        setProducts(data.data)
        
    }

    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <Product products={products} />
                </div>
        </div>
    );
}
