import React from "react";
import { MobileDatePicker, MobileDatePickerProps, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

interface DatePickerProps extends MobileDatePickerProps {
	label: string;
}

const DatePicker = ({ label, renderInput, ...props }: DatePickerProps) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<MobileDatePicker label={label} inputFormat="MM/dd/yyyy" {...props} renderInput={renderInput} />
		</LocalizationProvider>
	);
};

export default DatePicker;
