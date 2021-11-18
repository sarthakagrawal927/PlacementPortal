import React from "react";
import { styled, Theme } from "@mui/material/styles";
import MaterialRadio, { RadioProps as MaterialRadioProps } from "@mui/material/Radio";

const Icon = styled("span")<{ theme: Theme; height?: string; width?: string }>(({ theme, height, width }) => ({
	borderRadius: "50%",
	width: width ?? 20,
	height: height ?? 20,
	boxShadow:
		theme.palette.mode === "dark"
			? "0 0 0 1px rgb(16 22 26 / 40%)"
			: "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
	backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
	backgroundImage:
		theme.palette.mode === "dark"
			? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
			: "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
	".Mui-focusVisible &": {
		outline: `2px auto ${theme.uiColor.indigo}`,
		outlineOffset: 2,
	},
	"input:hover ~ &": {
		backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
	},
	"input:disabled ~ &": {
		boxShadow: "none",
		background: theme.palette.mode === "dark" ? "rgba(57,75,89,.5)" : "rgba(206,217,224,.5)",
	},
}));

const CheckedIcon = styled(Icon)<{ theme: Theme; height?: string; width?: string }>(({ theme, height, width }) => ({
	backgroundColor: theme.uiColor.indigo,
	backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
	"&:before": {
		display: "block",
		width: width ?? 20,
		height: height ?? 20,
		backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
		content: '""',
	},
	"input:hover ~ &": {
		backgroundColor: theme.uiColor.indigo,
	},
}));

interface RadioProps extends MaterialRadioProps {
	height?: string;
	width?: string;
}

const Radio = ({ width, height, ...props }: RadioProps) => {
	return (
		<MaterialRadio
			sx={{
				"&:hover": {
					bgcolor: "transparent",
				},
			}}
			disableRipple
			color="default"
			checkedIcon={<CheckedIcon />}
			icon={<Icon />}
			inputProps={{ "aria-label": "Radio", height, width }}
			{...props}
		/>
	);
};

export default Radio;
