import * as React from "react";
import { InputProps as MaterialInputProps, Theme } from "@mui/material";
import InputUnstyled, { InputUnstyledProps } from "@mui/core/InputUnstyled";
import { styled } from "@mui/system";

const StyledInputElement = styled("input")<{ theme: Theme }>(
	({ theme }) => `
	width: 100%;
	height: 100%;
	font-size: 1rem;
	border: 1px solid ${theme.uiColor.gray};
	border-radius: 10px;
	padding: 6px 10px;
	color: ${theme.uiColor.indigo};

	&:hover {s
		border-color: ${theme.uiColor.indigo};
	}

	&:focus {
		outline: none;
		border: 1px solid ${theme.uiColor.indigo};
		transition: border 300ms ease-out;
	}
`
);

const CustomInput = React.forwardRef(function CustomInput(
	props: InputUnstyledProps,
	ref: React.ForwardedRef<HTMLDivElement>
) {
	return <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />;
});

interface InputProps extends MaterialInputProps {
	height?: string;
	width?: string;
}

const Input = ({ placeholder, height, width }: InputProps) => {
	return <CustomInput aria-label="input field" placeholder={placeholder} style={{ width, height }} />;
};
export default Input;
