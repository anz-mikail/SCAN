import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";

import "../../styles/Home.css"
import SlickSlider from "./SlickSlider";
import Rate1 from "./Rate1";
import Rate2 from "./Rate2";
import Rate3 from "./Rate3";
import {Context} from "../../index";


function Home() {

    const {store} = useContext(Context);

    return (
        <>
            <div className='Home'>
                <div className='Home-text1'>
                    <h1>
                        СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ О КОМПАНИИ ПО ЕГО ИНН
                    </h1>
                </div>
                <div className='Home-text2'>
                    <p>
                        Комплексный анализ публикаций, получение данных в формате PDF на электронную
                        почту.
                    </p>
                </div>
                <div className='Home-btn'>
                    <Link to='/search'
                          className={!store.isAuth? "link": "link active"}>
                        Запросить данные
                    </Link>
                </div>
            </div>

            <div className='SlickSlider'>
                <h1>ПОЧЕМУ ИМЕННО МЫ</h1>
                <SlickSlider/>
            </div>

            <div className='Rates'>
                <h1>НАШИ ТАРИФЫ</h1>
                <div className='Rate-item'>
                    <Rate1/>
                    <Rate2/>
                    <Rate3/>
                </div>
            </div>

        </>
    )
}


export default observer(Home);