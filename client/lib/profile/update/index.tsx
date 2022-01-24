/* eslint-disable @next/next/no-img-element */
import { Avatar, Box } from "@mui/material";
import { Button } from "components";
import { Save } from "@mui/icons-material";
import React, { useRef } from "react";
import {
	PersonalDetails,
	MainInfo,
	AcademicDetails,
	SectionHeading,
	MainInfoRow,
	Info,
	AcademicInfoContainer,
	AcademicRecordContainer,
	Semester,
	UpdateProfileForm,
	UpdateEntranceTest,
	UpdateSchoolDetails,
	UpdateStudentDetails,
} from "../Profile.styled";
import { entranceTest, schoolDetails, semesterData, student } from "../data";
import { useUpdateProfile } from "../hooks";

const ProfileUpdate = () => {
	const { register, handleFormSubmit, errors, watch, control } = useUpdateProfile({
		personalDetails: student,
		academicDetails: {
			entranceTest,
			tenth: schoolDetails[0],
			twelfth: schoolDetails[1].fieldName === "academicDetails.twelfth" ? schoolDetails[1] : undefined,
			diploma: schoolDetails[1].fieldName === "academicDetails.diploma" ? schoolDetails[1] : undefined,
		},
	});

	return (
		<UpdateProfileForm
			noValidate
			onSubmit={e => {
				e.preventDefault();
				handleFormSubmit();
			}}
		>
			{/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
			<pre>{JSON.stringify(errors, null, 2)}</pre>
			<PersonalDetails>
				<SectionHeading>Personal Details</SectionHeading>
				<MainInfoRow>
					<Box>
						<Avatar
							sx={{ width: 150, height: 150 }}
							alt="profile photo"
							src={
								"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
							}
						/>
					</Box>
					<MainInfo heading="First Name" text="John" />
					<MainInfo heading="Middle Name" text="Anthony" />
					<MainInfo heading="Last Name" text="Doe" />
					<Button type="submit" sx={{ height: "2.5em", borderRadius: "24px" }} text="Save" endIcon={<Save />} />
				</MainInfoRow>
				<UpdateStudentDetails student={student} register={register} control={control} errors={errors} />
			</PersonalDetails>
			<AcademicDetails>
				<SectionHeading>Academic Details</SectionHeading>
				<AcademicInfoContainer>
					<Info heading="Branch" text="Computer Science & Engineering" />
					<Info heading="Department" text="Computer Science & Engineering" />
					<Info heading="Registration Number" text="180945632" />
					<Info heading="Current CGPA" text="8.67" />
				</AcademicInfoContainer>
				<AcademicRecordContainer>
					{semesterData.map(({ backlogs, dateChanges, gpa, semesterNum }, idx) => (
						<Semester key={idx} backlogs={backlogs} dateChanges={dateChanges} gpa={gpa} semesterNum={semesterNum} />
					))}
					<UpdateEntranceTest
						metRank={entranceTest.metRank}
						jeeAdvancedRank={entranceTest.jeeAdvancedRank}
						jeeMainsRank={entranceTest.jeeMainsRank}
						register={register}
						control={control}
						errors={errors}
					/>
				</AcademicRecordContainer>
				{schoolDetails.map(({ board, fieldName, country, heading, percentage, school, yearOfCompletion }) => (
					<UpdateSchoolDetails
						control={control}
						errors={errors}
						key={heading}
						board={board}
						country={country}
						heading={heading}
						percentage={percentage}
						school={school}
						fieldName={fieldName}
						register={register}
						yearOfCompletion={yearOfCompletion}
					/>
				))}
			</AcademicDetails>
		</UpdateProfileForm>
	);
};

export default ProfileUpdate;
