import React from "react";
import {observer} from "mobx-react-lite";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css"
import "../../styles/SelectDate.css"


function SelectDate({dateStart, setDateStart, dateEnd, setDateEnd}) {

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
                className='selectDate'
                selected={dateStart}
                onChange={handleStartDateChange}
                dateFormat="yyyy-MM-dd"
                maxDate={MaxDateEnd}
                placeholderText="Дата начала"
                />
            <DatePicker
                className='selectDate'
                selected={dateEnd}
                onChange={handleEndDateChange}
                dateFormat="yyyy-MM-dd"
                minDate={dateStart}
                maxDate={DateNow}
                placeholderText="Дата конца"
                />
        </form>
    )
}


export default observer(SelectDate);