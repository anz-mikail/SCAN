import React, {FC, useContext, useEffect} from "react"
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

import "../../styles/Info.css"



const Info_1: FC = () => {

    const {store} = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.info()
        }
    }, [])

    if (store.isLoading) {
            return (
                <div className='info-1'>
                    <p>Загрузка</p>
                </div>
            )
    }
    else {
        return (
            <div className='info-1'>
                <p>{store.isLoading ? 'Загрузка' : ''}</p>
                <p>Использовано компаний {localStorage.getItem('usedCompanyCount')}</p>
                <p>Лимит по компаниям {localStorage.getItem('companyLimit')}</p>
            </div>
        )
    }
}

export default observer(Info_1);