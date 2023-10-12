import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { baseUrl } from '../../utils/baseUrl';

export default function CategorySlider() {
    const [categories, setCategories] = useState([])
    const getAllCategories = async () => {
        let { data } = await axios.get(`${baseUrl}/categories`)
        setCategories(data.data)
        
    }

    useEffect(() => {
        getAllCategories()
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };

    return (
        <>
            <div className="container my-5">
                <h3>Shop popular Categories</h3>
                <Slider {...settings} autoplaySpeed={5000}>
                    {categories.map((category, index) => {
                        return <div key={category._id}>
                            <img src={category.image} alt='' className='w-100 ' height={200} />
                            <h6>{category.name}</h6>
                        </div>
                    })}
                    
                </Slider>
            </div>
        </> 
    );
}
