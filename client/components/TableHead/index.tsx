import MaterialTableHead, { TableHeadProps as MaterialTableHeadProps } from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "./../TableCell";
import { useTheme } from "@mui/material";

interface TableHeadProps extends MaterialTableHeadProps {
	tableHeaders: string[];
}

const TableHead = ({ sx, tableHeaders }: TableHeadProps) => {
	const theme = useTheme();
	return (
		<MaterialTableHead
			sx={{
				...sx,
			}}
		>
			<TableRow>
				{tableHeaders.map(header => {
					return (
						<TableCell
							key={header}
							type="header"
							sx={{ backgroundColor: theme.uiColor.indigo, textTransform: "uppercase", padding: "1.5rem" }}
						>
							{header}
						</TableCell>
					);
				})}
			</TableRow>
		</MaterialTableHead>
	);
};

export default TableHead;
