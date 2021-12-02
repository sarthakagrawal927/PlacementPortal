import React from "react";
import { Select as MUISelect, MenuItem, SelectProps as MUISelectProps, FormControl, InputLabel } from "@mui/material";

type SelectOption = {
	label: string;
	value?: string | number | readonly string[] | undefined;
};

interface SelectProps extends MUISelectProps {
	width: string;
	label?: string;
	placeholder?: string;
	options: SelectOption[];
}

const Select = ({ options, width, label, placeholder, ...props }: SelectProps) => {
	return (
		<FormControl sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id="select-label">{label}</InputLabel>
			<MUISelect {...props} label={label} labelId="select-label" placeholder={placeholder} sx={{ width }}>
				{options.map((option, idx) => (
					<MenuItem key={idx} value={option.value ?? option.label}>
						{option.label}
					</MenuItem>
				))}
			</MUISelect>
		</FormControl>
	);
};

export default Select;
