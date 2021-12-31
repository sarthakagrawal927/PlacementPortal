import { Cached, Download, Upload } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Button, ComboBox } from "components";
import React from "react";
import AddManuallyDialog from "./AddManuallyDialog";
import {
	MainContainer,
	JobDetailsContainer,
	StatusInfo,
	JobDetailsHeader,
	UpdateButton,
	CompanyInfo,
	JobSpecifications,
	JobSpecRow,
	JobDescription,
	StatusContainer,
	AddManuallyButton,
	CSVButton,
} from "./company.styled";
import { company, shortlist, steps } from "./companyDetails";
import JobSpec from "./JobSpec";

const CompanyProfile = () => {
	return (
		<MainContainer>
			<JobDetailsContainer>
				<JobDetailsHeader>
					<CompanyInfo>
						<img src={company.logo} width="15%" height="15%" />
						<Typography component="h1" fontSize={48}>
							{company.name}
						</Typography>
					</CompanyInfo>
					<UpdateButton text="Update" rounded endIcon={<Cached />} />
				</JobDetailsHeader>
				<JobSpecifications>
					<JobSpecRow>
						<JobSpec name="HR DETAILS" value={company.hrDetails} />
					</JobSpecRow>

					<JobSpecRow>
						<JobSpec name="CTC" value={`${company.ctc}LPA`} />
						<JobSpec name="STIPEND" value={`${company.stipend}K/month`} />
						<JobSpec name="PROFILE" value={company.profile} />
					</JobSpecRow>
					<JobSpecRow>
						<JobSpec name="OFFER" value={company.isSpot ? `${company.offerType}(SPOT)` : company.offerType} />
						<JobSpec name="BOND" value={company.bond} />
						<JobSpec name="LOCATION" value={company.locations.join(",")} />
					</JobSpecRow>

					<JobSpecRow>
						<JobSpec name="10th" value={`${company.tenthScore}%`} />
						<JobSpec name="12th" value={`${company.twelfthScore}%`} />
						<JobSpec name="CGPA" value={company.CGPA} />
						<JobSpec name="Backlogs" value={company.numberOfBacklogs} />
					</JobSpecRow>

					<JobSpecRow>
						<JobSpec name="Branches" value={company.branches.join(",")} />
						<JobSpec name="Additional Requirements" value={company.additionalRequirements} />
					</JobSpecRow>
					<JobDescription>
						<JobSpec name="JOB DESCRIPTION" value={company.jobDescription} direction="column" />
					</JobDescription>
				</JobSpecifications>
				<Button
					variant="outlined"
					text="ATTACHMENTS"
					startIcon={<Download />}
					style={{ width: "12em", marginTop: "2em" }}
				/>
			</JobDetailsContainer>
			<StatusInfo>
				{steps.map(step => {
					return (
						shortlist.get(step) && (
							<StatusContainer key={step}>
								<Typography component="h3">{step}</Typography>
								<strong>{shortlist.get(step)?.shortlisted}</strong>
								<span> students shortlisted out of </span>
								<strong>{shortlist.get(step)?.eligible}</strong>
								<span> eligible</span>

								<CSVButton variant="outlined" rounded text="DOWNLOAD CSV" endIcon={<Download />} />
							</StatusContainer>
						)
					);
				})}
				<StatusContainer>
					<Typography component="h3">ADD SHORTLIST</Typography>
					<ComboBox label="Shortlist Step" options={steps} size="small" sx={{ width: "55%" }} />
					<CSVButton rounded variant="contained" text="UPLOAD CSV" endIcon={<Upload />} />
					<AddManuallyDialog />
				</StatusContainer>
			</StatusInfo>
		</MainContainer>
	);
};

export default CompanyProfile;
