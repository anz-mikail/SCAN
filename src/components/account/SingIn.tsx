import React, {FC, useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

import "../../styles/Singin.css"
import {Context} from "../../index";


const SingIn: FC = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const {store} = useContext(Context);

    // if (!store.isAuth){
    //     return (
    //         <div className="SingIn-text">
    //             <h1>Вы авторизованы</h1>
    //         <div/>
    //     )
    // }
    // else {
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

                    <p>Логин или номер телефона:</p>

                    <input className="input"
                           type="text"
                           onChange={e => setLogin(e.target.value)}
                           value={login}/>

                    <p>Пароль:</p>

                    <input className="input"
                           type="password"
                           onChange={e => setPassword(e.target.value)}
                           value={password}/>

                    <button className={password && login? 'SingIn-btn active' : 'SingIn-btn'}
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
// }


export default observer(SingIn);