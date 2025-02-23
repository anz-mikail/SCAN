import React, {useState} from "react";
import {observer} from "mobx-react-lite";

import "../../styles/SelectInn.css"


function SelectINN({inn, setInn, setTonality,limit, setLimit}) {

    // const [CheckLimit, changeCheckLimit] = useState(false)
    // const handleCheckLimit = () => {changeCheckLimit(true) }

    // if (limit <= 1000 ) {  }

    return (
        <div className='SelectINN'>
            <p>ИНН компании*</p>
            <input
                className={ !inn ? 'LimitInput' : 'LimitInput active'}
                placeholder='10 цифр'
                onChange={e => setInn(e.target.value)}
            />
            <p>Тональность</p>
            <select
                className='SelectBlock1'
                onChange={e => setTonality(e.target.value)}>
                <option value="positive">позитивная</option>
                <option value="negative">негативная</option>
                <option value="any">любая</option>
            </select>
            <p>Количество документов в выдаче*</p>
            <input
                className={limit >= 0 && limit <= 1000 ? 'LimitInput' : 'LimitInput active'}
                placeholder='от 1 до 1000'
                onChange={e => setLimit(e.target.value)}
            />
            <span>
                <div className={limit >= 0 && limit <= 1000  ? 'LimitText' : 'LimitText active'}>
                Введите число от 0 до 1000
                </div>
            </span>
        </div>
    )
}


export default observer(SelectINN);