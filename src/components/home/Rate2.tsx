import React from 'react'

import "../../styles/Rate.css";


import Rate_2 from "../../images/Rate-2.png";
import Check from "../../images/Check.png";


function Rate2() {
    return (
        <>
            <div className="rate">
                <div className="rateHeader2">
                    <div className="text">
                        <h2>PRO</h2>
                        <p>Для HR и фрилансеров</p>
                    </div>
                    <img src={Rate_2} alt=" "/>
                </div>

                <div className="rateRate">
                    <span>
                        <p>1299 ₽</p>
                        <p>2600 ₽</p>
                    </span>
                    <p>или 279 ₽/мес. при рассрочке на 24 мес.</p>
                </div>

                <div className='rateText'>
                    <h3>В тариф входит:</h3>
                    <p><img src={Check} alt="" className='imgGalochka'/>
                        Все пункты тарифа Beginner</p>
                    <p><img src={Check} alt="" className='imgGalochka'/>
                        Экспорт истории</p>
                    <p><img src={Check} alt="" className='imgGalochka'/>
                        Рекомендации по приоритетам</p>
                </div>

                <button>
                    Подробнее
                </button>
            </div>
        </>
    )
}

export default Rate2;