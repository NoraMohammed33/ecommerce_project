import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({products}) {
    console.log(products)
    return (
        <>
            {products.map((product, index) => {
                return <div key={product._id} className="col-md-2">
                    <div className="product">
                        <Link to={"/product-details/"+product._id}>
                            <img src={product.imageCover} alt='' className='w-100' />
                            <h6 className='text-main'>{product.category.name}</h6>
                            <p>{product.title.split(' ').slice(0, 2).join(' ')}</p>
                            <div className='d-flex justify-content-between my-2'>
                                <span>{product.price} EGP</span>
                                <div>
                                    <i className='fas fa-star rating-color'></i>
                                    {product.ratingsAverage}
                                </div>
                            </div>
                        </Link>
                        <button className='btn bg-main text-white w-100 my-3'>Add to cart</button>
                    </div>
                </div>
            })}

        </>
    );
}
