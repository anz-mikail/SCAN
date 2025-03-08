import React, {useContext} from 'react';
import Slider from 'react-slick';
import {observer} from "mobx-react-lite";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './ResultSlider.css'
import loading_icon from '../../../../styles/images/loading_icon.svg';

import {FaChevronLeft} from "react-icons/fa";
import {FaChevronRight} from "react-icons/fa";
import {Context} from "../../../../index";


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


const ResultSlider = ({error, total, risk }) => {

    const {store} = useContext(Context);

    const historySum1 = (total, risk) => {
        if ((total + risk) > 8) {return 8}
        else {return (total + risk);}
    }
    const historySum2 = (total, risk) => {
        if ((total + risk) > 7) {return 7}
        else {return (total + risk);}
    }
    const historySum3 = (total, risk) => {
        if ((total + risk) > 6) {return 6}
        else {return (total + risk);}
    }
    const historySum4 = (total, risk) => {
        if ((total + risk) > 5) {return 5}
        else {return (total + risk);}
    }
    const historySum5 = (total, risk) => {
        if ((total + risk) > 4) {return 4}
        else {return (total + risk);}
    }
    const historySum6 = (total, risk) => {
        if ((total + risk) > 3) {return 3}
        else {return (total + risk);}
    }


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: historySum1(total.length, risk.length),
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            { breakpoint: 1400,
                settings: {
                    slidesToShow: historySum2(total.length, risk.length),
                }
            },
            { breakpoint: 1250,
                settings: {
                    slidesToShow: historySum3(total.length, risk.length),
                }
            },
            { breakpoint: 1100,
                settings: {
                    slidesToShow: historySum4(total.length, risk.length),
                }
            },
            { breakpoint: 950,
                settings: {
                    slidesToShow: historySum5(total.length, risk.length),
                }
            },
            { breakpoint: 800,
                settings: {
                    slidesToShow: historySum6(total.length, risk.length),
                }
            },
            { breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                }
            },
            { breakpoint: 500,
                settings: {
                slidesToShow: 1,
                }
            },
        ]
    };
    if (store.startFetch) {
        return (
            <div className='icon-conteiner'>
                <img src={loading_icon} alt="Loading" className="result-loading-icon"/>
                <p className='icon-conteiner2'>Загружаем данные</p>
            </div>
        );
    }
    if (error) {
        return (
                <div className='icon-conteiner'>
                    <p> По Вашему запросу ничего не найдено!!!</p>
                </div>
        );
    }
    else {
        return (
            <div className="ResultSlider">
                <Slider {...settings}>
                    {total?.map((item, index) =>
                        <div className="ResultItemContainer" key={index}>
                            <div className="ResultItem">
                                <p>
                                    {item.date.slice(8, 10)}.
                                    {item.date.slice(5, 7)}.
                                    {item.date.slice(0, 4)}
                                </p>
                                <p>{item.value}</p>
                                <p>0</p>
                            </div>
                            <div className="ResultItemSpan"></div>
                        </div>
                    )}
                    {risk?.map((item, index) =>
                        <div className="ResultItemContainer" key={index}>
                            <div className="ResultItem">
                                <p className="ResultItemText">
                                    {item.date.slice(8, 10)}.
                                    {item.date.slice(5, 7)}.
                                    {item.date.slice(0, 4)}
                                </p>
                                <p>{item.value}</p>
                                <p>2</p>
                            </div>
                            <div className="ResultItemSpan"></div>
                        </div>
                    )}
                </Slider>
            </div>
        );
    }
};


export default observer(ResultSlider);