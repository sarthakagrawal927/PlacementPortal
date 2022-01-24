import React, { useState } from "react";
import MUIButton, { LoadingButtonProps as MUIButtonProps } from "@mui/lab/LoadingButton";

interface ButtonProps extends MUIButtonProps {
	text: string;
	rounded?: boolean;
}

const Button = ({ text, variant, rounded, ...props }: ButtonProps) => {
	const [outlined, setOutlined] = useState(variant === "outlined");
	return (
		<MUIButton
			sx={{ borderRadius: rounded ? "50px" : "4px" }}
			onMouseEnter={() => setOutlined(!outlined)}
			onMouseLeave={() => setOutlined(!outlined)}
			variant={outlined ? "outlined" : "contained"}
			disableElevation
			loadingPosition="end"
			{...props}
		>
			{text}
		</MUIButton>
	);
};

export default Button;
