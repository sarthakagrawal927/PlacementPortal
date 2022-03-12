import MaterialTableRow, { TableRowProps as MaterialTableRowProps } from "@mui/material/TableRow";
import TableCell from "./../TableCell";
import { useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import { JobType } from "../../lib/dashboard/jobType";
import Typography from "@mui/material/Typography";
import StatusCell from "./statusCell";
import CompanyCell from "./companyCell";
import { styled } from "@mui/material";
interface TableRowProps extends MaterialTableRowProps {
	index: number;
	job: JobType;
}

const SmallerTypography = styled(Typography)({
	fontSize: "0.75rem",
});

const TableRow = ({ index, job }: TableRowProps) => {
	const theme = useTheme();
	const locations = job?.locations?.join(", ");
	return (
		<MaterialTableRow
			sx={{
				backgroundColor: index % 2 === 1 ? theme.uiColor.lightestGray : "",
				borderBottom: "none",
			}}
			key={job?.stipend + index}
		>
			<CompanyCell name={job?.company.name} logo={job?.company.logo} registrations={job?.numberOfregistrations} />

			<TableCell> {job?.ctc ? `${job?.ctc / 100000} LPA` : "-"}</TableCell>
			<TableCell>{job?.stipend ? `${job?.stipend}K/month` : "-"}</TableCell>

			<TableCell>
				<SmallerTypography>{job?.profile}</SmallerTypography>
			</TableCell>

			<TableCell>
				<Stack direction="column">
					<Typography> {job?.offerType}</Typography>
					<SmallerTypography> {job?.isSpot && "(SPOT)"}</SmallerTypography>
				</Stack>
			</TableCell>

			<TableCell>
				<Stack direction="column" sx={{ maxWidth: "8vw" }}>
					<SmallerTypography>{locations}</SmallerTypography>
				</Stack>
			</TableCell>

			<TableCell>{job?.category}</TableCell>

			<StatusCell registrationStartDate={job?.registrationStartDate} registrationDeadline={job?.registrationDeadline} />
		</MaterialTableRow>
	);
};

export default TableRow;
