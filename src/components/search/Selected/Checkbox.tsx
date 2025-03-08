import React from 'react';
import {observer} from "mobx-react-lite";

import "./Checkbox.css"


function CheckBox({
                      maxFullness,
                      setMaxFullness,
                      onlyMainRole,
                      setOnlyMainRole,
                      onlyWithRiskFactors,
                      setOnlyWithRiskFactors,
                      excludeTechNews,
                      setExcludeTechNews,
                      excludeAnnouncements,
                      setExcludeAnnouncements,
                      excludeDigests,
                      setExcludeDigests,
                      inBusinessNews,
                      setBusinessNews})
{
    const handleMaxFullness = () => {setMaxFullness((prev) => !prev);}
    const handleOnlyMainRole = () => {setOnlyMainRole((prev) => !prev);}
    const handleOnlyWithRiskFactors = () => {setOnlyWithRiskFactors((prev) => !prev);}
    const handleExcludeTechNews = () => {setExcludeTechNews((prev) => !prev);}
    const handleExcludeAnnouncement = () => {setExcludeAnnouncements((prev) => !prev);}
    const handleExcludeDigests = () => {setExcludeDigests((prev) => !prev);}
    const handleInBusinessNews = () => {setBusinessNews((prev) => !prev);}
    return (
        <>
            <form className='checkboxForm'>
                <label className='checkboxLabel'>
                    <input
                        className='checkbox'
                        type="checkbox"
                        name="check"
                        checked={maxFullness}
                        onChange={handleMaxFullness}
                    />
                    <span>Признак максимальной полноты</span>
                </label>
                <label className='checkboxLabel'>
                    <input
                        className='checkbox'
                        type="checkbox"
                        name="check"
                        checked={inBusinessNews}
                        onChange={handleInBusinessNews}
                    />
                    <span>Упоминания в бизнес-контексте</span>
                </label>
                <label className='checkboxLabel'>
                    <input
                        className='checkbox'
                        type="checkbox"
                        name="check"
                        checked={onlyMainRole}
                        onChange={handleOnlyMainRole}
                    />
                    <span>Главная роль в публикации</span>
                </label>
                <label className='checkboxLabel'>
                    <input
                        className='checkbox'
                        type="checkbox"
                        name="check"
                        checked={onlyWithRiskFactors}
                        onChange={handleOnlyWithRiskFactors}
                    />
                    <span>Публикации только с риск-факторами</span>
                </label>
                <label className='checkboxLabel'>
                    <input className='checkbox'
                           type="checkbox"
                           name="check"
                           checked={excludeTechNews}
                           onChange={handleExcludeTechNews}
                    />
                    <span>Включать технические новости рынков</span>
                </label>
                <label className='checkboxLabel'>
                    <input
                        className='checkbox'
                        type="checkbox"
                        name="check"
                        checked={excludeAnnouncements}
                        onChange={handleExcludeAnnouncement}
                    />
                    <span>Включать анонсы и календари</span>
                </label>
                <label className='checkboxLabel'>
                    <input
                        className='checkbox'
                        type="checkbox"
                        name="check"
                        checked={excludeDigests}
                        onChange={handleExcludeDigests}
                    />
                    <span>Включать сводки новостей</span>
                </label>
            </form>
        </>
    )
}


export default observer(CheckBox);