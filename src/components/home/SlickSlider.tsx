import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slider.css'

import {FaChevronLeft} from "react-icons/fa";
import {FaChevronRight} from "react-icons/fa";
import SliderImage1 from "../../styles/images/SliderImage1.svg"
import SliderImage2 from "../../styles/images/SliderImage2.svg"
import SliderImage3 from "../../styles/images/SliderImage3.svg"


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FaChevronRight
            className={className}
            style={{...style,
                display: "block",
                color:"grey",
                width:"39px",
                height:"39px",
                margin:"-10px",
            }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick  } = props;
    return (
        <FaChevronLeft
            className={className}
            style={{...style,
                display: "block",
                color:"grey",
                width:"39px",
                height:"39px",
                margin:"-10px",
            }}
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
                breakpoint: 768,
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
                    <div className="image">
                        <img
                            className= 'SliderImage'
                            src={SliderImage1}
                        />
                        <p>
                            Высокая и оперативная скорость обработки заявки
                        </p>
                    </div>
                </div>
                <div>
                    <div className="image">
                        <img
                            src={SliderImage2}
                            className= 'SliderImage'
                        />
                        <p>
                            Огромная комплексная база данных,
                            обеспечивающая объективный ответ на запрос
                        </p>
                    </div>
                </div>
                <div>
                    <div className="image">
                        <img
                            src={SliderImage3}
                            className= 'SliderImage'
                        />
                        <p>
                            Защита конфиденциальных сведений, не подлежащих
                            разглашению по федеральному законодательству
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};


export default SlickSlider;