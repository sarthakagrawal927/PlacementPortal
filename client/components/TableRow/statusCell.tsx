import React from "react";
import TableCell from "./../TableCell";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { TableCellProps as MaterialTableCellProps } from "@mui/material/TableCell";
import getBadgeColor from "../../utils/getBadgeColor";
interface TableCellProps extends MaterialTableCellProps {
	status: string;
	dates: string;
}

const StatusCell = ({ status, dates }: TableCellProps) => {
	const theme = useTheme();
	const colors = getBadgeColor(theme.badgeColor, status);
	return (
		<TableCell>
			<span
				style={{
					color: colors?.textColor,
					backgroundColor: colors?.backgroundColor,
					padding: "0.6rem 0.8rem",
					fontSize: "0.5rem",
					fontWeight: 600,
					borderRadius: "2rem",
					maxWidth: "fit-content",
					whiteSpace: "nowrap",
				}}
			>
				{status}
			</span>
			<Typography sx={{ fontSize: "0.5rem", marginTop: "0.75rem" }}> {dates}</Typography>
		</TableCell>
	);
};

export default StatusCell;
