import React from "react";
import { FormControlLabel, FormControl } from "@mui/material";
import { Input } from "components";

type JobFieldProps = {
	label: string;
	defaultValue: string | number;
	placeholder?: string;
};

const JobField = ({ label, defaultValue, placeholder }: JobFieldProps) => {
	return (
		<FormControl>
			<FormControlLabel
				style={{ whiteSpace: "nowrap" }}
				label={label}
				labelPlacement="start"
				control={
					<Input sx={{ marginLeft: "1em" }} size="small" defaultValue={defaultValue} placeholder={placeholder} />
				}
			/>
		</FormControl>
	);
};

export default JobField;
