import MaterialTable, { TableProps } from "@mui/material/Table";

const Table = ({ ...props }: TableProps) => {
	return (
		<MaterialTable stickyHeader {...props}>
			{props.children}
		</MaterialTable>
	);
};

export default Table;
