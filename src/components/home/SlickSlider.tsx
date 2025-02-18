import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../styles/Slider.css'

import {FaChevronLeft} from "react-icons/fa";
import {FaChevronRight} from "react-icons/fa";


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FaChevronRight
            className={className}
            style={{...style, display: "block", color:"grey"}}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <FaChevronLeft
            className={className}
            style={{...style, display: "block", color:"grey"}}
            onClick={onClick}
        />
    );
}

const SlickSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div className="image">num 1</div>
                </div>
                <div>
                    <div className="image">num 2</div>
                </div>
                <div>
                    <div className="image">num 3</div>
                </div>
                <div>
                    <div className="image">num 4</div>
                </div>
                <div>
                    <div className="image">num 5</div>
                </div>
                <div>
                    <div className="image">num 6</div>
                </div>
            </Slider>
        </div>
    );
};


export default SlickSlider;