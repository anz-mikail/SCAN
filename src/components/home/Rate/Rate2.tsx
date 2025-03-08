import React, {useContext} from 'react'
import {observer} from "mobx-react-lite";

import "./Rate.css";


import Rate_2 from "../../../styles/images/Rate-2.png";
import Check from "../../../styles/images/Check.png";


function Rate2() {
    const checkValue = localStorage.getItem('rate')
    const Value = 'PRO'
    return (
        <>
            <div className={!(checkValue === Value) ? "rate2" : "rate2 active"}>
                <div className="rateHeader2">
                    <div className="text">
                        <h2>PRO</h2>
                        <p>Для HR и фрилансеров</p>
                    </div>
                    <img className="rateImage" src={Rate_2} alt=" "/>
                </div>

                <div className="rateRate">
                    <div className="СurrentRate1">
                        <div className={!(checkValue === Value) ? "СurrentRate" : "СurrentRate active"}>
                            Текущий тариф
                        </div>
                    </div>
                    <span className="ratePrice">
                        <p>1299 ₽</p>
                        <p>2600 ₽</p>
                    </span>
                    <span>
                        <p>или 279 ₽/мес. при рассрочке на 24 мес.</p>
                    </span>
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

                <div className={!(checkValue === Value) ? "ratebutton1" : "ratebutton2"}>
                    <button className="ratebutton11">Подробнее</button>
                </div>

                <div className={!(checkValue === Value) ? "ratebutton2" : "ratebutton1"}>
                    <button className="ratebutton22">Перейти в личный кабинет</button>
                </div>
            </div>
        </>
    )
}

export default observer(Rate2);