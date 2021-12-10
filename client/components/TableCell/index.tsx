import { useTheme } from "@mui/material";
import MaterialTableCell, { TableCellProps as MaterialTableCellProps } from "@mui/material/TableCell";

interface TableCellProps extends MaterialTableCellProps {
	children: React.ReactNode;
	type?: string;
}

const TableCell = ({ children, type = "body", sx }: TableCellProps) => {
	const theme = useTheme();
	const isHeader = type === "header";
	return (
		<MaterialTableCell
			sx={{
				...sx,
				color: isHeader ? theme.uiColor.white : theme.uiColor.indigo,
				textAlign: "center",
				fontSize: "1rem",
				borderBottom: "none",
			}}
		>
			{children}
		</MaterialTableCell>
	);
};

export default TableCell;
