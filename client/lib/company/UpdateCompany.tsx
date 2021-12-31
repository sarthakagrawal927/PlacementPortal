import React from "react";
import {
	OfferTypeContainer,
	RadioGroupRow,
	ShortlistInfo,
	ShortlistInfoContainer,
	UpdateCompanyContainer,
	UpdateCompanyForm,
	CompanyInfo,
	ButtonsContainer,
	CompanyName,
} from "./updateCompany.styled";
import { company, shortlist, steps } from "./companyDetails";
import {
	Typography,
	Button as MaterialButton,
	useTheme,
	FormControl,
	FormControlLabel,
	FormHelperText,
	Grid,
} from "@mui/material";
import { DeleteForever, UploadFileOutlined, Close, Save } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import { Checkbox, Input, Radio, Button } from "components";
import { useUpdateCompany } from "./hooks";
import JobField from "./JobField";

const UpdateCompany = () => {
	const theme = useTheme();
	const { control } = useUpdateCompany();
	return (
		<UpdateCompanyContainer>
			<UpdateCompanyForm>
				<CompanyInfo>
					<CompanyName>
						<img src={company.logo} width="60em" height="60em" />
						<Typography component="h1" fontSize={48}>
							{company.name}
						</Typography>
					</CompanyName>
					<Button text="Save" endIcon={<Save />} rounded />
				</CompanyInfo>
				<Grid container rowSpacing={4} columnSpacing={4} marginTop={0}>
					<Grid item xs={12} paddingLeft={"18px !important"}>
						<OfferTypeContainer>
							<Controller
								control={control}
								name="jobDetails.isSpot"
								render={({ field: { ref, ...fields } }) => (
									<FormControlLabel control={<Checkbox checked={company.isSpot} />} label="Spot" {...fields} />
								)}
							/>
							<Controller
								control={control}
								name="jobDetails.offerType"
								render={({ field: { ref, ...fields } }) => (
									<FormControl
										component="fieldset"
										sx={{ marginLeft: "2em" }}
										// error={!!errors.jobDetails?.offerType}
									>
										<RadioGroupRow defaultValue={company.offerType} aria-label="offer type" {...fields}>
											<FormControlLabel value="P" control={<Radio />} label="P" />
											<FormControlLabel value="I" control={<Radio />} label="I" />
											<FormControlLabel value="P+I" control={<Radio />} label="P+I" />
										</RadioGroupRow>
										{/* <FormHelperText>{errors?.jobDetails?.offerType?.message}</FormHelperText> */}
									</FormControl>
								)}
							/>
						</OfferTypeContainer>
					</Grid>
					<Grid item xs={3} paddingLeft={"18px !important"}>
						<JobField label="CTC" defaultValue={company.ctc} />
					</Grid>
					<Grid item xs={3} paddingLeft={"18px !important"}>
						<JobField label="Stipend" defaultValue={company.stipend} />
					</Grid>
					<Grid item xs={6} paddingLeft={"18px !important"}>
						<JobField label="Profile" defaultValue={company.profile} />
					</Grid>
					<Grid item xs={6} paddingLeft={"18px !important"}>
						<JobField label="Branches" defaultValue={company.branches.join(", ")} />
					</Grid>
					<Grid item xs={6} paddingLeft={"18px !important"}>
						<JobField label="Locations" defaultValue={company.locations.join(", ")} />
					</Grid>
					<Grid item xs={3} paddingLeft={"18px !important"}>
						<JobField label="10th %" defaultValue={company.tenthScore} />
					</Grid>
					<Grid item xs={3} paddingLeft={"18px !important"}>
						<JobField label="12th %" defaultValue={company.twelfthScore} />
					</Grid>
					<Grid item xs={3} paddingLeft={"18px !important"}>
						<JobField label="Diploma %" defaultValue={company.diplomaScore} />
					</Grid>
					<Grid item xs={3} paddingLeft={"18px !important"}>
						<JobField label="Backlogs" defaultValue={company.numberOfBacklogs} />
					</Grid>
					<Grid item xs={3} paddingLeft={"18px !important"}>
						<JobField label="Bond" defaultValue={company.bond} />
					</Grid>
					<Grid item xs={9} paddingLeft={"18px !important"}>
						<JobField label="Additional Requirements" defaultValue={company.additionalRequirements} />
					</Grid>
					<Grid height={"15em"} item xs={12} paddingLeft={"18px !important"}>
						<FormControl fullWidth style={{ height: "100%" }}>
							<FormControlLabel
								label={"Job Description"}
								sx={{
									height: "100%",
									width: "100%",
									".MuiFormControlLabel-label": { position: "relative", top: 0, left: "-43%", marginBottom: "0.5em" },
								}}
								labelPlacement="top"
								control={
									<Input
										multiline
										width="100%"
										height="100%"
										size="small"
										defaultValue={company.jobDescription}
										placeholder={"Enter Job Description"}
									/>
								}
							/>
						</FormControl>
					</Grid>
				</Grid>
			</UpdateCompanyForm>
			<ShortlistInfoContainer>
				{steps.map(step => {
					return (
						shortlist.get(step) && (
							<ShortlistInfo key={step}>
								<Typography component="h3">{step}</Typography>
								<strong>{shortlist.get(step)?.shortlisted}</strong>
								<span> students shortlisted out of </span>
								<strong>{shortlist.get(step)?.eligible}</strong>
								<span> eligible</span>
								<MaterialButton
									sx={{ marginTop: "2em" }}
									variant="text"
									color="error"
									endIcon={<DeleteForever width={100} />}
								>
									DELETE SHORTLIST
								</MaterialButton>
							</ShortlistInfo>
						)
					);
				})}
				<ButtonsContainer>
					<Button variant="outlined" endIcon={<UploadFileOutlined />} text="Update Attachments" rounded />

					<Button text="Delete Job" color="error" variant="contained" rounded endIcon={<Close />} />
				</ButtonsContainer>
			</ShortlistInfoContainer>
		</UpdateCompanyContainer>
	);
};

export default UpdateCompany;
