import React from "react";
import { FormControlLabel, Grid, FormHelperText, FormControl } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import { Input, Dropzone, ComboBox, Checkbox, Radio, DatePicker } from "../../components";
import {
	Form,
	UploadCompanyLogo,
	UploadText,
	Section,
	NewJobHeading,
	SectionHeading,
	OfferTypeContainer,
	RadioGroupRow,
	DatePickerInput,
	UploadAttachments,
	UploadAttachmentsText,
	SubmitButton,
} from "./NewJob.styled";
import { useNewJob } from "./hooks";

import UploadIcon from "../../components/icons/Upload";

const NewJobForm = () => {
	const {
		branches,
		profiles,
		locations,
		categories,
		control,
		errors,
		handleSubmit,
		getValues,
		setAttachments,
		attachments,
		companyLogo,
		setCompanyLogo,
	} = useNewJob();

	return (
		<>
			<Form onSubmit={handleSubmit} name="newJobForm" noValidate>
				<NewJobHeading variant="h2">NEW JOB REGISTRATION</NewJobHeading>
				<Section container columnSpacing={2} rowSpacing={6} width="80%">
					<SectionHeading>Company Details</SectionHeading>
					<Grid item xs={2}>
						<UploadCompanyLogo>
							{!companyLogo && (
								<UploadIcon
									height="25%"
									width="25%"
									style={{ margin: "20px 36%", zIndex: "-moz-initial", position: "absolute" }}
								/>
							)}
							<Dropzone setFile={file => setCompanyLogo(file)} accept="image/*" />
							{!companyLogo && <UploadText>LOGO</UploadText>}
						</UploadCompanyLogo>
					</Grid>
					<Grid item xs={10}>
						<Controller
							control={control}
							name="companyName"
							render={({ field: { ref, ...fields } }) => (
								<Input
									sx={{ marginTop: "2.5em", width: "100%" }}
									size="small"
									label="Company Name"
									placeholder="example: Microsoft"
									required
									{...fields}
									inputRef={ref}
									error={!!errors?.companyName?.message}
									helperText={errors?.companyName?.message}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={12}>
						<Controller
							control={control}
							name="aboutCompany"
							render={({ field: { ref, ...fields } }) => (
								<Input
									multiline
									width="100%"
									height="12em"
									label="About Company"
									placeholder="DON'T include job description in this field"
									{...fields}
									inputRef={ref}
									error={!!errors?.aboutCompany?.message}
									helperText={errors?.aboutCompany?.message}
								/>
							)}
						/>
					</Grid>
				</Section>
				<Section container columnSpacing={6} rowSpacing={6}>
					<SectionHeading>Eligibility</SectionHeading>
					<Grid item xs={4}>
						<Controller
							control={control}
							name="eligibility.cgpa"
							render={({ field: { ref, ...fields } }) => (
								<Input
									error={!!errors.eligibility?.cgpa?.message}
									helperText={errors.eligibility?.cgpa?.message}
									size="small"
									label="Minimum CGPA"
									placeholder="example: 7.5"
									{...fields}
									inputRef={ref}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={4}>
						<Controller
							render={({ field: { onChange, ref, value, ...props } }) => (
								<ComboBox
									size="small"
									sx={{ width: "95%", minWidth: "14rem" }}
									label="Branches"
									multiple
									// value={value}
									freeSolo
									helperText={errors?.eligibility?.branches?.message ?? ""}
									options={branches}
									error={!!errors?.eligibility?.branches}
									onChange={(e, data) => onChange(data)}
									{...props}
								/>
							)}
							defaultValue={undefined}
							name="eligibility.branches"
							control={control}
						/>
					</Grid>
					<Grid item xs={4}>
						<Controller
							control={control}
							name="eligibility.numberOfBacklogs"
							render={({ field: { ref, ...fields } }) => (
								<Input
									error={!!errors.eligibility?.numberOfBacklogs}
									helperText={errors?.eligibility?.numberOfBacklogs?.message}
									size="small"
									label="Number of Backlogs"
									placeholder="example: 0"
									{...fields}
									inputRef={ref}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={4}>
						<Controller
							control={control}
							name="eligibility.tenthScore"
							render={({ field: { ref, ...fields } }) => (
								<Input
									error={!!errors.eligibility?.tenthScore?.message}
									helperText={errors?.eligibility?.tenthScore?.message}
									size="small"
									label="10th %"
									placeholder="DON'T add % symbol"
									{...fields}
									inputRef={ref}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={4}>
						<Controller
							control={control}
							name="eligibility.twelvethScore"
							render={({ field: { ref, ...fields } }) => (
								<Input
									error={!!errors.eligibility?.twelvethScore}
									helperText={errors?.eligibility?.twelvethScore?.message}
									size="small"
									label="12th %"
									placeholder="DON'T add % symbol"
									{...fields}
									inputRef={ref}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={4}>
						<Controller
							control={control}
							name="eligibility.diplomaScore"
							render={({ field: { ref, ...fields } }) => (
								<Input
									error={!!errors.eligibility?.diplomaScore?.message}
									helperText={errors?.eligibility?.diplomaScore?.message}
									size="small"
									label="Diploma %"
									placeholder="DON'T add % symbol"
									{...fields}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={12}>
						<Controller
							control={control}
							name="eligibility.additional"
							render={({ field: { ref, ...fields } }) => (
								<Input
									error={!!errors.eligibility?.additional}
									helperText={errors?.eligibility?.additional?.message}
									width="100%"
									size="small"
									label="Additional Requirements"
									{...fields}
									inputRef={ref}
								/>
							)}
						/>
					</Grid>
				</Section>
				<Section container columnSpacing={6} rowSpacing={6}>
					<SectionHeading> Job Details</SectionHeading>
					<Grid item xs={4}>
						<OfferTypeContainer>
							<Controller
								control={control}
								name="jobDetails.isSpot"
								render={({ field: { ref, ...fields } }) => (
									<FormControlLabel control={<Checkbox />} label="Spot" {...fields} />
								)}
							/>
							<Controller
								control={control}
								name="jobDetails.offerType"
								render={({ field: { ref, ...fields } }) => (
									<FormControl component="fieldset" error={!!errors.jobDetails?.offerType}>
										<RadioGroupRow aria-label="offer type" {...fields}>
											<FormControlLabel value="P" control={<Radio />} label="P" />
											<FormControlLabel value="I" control={<Radio />} label="I" />
											<FormControlLabel value="P+I" control={<Radio />} label="P+I" />
										</RadioGroupRow>
										<FormHelperText>{errors?.jobDetails?.offerType?.message}</FormHelperText>
									</FormControl>
								)}
							/>
						</OfferTypeContainer>
					</Grid>

					<Grid item xs={4}>
						<Controller
							control={control}
							name="jobDetails.ctc"
							render={({ field: { ref, ...fields } }) => (
								<Input
									error={!!errors?.jobDetails?.ctc}
									helperText={errors?.jobDetails?.ctc?.message}
									size="small"
									label="CTC"
									placeholder="in LPA"
									{...fields}
									inputRef={ref}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={4}>
						<Controller
							control={control}
							name="jobDetails.stipend"
							render={({ field: { ref, ...fields } }) => (
								<Input
									error={!!errors?.jobDetails?.stipend}
									helperText={errors?.jobDetails?.stipend?.message}
									size="small"
									label="Stipend"
									placeholder="in K/month"
									{...fields}
									inputRef={ref}
								/>
							)}
						/>
					</Grid>

					<Grid item xs={4}>
						<Controller
							render={({ field: { onChange, ref, value, ...props } }) => (
								<ComboBox
									error={!!errors?.jobDetails?.category}
									helperText={errors?.jobDetails?.category?.message ?? ""}
									size="small"
									sx={{ width: "95%", minWidth: "14rem" }}
									label="Category"
									freeSolo
									options={categories}
									// value={value}
									onChange={(e, data) => onChange(data)}
									{...props}
								/>
							)}
							defaultValue={undefined}
							name="jobDetails.category"
							control={control}
						/>
					</Grid>
					<Grid item xs={4}>
						<Controller
							render={({ field: { onChange, ref, value, ...props } }) => (
								<ComboBox
									error={!!errors?.jobDetails?.profile}
									helperText={errors?.jobDetails?.profile?.message ?? ""}
									size="small"
									sx={{ width: "95%", minWidth: "14rem" }}
									label="Profile"
									placeholder="eg. Software Developer"
									freeSolo
									// value={value}
									options={profiles}
									onChange={(e, data) => onChange(data)}
									{...props}
								/>
							)}
							defaultValue={undefined}
							name="jobDetails.profile"
							control={control}
						/>
					</Grid>
					<Grid item xs={4}>
						<Controller
							render={({ field: { onChange, ref, value, ...props } }) => (
								<ComboBox
									error={!!errors?.jobDetails?.locations}
									helperText={errors.jobDetails?.locations?.message ?? ""}
									size="small"
									sx={{ width: "95%", minWidth: "14rem" }}
									label="Locations"
									placeholder="eg. Bengaluru"
									freeSolo
									multiple
									options={locations}
									onChange={(e, data) => onChange(data)}
									{...props}
								/>
							)}
							defaultValue={undefined}
							name="jobDetails.locations"
							control={control}
						/>
					</Grid>
					<Grid item xs={4}>
						<Controller
							control={control}
							name="jobDetails.registrationStartDate"
							render={({ field: { onChange, value } }) => (
								<DatePicker
									clearable
									disablePast
									label="Registration Start Date"
									value={value}
									onChange={onChange}
									renderInput={params => (
										<DatePickerInput
											{...params}
											error={!!errors?.jobDetails?.registrationStartDate}
											helperText={errors.jobDetails?.registrationStartDate?.message}
										/>
									)}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={4}>
						<Controller
							control={control}
							name="jobDetails.registrationEndDate"
							render={({ field: { onChange, value } }) => (
								<DatePicker
									clearable
									label="Registration End Date"
									value={value}
									onChange={onChange}
									renderInput={params => (
										<DatePickerInput
											{...params}
											error={!!errors?.jobDetails?.registrationEndDate}
											helperText={errors.jobDetails?.registrationEndDate?.message}
										/>
									)}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={4}>
						<Controller
							control={control}
							name="jobDetails.bond"
							render={({ field: { ref, ...fields } }) => (
								<Input
									error={!!errors.jobDetails?.bond}
									helperText={errors.jobDetails?.bond?.message}
									size="small"
									label="Bond Period and Amount"
									placeholder="eg. 6 months, 1 lakh"
									{...fields}
									inputRef={ref}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={8}>
						<Controller
							control={control}
							name="jobDetails.hrContact"
							render={({ field: { ref, ...fields } }) => (
								<Input
									multiline
									error={!!errors?.jobDetails?.hrContact}
									helperText={errors?.jobDetails?.hrContact?.message}
									width="100%"
									height="12em"
									label="HR Contact"
									placeholder="Include the HR's name, email and phone number"
									{...fields}
									inputRef={ref}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={4}>
						<UploadAttachments>
							<Dropzone
								multiple
								setFile={file => {
									attachments && attachments.length > 0
										? setAttachments([...attachments, file])
										: setAttachments([file]);
								}}
								accept=".docx, .doc, .pdf"
							/>
							{!attachments && (
								<UploadIcon height="25%" width="25%" style={{ position: "absolute", top: "20%", left: "36%" }} />
							)}
							{!attachments && <UploadAttachmentsText>ATTACHMENTS</UploadAttachmentsText>}
						</UploadAttachments>
					</Grid>
					<Grid item xs={12}>
						<Controller
							control={control}
							name="jobDetails.jobDescription"
							render={({ field: { ref, ...fields } }) => (
								<Input
									multiline
									error={!!errors.jobDetails?.jobDescription}
									helperText={errors.jobDetails?.jobDescription?.message}
									width="100%"
									height="12em"
									label="Job Description"
									placeholder="Mention job specific details like role description, skills required etc."
									{...fields}
									inputRef={ref}
								/>
							)}
						/>
					</Grid>
				</Section>

				<SubmitButton type="submit" text="Save Job" rounded endIcon={<CheckCircleOutlineOutlined />} />
			</Form>
		</>
	);
};

export default NewJobForm;
