import React from "react";
import { boxSizing, styled } from "@mui/system";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Theme } from "@mui/material";

const MUITextField = styled(TextField)<{ theme: Theme }>(({ theme }) => ({
	"& label.Mui-focused": {
		color: theme.uiColor.indigo,
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: theme.uiColor.indigo,
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: theme.uiColor.gray,
		},
		"&:hover fieldset": {
			borderColor: theme.uiColor.indigo,
		},
		"&.Mui-focused fieldset": {
			borderColor: theme.uiColor.indigo,
		},
	},
	"& .MuiInputBase-multiline": {
		height: "100%",
		padding: 0,
	},
	"& .MuiInputBase-inputMultiline": {
		height: "100% !important",
		padding: "1em",
		boxSizing: "border-box",
		overflow: "auto !important",
	},
}));

type InputProps = TextFieldProps & {
	width?: string;
	height?: string;
};

const Input = ({ width, height, ref, ...props }: InputProps) => {
	return <MUITextField sx={{ width, height }} {...props} />;
};

export default Input;
