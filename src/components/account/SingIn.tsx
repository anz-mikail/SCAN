import React, {FC, useContext, useState} from "react";
import {observer} from "mobx-react-lite";

import "../../styles/Singin.css"
import {Context} from "../../index";


const SingIn: FC = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const {store} = useContext(Context);

    if (!store.isAuth){
        return (
            <>
                <h1>Вы авторизованы</h1>
            </>
        )
    }
    else {
        return (
            <div className='SingIn-Body'>
                <div className="SingIn-text">
                    <h1>ДЛЯ ОФОРМЛЕНИЯ ПОДПИСКИ НА ТАРИФ, НЕОБХОДИМО АВТОРИЗОВАТЬСЯ.</h1>
                </div>
                <div className="SingIn">
                    <div className="choice">
                        <div>
                            <p><a href="#">Войти</a></p>
                        </div>
                        <div>
                            <p><a href="#">Зарегистрироваться</a></p>
                        </div>
                        <button></button>
                        <button></button>
                    </div>

                    <p>Логин или номер телефона:</p>

                    <input className="input"
                           type="text"
                           placeholder="Email"
                           onChange={e => setLogin(e.target.value)}
                           value={login}/>

                    <p>Пароль:</p>

                    <input className="input"
                           type="password"
                           placeholder="Пароль"
                           onChange={e => setPassword(e.target.value)}
                           value={password}/>

                    <button className='SingIn-btn'
                            onClick={() => store.login(login, password)}
                    >Войти</button>

                    <a href="#">Восстановить пароль</a>
                    <p>Войти через:</p>
                    <div className='network'>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>

        )
    }
}


export default observer(SingIn);