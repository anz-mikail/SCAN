import React, {useContext} from 'react'
import {observer} from "mobx-react-lite";

import "./Rate.css";

import Rate_1 from '../../../styles/images/Rate-1.png';
import Check from "../../../styles/images/Check.png";


function Rate1() {
    const checkValue = localStorage.getItem('rate')
    const Value = 'Beginner'
    return (
        <>
            <div className={!(checkValue === Value) ? "rate1" : "rate1 active"}>
                <div className="rateHeader1">
                    <div className="text">
                        <h2>Beginner</h2>
                        <p>Для небольшого исследования</p>
                    </div>
                    <img className="rateImage" src={Rate_1} alt=" "/>
                </div>

                <div className="rateRate">
                    <div className="СurrentRate1">
                        <div className={!(checkValue === Value) ? "СurrentRate" : "СurrentRate active"}>
                            Текущий тариф
                        </div>
                    </div>
                    <span className={!(checkValue === Value) ? "ratePrice" : "ratePrice active"}>
                        <p>799 ₽</p>
                        <p>1200 ₽</p>
                    </span>
                    <span>
                        <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                    </span>
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


export default observer(Rate1);