import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/ResultSlider.css'

import {FaChevronLeft} from "react-icons/fa";
import {FaChevronRight} from "react-icons/fa";


function NextArrow(props) {
    const { onClick } = props;
    return (
        <FaChevronRight className='NextArrow' onClick={onClick}/>
    );
}

function PrevArrow(props) {
    const {onClick} = props;
    return (
        <FaChevronLeft className='PrevArrow' onClick={onClick}/>
    );
}


const ResultSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <div className="ResultSlider">
            <Slider {...settings}>
                <div>
                    <div className="ResultItem">
                        <div className="ResultItemText">num 1</div>
                        <span className="ResultItemSpan"></span>
                    </div>
                </div>
                <div>
                    <div className="ResultItem">
                        <div className="ResultItemText">num 2</div>
                        <span className="ResultItemSpan"></span>
                    </div>
                </div>
                <div>
                    <div className="ResultItem">
                        <div className="ResultItemText">num 3</div>
                        <span className="ResultItemSpan"></span>
                    </div>
                </div>
                <div>
                    <div className="ResultItem">
                        <div className="ResultItemText">num 4</div>
                        <span className="ResultItemSpan"></span>
                    </div>
                </div>
                <div>
                    <div className="ResultItem">
                        <div className="ResultItemText">num 5</div>
                        <span className="ResultItemSpan"></span>
                    </div>
                </div>
                <div>
                    <div className="ResultItem">
                        <div className="ResultItemText">num 6</div>
                        <span className="ResultItemSpan"></span>
                    </div>
                </div>
            </Slider>
        </div>
    );
};


export default ResultSlider;