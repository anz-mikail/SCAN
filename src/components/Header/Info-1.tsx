import React, {FC, useContext, useEffect} from "react"
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

import "../../styles/Info.css"



const Info_1: FC = () => {

    const {store} = useContext(Context);
    // if (localStorage.getItem('token')) {store.info()}
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.info()
        }
    }, [])

    return (
        <div className='info-1'>
            {/*<button onClick={ () => store.info()}>инфо</button>*/}
            {/*{!store.isAuth ? onclick={store.info()}}*/}
            <p>{store.isLoading ? 'Загрузка' : ''}</p>
            <p>Использовано компаний {localStorage.getItem('usedCompanyCount')}</p>
            <p>Лимит по компаниям {localStorage.getItem('companyLimit')}</p>
            {/*{localStorage.getItem('expire')}*/}
        </div>
    )
}

export default observer(Info_1);