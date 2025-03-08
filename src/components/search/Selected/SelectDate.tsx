import React from "react";
import {observer} from "mobx-react-lite";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css"
import "./SelectDate.css"


function SelectDate({dateStart, setDateStart, dateEnd, setDateEnd, SearchError}) {

    const handleStartDateChange = (date) => {
        setDateStart(date);
    }
    const handleEndDateChange = (date) => {
        setDateEnd(date);
    }
    const DateNow = new Date();
    let MaxDateEnd = DateNow
    if (dateEnd) {MaxDateEnd = dateEnd}
    return (
        <form>
            <DatePicker
                className={SearchError && !dateStart?'selectDate active' : "selectDate"}
                selected={dateStart}
                onChange={handleStartDateChange}
                dateFormat="dd.MM.yyyy"
                maxDate={MaxDateEnd}
                placeholderText="Дата начала"
                />
            <DatePicker
                className={SearchError && !dateEnd?'selectDate active' : "selectDate"}
                selected={dateEnd}
                onChange={handleEndDateChange}
                dateFormat="dd.MM.yyyy"
                minDate={dateStart}
                maxDate={DateNow}
                placeholderText="Дата конца"
                />
        </form>
    )
}


export default observer(SelectDate);