import React, { useState, useEffect } from "react";
import MUIButton, { LoadingButtonProps as MUIButtonProps } from "@mui/lab/LoadingButton";
import { styled } from "@mui/system";

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
