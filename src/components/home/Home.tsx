import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";

import "./Home.css"
import SlickSlider from "./SlickSlider";
import Rate1 from "./Rate/Rate1";
import Rate2 from "./Rate/Rate2";
import Rate3 from "./Rate/Rate3";
import {Context} from "../../index";
import HomeImg1 from "../../styles/images/HomeImg1.svg"
import HomeImg2 from "../../styles/images/HomeImg2.svg"


function Home() {

    const {store} = useContext(Context);

    return (
        <>
            <div className='Home'>
                <div className='Home-text'>
                    <div className='Home-text1'>
                        <p>
                            СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ О КОМПАНИИ ПО ЕГО ИНН
                        </p>
                    </div>
                    <div className='Home-text2'>
                        <p>
                            Комплексный анализ публикаций, получение данных в формате PDF на электронную
                            почту.
                        </p>
                    </div>
                    <div className='Home-btn'>
                        <Link to='/search'
                              className={store.isAuth? "link": "link active"}>
                            Запросить данные
                        </Link>
                    </div>
                </div>
                <div className="HomeImage1-container">
                    <img  className="Home-image1" src={HomeImg1}/>
                </div>
            </div>
            <div className='SlickSlider'>
                <p className='Home-text3'>ПОЧЕМУ ИМЕННО МЫ</p>
                <SlickSlider/>
            </div>
            <div>
                <img className="Home-image2" src={HomeImg2}/>
            </div>
            <div className='Rates'>
            <p className='Home-text3'>НАШИ ТАРИФЫ</p>
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