import React, {useContext} from 'react'
import {observer} from "mobx-react-lite";

import "./Rate.css";

import Rate_3 from "../../../styles/images/Rate-3.png";
import Check from "../../../styles/images/Check.png";


function Rate3() {
    const checkValue = localStorage.getItem('rate')
    const Value = 'Business'
    return (
        <div className={!(checkValue === Value) ? "rate3" : "rate3 active"}>

            <div className="rateHeader3">
                <div className="text">
                    <h2>Business</h2>
                    <p>Для корпоративных клиентов</p>
                </div>
                <img className="rateImage" src={Rate_3} alt=" "/>
            </div>

            <div className="rateRate">
                <div className="СurrentRate1">
                    <div className={!(checkValue === Value) ? "СurrentRate" : "СurrentRate active"}>
                        Текущий тариф
                    </div>
                </div>
                <span className="ratePrice">
                        <p>2379 ₽</p>
                        <p>3700 ₽</p>
                    </span>
                <span><p></p></span>
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

            <div className={!(checkValue === Value) ? "ratebutton1" : "ratebutton2"}>
                <button className="ratebutton11">Подробнее</button>
            </div>

            <div className={!(checkValue === Value) ? "ratebutton2" : "ratebutton1"}>
                <button className="ratebutton22">Перейти в личный кабинет</button>
            </div>

        </div>
    )
}

export default observer(Rate3);