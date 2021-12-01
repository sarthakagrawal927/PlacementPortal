import React, { useState, useEffect } from "react";
import MaterialButton, { LoadingButtonProps as MaterialButtonProps } from "@mui/lab/LoadingButton";
import { styled } from "@mui/system";

interface ButtonProps extends MaterialButtonProps {
	text: string;
	rounded?: boolean;
}

const Button = ({ text, variant, onClick, rounded, ...props }: ButtonProps) => {
	const [outlined, setOutlined] = useState(variant === "outlined");
	useEffect(() => {
		// console.log({ outlined });
	}, [outlined]);
	return (
		<MaterialButton
			sx={{ borderRadius: rounded ? "50px" : "4px" }}
			onMouseEnter={() => setOutlined(!outlined)}
			onMouseLeave={() => setOutlined(!outlined)}
			variant={outlined ? "outlined" : "contained"}
			disableElevation
			{...props}
			loadingPosition="end"
		>
			{text}
		</MaterialButton>
	);
};

export default Button;
