import React from 'react'

import "../../styles/Rate.css";

import Rate_3 from "../../images/Rate-3.png";
import Check from "../../images/Check.png";


function Rate3() {
    return (
        <div className="rate">

            <div className="rateHeader3">
                <div className="text">
                    <h2>Business</h2>
                    <p>Для корпоративных клиентов</p>
                </div>
                <img src={Rate_3} alt=" "/>
            </div>

            <div className="rateRate">
                    <span>
                        <p>2379 ₽</p>
                        <p>3700 ₽</p>
                    </span>
                <p></p>
            </div>

            <div className='rateText'>
                <h3>В тариф входит:</h3>
                <p><img src={Check} alt="" className='imgGalochka'/>
                    Все пункты тарифа Pro</p>
                <p><img src={Check} alt="" className='imgGalochka'/>
                    Безлимитное количество запросов</p>
                <p><img src={Check} alt="" className='imgGalochka'/>
                    Приоритетная поддержка</p>
            </div>

            <button>
                Подробнее
            </button>

        </div>
    )
}

export default Rate3;