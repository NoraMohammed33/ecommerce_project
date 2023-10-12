import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../utils/baseUrl';
import axios from 'axios';

export default function ProductDetails() {

    let {id} = useParams()

    const [product, setProduct] = useState([])
    const getProduct = async () => {
        let { data } = await axios.get(`${baseUrl}/products/${id}`)
        setProduct(data.data)
    }
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={product.imageCover} alt='' className='w-100' />
                    </div>
                    <div className="col-md-9">
                        <h3>{product.title}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
