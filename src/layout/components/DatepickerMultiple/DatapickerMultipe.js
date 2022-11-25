import React from 'react';
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import TimePicker from "react-multi-date-picker/plugins/time_picker";

function DatepickerMultiple(props) {
    const {dates, setDates} = props
    const format = "MM/DD/YYYY";
    return (
        <DatePicker
            value={dates}
            onChange={setDates}
            multiple
            sort
            format={format}
            calendarPosition="bottom-center"
            plugins={[<DatePanel/>, <TimePicker position="bottom"/>,]}
        />
    )
}

export default DatepickerMultiple;