import { Typography, useTheme } from "@mui/material";
import React from "react";

interface JobSpecProps {
	name: string;
	value: string;
	direction?: "row" | "column";
}

const JobSpec = ({ name, value, direction }: JobSpecProps) => {
	const theme = useTheme();
	return (
		<div style={{ display: "flex", flexDirection: direction ?? "row" }}>
			<Typography color={theme.uiColor.gray} component="span">
				{`${name}:`}
			</Typography>
			<Typography
				whiteSpace="pre-wrap"
				marginLeft={direction !== "column" ? "0.8em" : "0"}
				marginTop={direction === "column" ? "0.8em" : "0"}
				color={theme.uiColor.indigo}
				component="span"
			>
				{value}
			</Typography>
		</div>
	);
};

export default JobSpec;
