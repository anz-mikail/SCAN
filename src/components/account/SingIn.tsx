import React, {FC, useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

import "../../styles/Singin.css"
import {Context} from "../../index";
import Home from "../home/Home";
import google from '../../images/Group 1171274227.svg';
import facebook from '../../images/Vector.svg';
import yandex from '../../images/Group 1171274228.svg';


const SingIn: FC = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const {store} = useContext(Context);

    if (store.isAuth) {
                return (
                    <>
                        <Home/>
                    </>
                );} else {
        return (
            <div className='SingIn-Body'>
                <div className="SingIn-text">
                    <h1>ДЛЯ ОФОРМЛЕНИЯ ПОДПИСКИ НА ТАРИФ, НЕОБХОДИМО АВТОРИЗОВАТЬСЯ.</h1>
                </div>
                <div className="SingIn">
                    <div className="choice">
                        <div>
                            <Link className="ChoiceLink" to="/singIn"
                            >Войти<span></span></Link>
                        </div>
                        <div>
                            <Link className="ChoiceLink" to="#"
                            >Зарегистрироваться <span></span></Link>
                        </div>
                    </div>
                    <p className='text'>Логин или номер телефона:</p>
                    <input className="login"
                           type="text"
                           onChange={e => setLogin(e.target.value)}
                           value={login}/>
                    {/*<p>Ведите корректные данные</p>*/}
                    <p className='text'>Пароль:</p>

                    <input className={!store.isError ? 'password' : 'password active'}
                           type="password"
                           onChange={e => setPassword(e.target.value)}
                           value={password}/>

                    <div className="ErrorDiv">
                        <p className={!store.isError ? 'textError' : 'textError active'}>
                            Неправильный пароль</p>
                    </div>

                    <button className={password && login ? 'SingIn-btn active' : 'SingIn-btn'}
                            onClick={() => store.login(login, password)}>
                        Войти
                    </button>

                    <a href="#">Восстановить пароль</a>

                    <div className='network'>
                        <p className='text'>Войти через:</p>
                        <div className='networkButton'>
                            <button><img src={google}/></button>
                            <button><img src={facebook}/></button>
                            <button><img src={yandex}/></button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}





export default observer(SingIn);