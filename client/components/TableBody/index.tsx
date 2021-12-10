import MaterialTableBody, { TableBodyProps } from "@mui/material/TableBody";

const TableBody = ({ ...props }: TableBodyProps) => {
	return (
		<MaterialTableBody
			sx={{
				overflow: "auto",
			}}
			{...props}
		>
			{props.children}
		</MaterialTableBody>
	);
};

export default TableBody;
