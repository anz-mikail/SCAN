import React from "react";

import "/src/styles/Search.css"


function Search() {
    return (
            <div className='Search'>
                <div className="Search-title">
                    <h1>НАЙДИТЕ НЕОБХОДИМЫЕ ДАННЫЕ В ПАРУ КЛИКОВ</h1>
                    <p>Задайте параметры поиска.</p>
                    <p>Чем больше заполните, тем точнее поиск </p>
                </div>

                <div className="Search-block">
                    <div className="Search-block1">
                        <div>
                            <p>ИНН компании*</p>
                            <input placeholder='10 цифр'/>
                            <p>Тональность</p>
                            <select className='selectBlock1'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <p>Количество документов в выдаче*</p>
                            <input placeholder='от 1 до 1000'/>
                        </div>
                        <form>
                            <label className='label'>
                                <input className='checkbox' type="checkbox" name="check" value="ch"/>
                                <span>Признак максимальной полноты</span>
                            </label>
                            <label className='label'>
                                <input className='checkbox' type="checkbox" name="check" value="2"/>
                                <span>Упоминания в бизнес-контексте</span>
                            </label>
                            <label className='label'>
                                <input className='checkbox' type="checkbox" name="check" value="3"/>
                                <span>Главная роль в публикации</span>
                            </label>
                            <label className='label'>
                                <input className='checkbox' type="checkbox" name="check" value="4"/>
                                <span>Публикации только с риск-факторами</span>
                            </label>
                            <label className='label'>
                                <input className='checkbox' type="checkbox" name="check" value="5"/>
                                <span>Включать технические новости рынков</span>
                            </label>
                            <label className='label'>
                                <input className='checkbox' type="checkbox" name="check" value="6"/>
                                <span>Включать анонсы и календари</span>
                            </label>
                            <label className='label'>
                                <input className='checkbox' type="checkbox" name="check" value="7"/>
                                <span>Включать сводки новостей</span>
                            </label>
                        </form>
                    </div>
                    <div className="Search-block2">
                        <p>Диапазон поиска*</p>
                        <div className="Search-block2-1">
                            <form>
                                <select aria-placeholder='Дата начала' className='selectBlock2'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <select aria-placeholder='Дата начала' className='selectBlock2'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </form>
                            <div className="Search-block2-2">
                                <button>Поиск</button>
                                <p>*Обязательные к заполнению поля</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}


export default Search;