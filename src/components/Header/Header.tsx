import React, {useContext, useEffect }  from "react";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";

import "./Header.css"

import Log_1 from "./Log/Log_1";
import Log_2 from "./Log/Log_2";
import {Context} from "../../index";
import Info_1 from "./info/Info-1";
import Info_2 from "./info/Info-2";



function Header({change_btn, menuActive, setMenuActive}) {
    const {store} = useContext(Context);

    const HandleSetMenuActive = () => {
        setMenuActive(true);
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            let refreshLogin = localStorage.getItem('login')
            let refreshPassword = localStorage.getItem('password')
            store.refresh(refreshLogin, refreshPassword)
        }
    }, [])
    return (
        <nav className={menuActive ? 'navbar' : 'navbar active'}>
            <div className={menuActive ? 'log' : 'log active'}>
                <div className={menuActive ? 'log-1' : 'log-1 active'}><Log_1/></div>
                <div className={menuActive ? 'log-2' : 'log-2 active'}><Log_2/></div>
            </div>

            <button className={menuActive ? 'burger-btn' : 'burger-btn active'}
                    onClick={change_btn}>
                <span></span><span></span><span></span>
            </button>

            <button className={menuActive ? 'burger-btn2' : 'burger-btn2 active'}
                    onClick={change_btn}>
                x
            </button>

            <ul className='nav-1'>
                <Link className='link' onClick={HandleSetMenuActive} to="/">Главная</Link>
                <Link className='link' onClick={HandleSetMenuActive} to="#">Тарифы</Link>
                <Link className='link' onClick={HandleSetMenuActive} to="#">FAQ</Link>
            </ul>

            <ul className={!store.isAuth ? 'nav-2' : 'nav-2 active'}>
                <Link className='link-1' onClick={HandleSetMenuActive} to="#">Зарегистрироваться</Link>
                <p className='link-2'>|</p>
                <Link className='link-3' onClick={HandleSetMenuActive} to="/singIn">Войти</Link>
            </ul>
            <ul className={!store.isAuth ? 'nav-3' : 'nav-3 active'}>
                <Info_1 menuActive={menuActive}/>
                <Info_2 menuActive={menuActive}/>
            </ul>
        </nav>
    )
}


export default observer(Header);