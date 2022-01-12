import { Box, Grid, GridProps, Stack, StackProps, Typography } from "@mui/material";
import styled from "styled-components";
import { uiColor } from "styles/styles";

export const ProfileContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Section = styled(Box)`
	border: 1px solid ${uiColor.gray};
	border-radius: 30px;
	padding: 3em 4em;
	margin-top: 4em;
	position: relative;
	width: 80%;
	margin-left: 0;
`;

export const SectionHeading = styled(Typography)`
	position: absolute;
	top: -15px;
	background-color: white;
	font-weight: 500;
	padding: 0 0.8em;
`;

export const PersonalDetails = styled(Section)``;
export const AcademicDetails = styled(Section)``;

export const MainInfoRow = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1em;
`;

interface MainInfoProps extends StackProps {
	heading: string;
	text: string;
}

export const MainInfo = ({ heading, text }: MainInfoProps) => {
	return (
		<Stack direction={"column"} alignItems={"flex-start"}>
			<Typography color={uiColor.darkestGray} fontWeight={"600"} fontSize={"0.8rem"} variant="h5">
				{heading}
			</Typography>
			<Typography marginTop={"0.5em"} fontSize={"1.2rem"} color={uiColor.darkestGray} variant="body1">
				{text}
			</Typography>
		</Stack>
	);
};

export const InfoGrid = styled(Grid)`
	margin-top: 3em;
`;

interface InfoProps extends GridProps {
	heading: string;
	text: string;
}

export const Info = ({ heading, text, width, xs }: InfoProps) => {
	return (
		<Grid item xs={xs} width={width}>
			<Typography color={uiColor.darkestGray} fontWeight={"600"} fontSize={"0.8rem"} variant="h6">
				{heading}
			</Typography>
			<Typography sx={{ wordBreak: "break-word" }} marginTop={"0.3em"} color={uiColor.darkestGray} variant="body1">
				{text}
			</Typography>
		</Grid>
	);
};

interface Parent {
	name: string;
	mobileNumber: string;
	occupation: string;
	organization: string;
}

interface Student {
	dateOfBirth: string;
	gender: string;
	caste: string;
	height: string;
	weight: string;
	learnerID: string;
	emailID: string;
	altEmailID: string;
	linkedInID: string;
	mobileNumber: string;
	altMobileNumber: string;
	skypeID: string;
	physicalDisability: string;
	father: Parent;
	mother: Parent;
	passportNumber: string;
	aadharNumber: string;
	panNumber: string;
	city: string;
	state: string;
	country: string;
	permanentAddress: string;
	currentAddress: string;
}
interface StudentDetailsProps {
	student: Student;
}

export const StudentDetails = ({ student }: StudentDetailsProps) => {
	return (
		<InfoGrid container rowGap={"3em"}>
			<Info width={"20%"} heading="Date Of Birth" text={student.dateOfBirth} />
			<Info width={"20%"} heading="Gender" text={student.gender} />
			<Info width={"20%"} heading="Caste" text={student.caste} />
			<Info width={"20%"} heading="Height" text={`${student.height} CMS`} />
			<Info width={"20%"} heading="Weight" text={`${student.weight} KGS`} />
			<Info width={"30%"} heading="Learner ID" text={student.learnerID} />
			<Info width={"33%"} heading="Email ID" text={student.emailID} />
			<Info width={"33%"} heading="Alt Email ID" text={student.altEmailID} />
			<Info width={"25%"} heading="Mobile Number" text={student.mobileNumber} />
			<Info width={"25%"} heading="Alt Mobile Number" text={student.altMobileNumber} />
			<Info width={"25%"} heading="Skype ID" text={student.skypeID} />
			<Info width={"25%"} heading="LinkedIn ID" text={student.linkedInID} />
			<Info width={"25%"} heading="Father’s Name" text={student.father.name} />
			<Info width={"25%"} heading="Father’s Mobile Number" text={student.father.mobileNumber} />
			<Info width={"25%"} heading="Father’s Occupation" text={student.father.occupation} />
			<Info width={"25%"} heading="Father’s Organization" text={student.father.organization} />
			<Info width={"25%"} heading="Mother’s Name" text={student.mother.name} />
			<Info width={"25%"} heading="Mother’s Mobile Number" text={student.mother.mobileNumber} />
			<Info width={"25%"} heading="Mother’s Occupation" text={student.mother.occupation} />
			<Info width={"25%"} heading="Mother’s Organization" text={student.mother.organization} />
			<Info width={"25%"} heading="Passport Number" text={student.passportNumber} />
			<Info width={"25%"} heading="Aadhar Number" text={student.aadharNumber} />
			<Info width={"25%"} heading="PAN Number" text={student.panNumber} />
			<Info width={"25%"} heading="Physical Disability" text={student.physicalDisability} />
			<Info width={"25%"} heading="City" text={student.city} />
			<Info width={"25%"} heading="State" text={student.country} />
			<Info width={"25%"} heading="Country" text={student.country} />
			<Info heading="Permanent Address" text={student.permanentAddress} />
			<Info heading="Current Address" text={student.currentAddress} />
		</InfoGrid>
	);
};

export const AcademicInfoContainer = styled(Stack)`
	flex-direction: row;
	justify-content: space-between;
`;

export const AcademicRecordContainer = styled(Stack)`
	flex-direction: column;
	width: 80%;
	margin-top: 2em;
`;

interface SemesterProps {
	semesterNum: number;
	gpa: number;
	backlogs: number;
	dateChanges: number;
}

export const Semester = ({ semesterNum, backlogs, dateChanges, gpa }: SemesterProps) => {
	return (
		<Box sx={{ margin: "1em 0" }}>
			<Typography
				color={uiColor.gray}
				fontWeight={"600"}
				fontSize={"0.8rem"}
				variant="h5"
			>{`Semester ${semesterNum}`}</Typography>
			<Stack direction={"row"} justifyContent={"space-between"} marginTop={"1em"}>
				<Info width={"30%"} heading="GPA" text={gpa.toString()} />
				<Info width={"30%"} heading="Backlogs" text={backlogs.toString()} />
				<Info width={"30%"} heading="Date Changes" text={dateChanges.toString()} />
			</Stack>
		</Box>
	);
};

interface EntranceTestProps {
	jeeMainsRank?: string;
	jeeAdvancedRank?: string;
	metRank?: string;
}

export const EntranceTest = ({ metRank, jeeAdvancedRank, jeeMainsRank }: EntranceTestProps) => {
	return (
		<Box sx={{ margin: "1em 0" }}>
			<Typography color={uiColor.gray} fontWeight={"600"} fontSize={"0.8rem"} variant="h5">
				{"Entrance Test"}
			</Typography>
			<Stack direction={"row"} justifyContent={"space-between"} marginTop={"1em"}>
				<Info width={"30%"} heading="JEE Mains Rank" text={jeeMainsRank ?? "-"} />
				<Info width={"30%"} heading="JEE Advanced" text={jeeAdvancedRank ?? "-"} />
				<Info width={"30%"} heading="MET Rank" text={metRank ?? "-"} />
			</Stack>
		</Box>
	);
};

interface SchoolDetailProps {
	percentage: number;
	school: string;
	board: string;
	yearOfCompletion: string;
	country: string;
	heading: string;
}

export const SchoolDetails = ({ board, country, heading, percentage, school, yearOfCompletion }: SchoolDetailProps) => {
	return (
		<Box sx={{ margin: "2em 0" }}>
			<Typography color={uiColor.gray} fontWeight={"600"} fontSize={"0.8rem"} variant="h5">
				{heading}
			</Typography>
			<Stack direction={"row"} justifyContent={"space-between"} marginTop={"1em"}>
				<Info width={"20%"} heading="Percentage" text={`${percentage.toString()}%`} />
				<Info width={"30%"} heading="School" text={school} />
				<Info width={"20%"} heading="Board" text={board} />
				<Info width={"20%"} heading="Year Of Completion" text={yearOfCompletion} />
				<Info width={"20%"} heading="Country" text={country} />
			</Stack>
		</Box>
	);
};
