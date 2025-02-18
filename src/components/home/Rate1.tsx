import React from 'react'

import "../../styles/Rate.css";

import Rate_1 from '../../images/Rate-1.png';
import Check from "../../images/Check.png";


function Rate1() {
    return (
        <>
            <div className="rate">
                <div className="rateHeader1">
                    <div className="text">
                        <h2>Beginner</h2>
                        <p>Для небольшого исследования</p>
                    </div>
                    <img src={Rate_1} alt=" "/>
                </div>

                <div className="rateRate">
                    <span>
                        <p>799 ₽</p>
                        <p>1200 ₽</p>
                    </span>
                    <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                </div>

                <div className='rateText'>
                    <h3>В тариф входит:</h3>
                    <p><img src={Check} alt="" className='imgGalochka'/>
                        Безлимитная история запросов</p>
                    <p><img src={Check} alt="" className='imgGalochka'/>
                        Безопасная сделка</p>
                    <p><img src={Check} alt="" className='imgGalochka'/>
                        Поддержка 24/7</p>
                </div>

                <button>
                    Подробнее
                </button>
            </div>
        </>
    )
}


export default Rate1;