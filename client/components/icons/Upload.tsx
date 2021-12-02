import React from "react";
import { useTheme } from "@mui/material";

interface UploadIconProps extends React.SVGProps<SVGSVGElement> {
	width: string;
	height: string;
}

const Upload = ({ width, height, ...props }: UploadIconProps) => {
	const theme = useTheme();
	return (
		<svg {...props} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 9H4L12 0L20 9H14V20H10V9ZM21 20V22H3V20H1V24H23V20H21Z" fill={theme.uiColor.blue} />
		</svg>
	);
};

export default Upload;
