import React from "react";

interface CloseIconProps {
	width: string;
	height: string;
	color: string;
}

const CloseIcon = ({ width, height, color }: CloseIconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={width}
			height={height}
			color={color}
			stroke="currentColor"
		>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
		</svg>
	);
};

export default CloseIcon;
