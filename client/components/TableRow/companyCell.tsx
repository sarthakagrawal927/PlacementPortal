import React from "react";
import TableCell from "./../TableCell";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { TableCellProps as MaterialTableCellProps } from "@mui/material/TableCell";
import { useTheme } from "@mui/material";

interface TableCellProps extends MaterialTableCellProps {
	name: string;
	logo: string;
	registrations: number;
}

const CompanyCell = ({ name, logo, registrations }: TableCellProps) => {
	const theme = useTheme();
	return (
		<TableCell>
			<Stack direction="row" spacing={2}>
				<img src={logo} alt={name} style={{ width: "2.5rem", height: "2.5rem" }} />
				<Stack sx={{ textAlign: "left" }} justifyContent="space-around">
					<Typography variant="body1">{name}</Typography>
					<Typography
						variant="body1"
						sx={{ textTransform: "uppercase", color: theme.uiColor.darkBlue, fontSize: "0.5rem" }}
					>
						Registrations: {registrations}
					</Typography>
				</Stack>
			</Stack>
		</TableCell>
	);
};

export default CompanyCell;
