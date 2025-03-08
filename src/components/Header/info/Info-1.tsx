import React, {FC, useContext, useEffect} from "react"
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

import "./Info.css"
import loading_icon from "../../../styles/images/loading_icon.svg";



function Info_1 ({menuActive}) {

    const {store} = useContext(Context);

    useEffect(() => {
        if (!store.isAuth) {
            store.info()
        }
    }, [])
    useEffect(() => {
            store.info()
    }, [store.isAuth])

    if (store.isLoading) {
            return (
                <div className={menuActive? 'infoLoading': 'infoLoading active'}>
                    <div className="main_body">
                        <img src={loading_icon} alt="Loading" className="header-loading-icon"/>
                    </div>
                </div>
            )
    } else {
        return (
            <div className={menuActive ? 'info-1': 'info-1 active'}>
                <div>
                    <p>Использовано компаний</p>
                    <p>{localStorage.getItem('usedCompanyCount')}</p>
                </div>
                <div>
                    <p>Лимит по компаниям</p>
                    <p>{localStorage.getItem('companyLimit')}</p>
                </div>
            </div>
        )
    }
}

export default observer(Info_1);