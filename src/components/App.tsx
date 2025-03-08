import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {observer} from "mobx-react-lite";

import "./App.css"

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./home/Home";
import SingIn from "./account/SingIn";
import Search from "./search/Search";
import Result from "./search/Result/Result";


function App() {
    const [menuActive, setMenuActive] = useState(true);
    const change_btn = () => {setMenuActive(!menuActive)}
    return (
        <>
            <Header
                change_btn={change_btn}
                menuActive={menuActive}
                setMenuActive={setMenuActive}
            />
            <div className={menuActive ? 'body' : 'body active'}>
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

