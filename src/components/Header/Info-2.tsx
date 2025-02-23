import React, {FC, useContext} from "react"
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

import "../../styles/Info.css"



const Info_2: FC = () => {

    const {store} = useContext(Context);

    return (
        <div className='info-2'>
            <p> {localStorage.getItem('login')}</p>
            <p className='link-4' onClick={() => store?.logout()}>Выйти</p>
        </div>
    )
}

export default observer(Info_2);