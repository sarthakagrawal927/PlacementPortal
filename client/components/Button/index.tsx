import React, { useState } from "react";
import MUIButton from "@mui/lab/LoadingButton";
import { ButtonProps as MUIButtonProps } from "@mui/material/Button";

interface ButtonProps extends MUIButtonProps {
	text: string;
	rounded?: boolean;
}

const Button = ({ text, variant, onClick, rounded, ...props }: ButtonProps) => {
	const [outlined, setOutlined] = useState(variant === "outlined");
	return (
		<MUIButton
			sx={{ borderRadius: rounded ? "50px" : "4px" }}
			onMouseEnter={() => setOutlined(!outlined)}
			onMouseLeave={() => setOutlined(!outlined)}
			variant={outlined ? "outlined" : "contained"}
			disableElevation
			{...props}
			loadingPosition="end"
		>
			{text}
		</MUIButton>
	);
};

export default Button;
