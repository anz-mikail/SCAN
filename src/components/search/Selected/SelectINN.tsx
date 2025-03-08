import React, { useState, useEffect } from "react";
import {observer} from "mobx-react-lite";

import "./SelectInn.css"


function SelectINN({inn, setInn, setTonality,limit, setLimit, setError, error, SearchError, limitError, setLimitError}) {

    useEffect(() => {
        if (limit && (limit < 1 || limit > 100)) {
            setLimitError("Вы ввели недопустимое значение!");
        } else if (!limit) {
            setLimitError("Обязательное поле");
        } else if (!Number(limit)) {
            setLimitError("Введите число!");
        } else {
            setLimitError("")
        }
    },);

    const validateInn = (inn) => {
        let errorObj = { code: 0, message: '' };
        let result = false;
        if (typeof inn === 'number') {
            inn = inn.toString();
        } else if (typeof inn !== 'string') {
            inn = '';
        }
        if (!inn.length) {
            errorObj.code = 1;
            errorObj.message = 'Обязательное поле';
        } else if (/[^0-9]/.test(inn)) {
            errorObj.code = 2;
            errorObj.message = 'Введите корректные данные';
        } else if ([10, 12].indexOf(inn.length) === -1) {
            errorObj.code = 3;
            errorObj.message = 'Введите корректные данные';
        } else {
            const checkDigit = (inn, coefficients) => {
                let n = 0;
                for (let i = 0; i < coefficients.length; i++) {
                    n += coefficients[i] * inn[i];
                }
                // @ts-ignore
                return parseInt(n % 11 % 10, 10);
            };
            switch (inn.length) {
                case 10:
                    var n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if (n10 === parseInt(inn[9], 10)) {
                        result = true;
                    }
                    break;
                case 12:
                    var n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    var n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if ((n11 === parseInt(inn[10], 10)) && (n12 === parseInt(inn[11], 10))) {
                        result = true;
                    }
                    break;
            }
            if (!result) {
                errorObj.code = 4;
                errorObj.message = 'Введите корректные данные';
            }
        }
        setError(errorObj.message);
        return result;
    };

    useEffect(() => {
        validateInn(inn);
    }, [inn]);

    return (
        <div className='SelectINN'>
            <div className='SelectInnTitle'>
                <p>ИНН компании</p>
                <p className={SearchError && error? 'snowflake active' : 'snowflake'}>*</p>
            </div>
            <input
                className={SearchError && error? 'LimitInput active' : 'LimitInput'}
                placeholder='10 цифр'
                onChange={e => setInn(e.target.value)}
            />
            <p className={SearchError && error? 'error active': 'error'}>{error}</p>
            <p>Тональность</p>
            <select
                className='SelectBlock1'
                onChange={e => setTonality(e.target.value)}
            >
                <option value="any">любая</option>
                <option value="positive">позитивная</option>
                <option value="negative">негативная</option>
            </select>
            <div className='SelectInnTitle'>
                <p>Количество документов в выдаче</p>
                <p className={SearchError && limitError? 'snowflake active' : 'snowflake'}>*</p>
            </div>
            <input
                className={SearchError && limitError? 'LimitInput active' : 'LimitInput'}
                placeholder='от 1 до 100'
                onChange={e => setLimit(e.target.value)}
            />
            <span>
                <p className={SearchError && limitError? 'LimitText active' : 'LimitText'}>
                {limitError}
                </p>
            </span>
        </div>
    )
}


export default observer(SelectINN);