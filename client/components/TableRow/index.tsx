import MaterialTableRow, { TableRowProps as MaterialTableRowProps } from "@mui/material/TableRow";
import TableCell from "./../TableCell";
import { useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import { CompanyType } from "../../lib/dashboard/companyType";
import Typography from "@mui/material/Typography";
import StatusCell from "./statusCell";
import CompanyCell from "./companyCell";
import { styled } from "@mui/material";
interface TableRowProps extends MaterialTableRowProps {
	index: number;
	company: CompanyType;
}

const SmallerTypography = styled(Typography)({
	fontSize: "0.75rem",
});
const TableRow = ({ index, company }: TableRowProps) => {
	const theme = useTheme();
	const locations = company.location.join(", ");
	return (
		<MaterialTableRow
			sx={{
				backgroundColor: index % 2 === 1 ? theme.uiColor.lightestGray : "",
				borderBottom: "none",
			}}
			key={company.stipend + index}
		>
			<CompanyCell name={company.name} logo={company.logo} registrations={company.registrations} />

			{company.ctc ? <TableCell>{company.ctc}LPA</TableCell> : "-"}
			{company.stipend ? <TableCell>{company.stipend}K/month</TableCell> : "-"}

			<TableCell>
				<SmallerTypography>{company.profile}</SmallerTypography>
			</TableCell>

			<TableCell>
				<Stack direction="column">
					<Typography> {company.offer}</Typography>
					<SmallerTypography> {company.isSpot && "(SPOT)"}</SmallerTypography>
				</Stack>
			</TableCell>

			<TableCell>
				<Stack direction="column" sx={{ maxWidth: "8vw" }}>
					<SmallerTypography>{locations}</SmallerTypography>
				</Stack>
			</TableCell>

			<TableCell>{company.category}</TableCell>

			<StatusCell status={company.status} dates={company.dates} />
		</MaterialTableRow>
	);
};

export default TableRow;
