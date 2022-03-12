import React, { ReactElement } from "react";
import moment from "moment";
import TableCell from "./../TableCell";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { TableCellProps as MaterialTableCellProps } from "@mui/material/TableCell";
import getBadgeColor from "../../utils/getBadgeColor";
interface TableCellProps extends MaterialTableCellProps {
	registrationStartDate: string;
	registrationDeadline: string;
}

type statusCellReturn = {
	status: string;
	info: string;
};

const StatusCell = ({ registrationStartDate, registrationDeadline }: TableCellProps) => {
	const { status, info } = getStatus(registrationStartDate, registrationDeadline);
	const theme = useTheme();
	const colors = getBadgeColor(theme.badgeColor, status);

	function getStatus(registrationStartDate: string, registrationDeadline: string): statusCellReturn {
		let today = new Date();
		if (moment(today).isBetween(registrationStartDate, registrationDeadline)) {
			return { status: "OPEN", info: `Closes on {moment(registrationDeadline).format("Do MMM")}` };
		} else if (moment(today).isAfter(registrationDeadline)) {
			return {
				status: "CLOSED",
				info: `REOPEN`,
			};
		} else
			return {
				status: "PENDING",
				info: `
						{moment(registrationStartDate).format("Do MMM")} - {moment(registrationDeadline).format("Do MMM")}
					`,
			};
	}

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
			<Typography
				sx={{
					fontSize: "0.04rem",
					marginTop: "1.25rem",
					...(status === "CLOSED" && {
						color: theme.uiColor.darkBlue,
						"&:hover": {
							cursor: "pointer",
						},
					}),
				}}
			>
				{info}
			</Typography>
		</TableCell>
	);
};

export default StatusCell;
// https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png
