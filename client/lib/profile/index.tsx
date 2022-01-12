/* eslint-disable @next/next/no-img-element */
import { Avatar, Box } from "@mui/material";
import { Button } from "components";
import { Update } from "@mui/icons-material";
import React from "react";
import {
	PersonalDetails,
	MainInfo,
	ProfileContainer,
	AcademicDetails,
	SectionHeading,
	MainInfoRow,
	InfoGrid,
	Info,
	AcademicInfoContainer,
	AcademicRecordContainer,
	Semester,
	EntranceTest,
	SchoolDetails,
	StudentDetails,
} from "./Profile.styled";
import { entranceTest, schoolDetails, semesterData, student } from "./data";
import { useRouter } from "next/router";

const Profile = () => {
	const router = useRouter();
	return (
		<ProfileContainer>
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
					<Button
						sx={{ height: "2.5em", borderRadius: "24px" }}
						variant="outlined"
						text="Update"
						onClick={() => router.push("/profile/update")}
						endIcon={<Update />}
					/>
				</MainInfoRow>
				<StudentDetails student={student} />
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
					<EntranceTest
						metRank={entranceTest.metRank}
						jeeAdvancedRank={entranceTest.jeeAdvancedRank}
						jeeMainsRank={entranceTest.jeeMainsRank}
					/>
				</AcademicRecordContainer>
				{schoolDetails.map(({ board, country, heading, percentage, school, yearOfCompletion }) => (
					<SchoolDetails
						key={heading}
						board={board}
						country={country}
						heading={heading}
						percentage={percentage}
						school={school}
						yearOfCompletion={yearOfCompletion}
					/>
				))}
			</AcademicDetails>
		</ProfileContainer>
	);
};

export default Profile;
