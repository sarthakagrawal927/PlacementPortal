import React from "react";
import { Box, Grid, GridProps, Stack, StackProps, Typography, FormControl } from "@mui/material";
import { Input, ComboBox } from "components";
import { Controller, UseFormRegister, Control, FieldError, FieldErrors } from "react-hook-form";
import styled from "styled-components";
import { uiColor } from "styles/styles";
import { FormInput, Student } from "./types";
import { ComboBoxProps } from "components/ComboBox";

export const ProfileContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const UpdateProfileForm = styled.form`
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
			<Typography
				marginTop={"0.5em"}
				fontSize={"1.2rem"}
				letterSpacing={"0.5px"}
				color={uiColor.darkestGray}
				variant="body1"
			>
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

export const Info = React.memo(({ heading, text, width, xs }: InfoProps) => {
	return (
		<Grid item xs={xs} width={width}>
			<Typography color={uiColor.darkestGray} fontWeight={"600"} fontSize={"0.6rem"} variant="h6">
				{heading}
			</Typography>
			<Typography
				sx={{ wordBreak: "break-word" }}
				fontSize={"0.7rem"}
				marginTop={"0.3em"}
				color={uiColor.darkestGray}
				variant="body1"
			>
				{text}
			</Typography>
		</Grid>
	);
});

interface UpdateInfoTextProps extends GridProps {
	heading: string;
	text: string;
	fullWidth?: boolean;
	name: Extract<keyof FormInput, string> | string;
	control: Control<FormInput, object>;
	error: string | undefined;
}

export const UpdateInfoText = React.memo(
	({ heading, text, width, xs, fullWidth, control, name, error }: UpdateInfoTextProps) => {
		return (
			<Grid
				item
				xs={xs}
				width={width}
				sx={{
					"& .MuiFormControl-root": {
						width: "100%",
					},
				}}
			>
				<Typography color={uiColor.darkestGray} fontWeight={"600"} fontSize={"0.6rem"} variant="h6">
					{heading}
				</Typography>
				<FormControl>
					<Controller
						control={control}
						name={name as Extract<keyof FormInput, string>}
						render={({ field: { ref, ...fields } }) => (
							<Input
								error={!!error}
								helperText={error}
								sx={{
									"& .MuiInputBase-formControl": {
										borderRadius: "8px",
										marginTop: "0.4em",
									},
									"& .MuiInputBase-inputSizeSmall": {
										fontSize: "0.7rem",
										padding: "6px 14px",
										letterSpacing: "0.5px",
									},
								}}
								size="small"
								fullWidth={fullWidth}
								defaultValue={text}
								{...fields}
								inputRef={ref}
							/>
						)}
					/>
				</FormControl>
			</Grid>
		);
	}
);

interface UpdateInfoSelectProps
	extends Omit<GridProps, "defaultValue">,
		Pick<ComboBoxProps<string>, "options" | "defaultValue"> {
	heading: string;
	text: string;
	fullWidth?: boolean;
	name: Extract<keyof FormInput, string> | string;
	control: Control<FormInput, object>;
	error: string | undefined;
}

export const UpdateInfoSelect = React.memo(
	({ heading, text, width, xs, fullWidth, control, name, error, options }: UpdateInfoSelectProps) => {
		return (
			<Grid
				item
				xs={xs}
				width={width}
				sx={{
					"& .MuiFormControl-root": {
						width: "100%",
					},
				}}
			>
				<Typography color={uiColor.darkestGray} fontWeight={"600"} fontSize={"0.6rem"} variant="h6">
					{heading}
				</Typography>
				<FormControl>
					<Controller
						name={name as Extract<keyof FormInput, string>}
						control={control}
						render={({ field: { onChange, ref, value, ...props }, fieldState: { isDirty } }) => (
							<ComboBox
								error={!!error}
								helperText={error}
								size="small"
								inputSx={{
									"& .MuiInputBase-formControl": {
										borderRadius: "8px",
										marginTop: "0.4em",
									},
									"& .MuiAutocomplete-inputRoot": {
										padding: "3.5px",
									},
									"& .MuiInputBase-inputSizeSmall": {
										fontSize: "0.7rem",
										padding: "6px 14px",
										letterSpacing: "0.5px",
									},
									"& .MuiAutocomplete-clearIndicator svg": {
										width: "0.8em",
										height: "0.8em",
									},
									"& .MuiAutocomplete-endAdornment": {
										top: "calc(50% - 17px)",
										right: "0 !important",
									},
								}}
								fullWidth={fullWidth}
								value={isDirty ? value : text}
								options={options}
								onChange={(e, data) => onChange(data)}
								{...props}
							/>
						)}
					/>
				</FormControl>
			</Grid>
		);
	}
);

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
			<Info width={"25%"} heading="Passport Number" text={student.passportNumber ?? "-"} />
			<Info width={"25%"} heading="Aadhar Number" text={student.aadharNumber} />
			<Info width={"25%"} heading="PAN Number" text={student.panNumber ?? "-"} />
			<Info width={"25%"} heading="Physical Disability" text={student.physicalDisability} />
			<Info width={"25%"} heading="City" text={student.city} />
			<Info width={"25%"} heading="State" text={student.country} />
			<Info width={"25%"} heading="Country" text={student.country} />
			<Info heading="Permanent Address" text={student.permanentAddress} />
			<Info heading="Current Address" text={student.currentAddress} />
		</InfoGrid>
	);
};
interface UpdateStudentDetailsProps {
	student: Student;
	register: UseFormRegister<FormInput>;
	control: Control<FormInput, object>;
	errors: FieldErrors<FormInput>;
}

export const UpdateStudentDetails = ({ student, register, control, errors }: UpdateStudentDetailsProps) => {
	return (
		<InfoGrid container rowGap={"3em"} columnGap={"2%"}>
			<UpdateInfoText
				control={control}
				width={"18%"}
				heading="Date Of Birth"
				text={student.dateOfBirth}
				name={register("personalDetails.dateOfBirth").name}
				error={errors.personalDetails?.dateOfBirth?.message}
			/>
			<UpdateInfoSelect
				options={["Male", "Female", "Transgender", "Non-binary", "Prefer not to respond"]}
				control={control}
				error={errors.personalDetails?.gender?.message}
				width={"18%"}
				heading="Gender"
				text={student.gender}
				name={register("personalDetails.gender").name}
			/>
			<UpdateInfoText
				control={control}
				width={"18%"}
				heading="Caste"
				text={student.caste}
				onChange={register("personalDetails.caste").onChange}
				name={register("personalDetails.caste").name}
				error={errors.personalDetails?.caste?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"18%"}
				heading="Height"
				text={`${student.height} CMS`}
				onChange={register("personalDetails.height").onChange}
				name={register("personalDetails.height").name}
				error={errors.personalDetails?.height?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"18%"}
				heading="Weight"
				text={`${student.weight} KGS`}
				name={register("personalDetails.weight").name}
				error={errors.personalDetails?.weight?.message}
			/>
			<Info width={"30%"} heading="Learner ID" text={student.learnerID} />
			<Info width={"33%"} heading="Email ID" text={student.emailID} />
			<UpdateInfoText
				control={control}
				width={"33%"}
				heading="Alt Email ID"
				text={student.altEmailID}
				name={register("personalDetails.altEmailID").name}
				error={errors.personalDetails?.altEmailID?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Mobile Number"
				text={student.mobileNumber}
				name={register("personalDetails.mobileNumber").name}
				error={errors.personalDetails?.mobileNumber?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Alt Mobile Number"
				text={student.altMobileNumber}
				name={register("personalDetails.altMobileNumber").name}
				error={errors.personalDetails?.altMobileNumber?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Skype ID"
				text={student.skypeID}
				name={register("personalDetails.skypeID").name}
				error={errors.personalDetails?.skypeID?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="LinkedIn ID"
				text={student.linkedInID}
				name={register("personalDetails.linkedInID").name}
				error={errors.personalDetails?.linkedInID?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Father’s Name"
				text={student.father.name}
				name={register("personalDetails.father.name").name}
				error={errors.personalDetails?.father?.name?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Father’s Mobile Number"
				text={student.father.mobileNumber}
				name={register("personalDetails.father.mobileNumber").name}
				error={errors.personalDetails?.father?.mobileNumber?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Father’s Occupation"
				text={student.father.occupation}
				name={register("personalDetails.father.occupation").name}
				error={errors.personalDetails?.father?.occupation?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Father’s Organization"
				text={student.father.organization}
				name={register("personalDetails.father.organization").name}
				error={errors.personalDetails?.father?.organization?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Mother’s Name"
				text={student.mother.name}
				name={register("personalDetails.mother.name").name}
				error={errors.personalDetails?.mother?.name?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Mother’s Mobile Number"
				text={student.mother.mobileNumber}
				name={register("personalDetails.mother.mobileNumber").name}
				error={errors.personalDetails?.mother?.mobileNumber?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Mother’s Occupation"
				text={student.mother.occupation}
				name={register("personalDetails.mother.occupation").name}
				error={errors.personalDetails?.mother?.occupation?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Mother’s Organization"
				text={student.mother.organization}
				name={register("personalDetails.mother.organization").name}
				error={errors.personalDetails?.mother?.organization?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Passport Number"
				text={student.passportNumber ?? "-"}
				name={register("personalDetails.passportNumber").name}
				error={errors.personalDetails?.passportNumber?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Aadhar Number"
				text={student.aadharNumber}
				name={register("personalDetails.aadharNumber").name}
				error={errors.personalDetails?.aadharNumber?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="PAN Number"
				text={student.panNumber ?? "-"}
				name={register("personalDetails.panNumber").name}
				error={errors.personalDetails?.panNumber?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Physical Disability"
				text={student.physicalDisability}
				name={register("personalDetails.physicalDisability").name}
				error={errors.personalDetails?.physicalDisability?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="City"
				text={student.city}
				name={register("personalDetails.city").name}
				error={errors.personalDetails?.city?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="State"
				text={student.country}
				name={register("personalDetails.state").name}
				error={errors.personalDetails?.state?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"23%"}
				heading="Country"
				text={student.country}
				name={register("personalDetails.country").name}
				error={errors.personalDetails?.country?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"100%"}
				heading="Permanent Address"
				text={student.permanentAddress}
				name={register("personalDetails.permanentAddress").name}
				error={errors.personalDetails?.permanentAddress?.message}
			/>
			<UpdateInfoText
				control={control}
				width={"100%"}
				heading="Current Address"
				text={student.currentAddress}
				name={register("personalDetails.currentAddress").name}
				error={errors.personalDetails?.currentAddress?.message}
			/>
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

export const Semester = React.memo(({ semesterNum, backlogs, dateChanges, gpa }: SemesterProps) => {
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
});

interface EntranceTestProps {
	jeeMainsRank?: string;
	jeeAdvancedRank?: string;
	metRank?: string;
}

export const EntranceTest = React.memo(({ metRank, jeeAdvancedRank, jeeMainsRank }: EntranceTestProps) => {
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
});

interface SchoolDetailProps {
	percentage: number;
	school: string;
	board: string;
	yearOfCompletion: string;
	country: string;
	heading: string;
}

export const SchoolDetails = React.memo(
	({ board, country, heading, percentage, school, yearOfCompletion }: SchoolDetailProps) => {
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
	}
);

interface UpdateEntranceTestProps {
	jeeMainsRank?: string;
	jeeAdvancedRank?: string;
	metRank?: string;
	register: UseFormRegister<FormInput>;
	control: Control<FormInput, object>;
	errors: FieldErrors<FormInput>;
}

export const UpdateEntranceTest = React.memo(
	({ metRank, jeeAdvancedRank, jeeMainsRank, register, control, errors }: UpdateEntranceTestProps) => {
		return (
			<Box sx={{ margin: "1em 0" }}>
				<Typography color={uiColor.gray} fontWeight={"600"} fontSize={"0.8rem"} variant="h5">
					{"Entrance Test"}
				</Typography>
				<Stack direction={"row"} justifyContent={"space-between"} marginTop={"1em"}>
					<UpdateInfoText
						control={control}
						width={"30%"}
						heading="JEE Mains Rank"
						text={jeeMainsRank ?? "-"}
						onChange={register("academicDetails.entranceTest.jeeMainsRank").onChange}
						name={register("academicDetails.entranceTest.jeeMainsRank").name}
						error={errors.academicDetails?.entranceTest?.jeeMainsRank?.message}
					/>
					<UpdateInfoText
						control={control}
						width={"30%"}
						heading="JEE Advanced"
						text={jeeAdvancedRank ?? "-"}
						onChange={register("academicDetails.entranceTest.jeeAdvancedRank").onChange}
						name={register("academicDetails.entranceTest.jeeAdvancedRank").name}
						error={errors.academicDetails?.entranceTest?.jeeAdvancedRank?.message}
					/>
					<UpdateInfoText
						control={control}
						width={"30%"}
						heading="MET Rank"
						text={metRank ?? "-"}
						onChange={register("academicDetails.entranceTest.metRank").onChange}
						name={register("academicDetails.entranceTest.metRank").name}
						error={errors.academicDetails?.entranceTest?.metRank?.message}
					/>
				</Stack>
			</Box>
		);
	}
);

interface UpdateSchoolDetailProps {
	percentage: number;
	school: string;
	board: string;
	yearOfCompletion: string;
	country: string;
	heading: string;
	control: Control<FormInput, object>;
	errors: {
		[key: string]:
			| FieldError
			| undefined
			| { [key: string]: FieldError | undefined | { [key: string]: FieldError | undefined } };
	};
	register: UseFormRegister<FormInput>;
	fieldName: "academicDetails.tenth" | "academicDetails.twelfth" | "academicDetails.diploma";
}

export const UpdateSchoolDetails = React.memo(
	({
		board,
		country,
		heading,
		percentage,
		school,
		yearOfCompletion,
		fieldName,
		register,
		control,
		errors,
	}: UpdateSchoolDetailProps) => {
		return (
			<Box sx={{ margin: "2em 0" }}>
				<Typography color={uiColor.gray} fontWeight={"600"} fontSize={"0.8rem"} variant="h5">
					{heading}
				</Typography>
				<Stack direction={"row"} justifyContent={"space-between"} marginTop={"1em"} gap={"2%"}>
					{/* TODO: Errors do not display in these fields */}
					<UpdateInfoText
						control={control}
						error={errors[fieldName]?.message as string}
						name={register(`${fieldName}.percentage`).name}
						width={"20%"}
						heading="Percentage"
						text={`${percentage.toString()}%`}
					/>
					<UpdateInfoText
						control={control}
						error={errors[`${fieldName}.school`]?.message as string}
						name={register(`${fieldName}.school`).name}
						width={"30%"}
						heading="School"
						text={school}
					/>
					<UpdateInfoText
						control={control}
						error={errors[`${fieldName}.board`]?.message as string}
						name={register(`${fieldName}.board`).name}
						width={"20%"}
						heading="Board"
						text={board}
					/>
					<UpdateInfoText
						control={control}
						error={errors[`${fieldName}.yearOfCompletion`]?.message as string}
						name={register(`${fieldName}.yearOfCompletion`).name}
						width={"20%"}
						heading="Year Of Completion"
						text={yearOfCompletion}
					/>
					<UpdateInfoText
						control={control}
						error={errors[`${fieldName}.country`]?.message as string}
						name={register(`${fieldName}.country`).name}
						width={"20%"}
						heading="Country"
						text={country}
					/>
				</Stack>
			</Box>
		);
	}
);
