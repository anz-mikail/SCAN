import React, {useContext, useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import {observer} from "mobx-react-lite";

import "../styles/App.css"

import Header from "./Header/Header";
import Footer from "./Footer";
import Home from "./home/Home";
import SingIn from "./account/SingIn";
import Search from "./search/Search";
import Result from "./search/Result";
import {Context} from "../index";


function App() {

    const [menuActive, setMenuActive] = useState(false);
    const change_btn = () => {setMenuActive(!menuActive)}


    const {store} = useContext(Context);
    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         store.checkAuth()
    //     }
    // }, [])

    // if (!store.isLoading) {
    //     return (
    //         <>
    //             <h1>Загрузка</h1>
    //         </>
    //     )
    // }
    //
    // if (!store.isAuth){
    //     return (
    //         <>
    //             <h1>Вы авторизованы</h1>
    //         </>
    //     )
    // }

    return (
        <>
            <Header
                change_btn={change_btn}
                menuActive={menuActive}/>


            <div className={menuActive ? 'body' : 'body active'}>

                {/*<h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>*/}
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/singIn" element={<SingIn/>}/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/result" element={<Result/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </>
    )
}


export default observer(App);

