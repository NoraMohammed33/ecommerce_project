import React from 'react';
import Slider from "react-slick";
import slide1 from "../../images/grocery-banner.png"
import slide2 from "../../images/grocery-banner-2.jpeg";
import slide3 from "../../images/slider-2.jpeg"
export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };
    return (
        <div className="container-fluid mt-3 mb-5">
            <Slider {...settings} autoplaySpeed={2000}>
                <img src={slide1} alt='' />
                <img src={slide2} alt='' />
                <img src={slide3} alt='' />
            </Slider>
        </div>
    );
}
