import React, {FC, useContext, useEffect, useState} from "react"
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

import "./Info.css"
import avatar from "../../../styles/images/avatarka.svg"


function Info_2 ({menuActive})  {

    const {store} = useContext(Context);

    const [userName, setUserName] = useState("");

    useEffect(() => {
        setUserName(localStorage.getItem('login'))
    }, [store.isAuth]);

    return (
        <div className='info-2'>
            <div>
                <p> {userName}</p>
                <p className='link-4' onClick={() => store?.logout()}>Выйти</p>
            </div>
            <div style={!menuActive? {display: "none"} : { display: "block" }}>
                <img className="avatar"
                     src={avatar}
                     alt=""
                />
            </div>
        </div>
    )
}

export default observer(Info_2);