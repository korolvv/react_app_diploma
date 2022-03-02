import React, { useState } from "react";
import DatePicker from "react-datepicker";
import AppTime from "../app-time/app-time";
import uk from "date-fns/locale/uk";
import "react-datepicker/dist/react-datepicker.css";

function AppDate() {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<div className="dateTimePicker">
			<AppTime />
			<DatePicker
				locale={uk}
				selected={startDate}
				onChange={(date) => setStartDate(date)}
			/>
		</div>
	);
}

export default AppDate;
