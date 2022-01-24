import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
const { yupResolver } = require("@hookform/resolvers/yup");
import * as yup from "yup";
import { FormInput, UseNewJobFormReturn, UseConstantsReturn, UseNewJobReturn, DefaultFormInput } from "./types";

const useConstants = (): UseConstantsReturn => {
	const branches = [
		{ label: "ALL BRANCHES" },
		{ label: "CCE" },
		{ label: "ECE" },
		{ label: "EEE" },
		{ label: "CSE" },
		{ label: "ME" },
		{ label: "CE" },
	];

	const profiles = ["Software Engineer", "Data Scientist", "Analyst"];
	const locations = ["Bengaluru", "Hyderabad", "Noida"];
	const categories = ["CORE", "ADM", "ITES"];
	return {
		branches,
		profiles,
		locations,
		categories,
	};
};

export const useNewJobForm = (): UseNewJobFormReturn => {
	const [companyLogo, setCompanyLogo] = useState<File>();
	const [attachments, setAttachments] = useState<File[]>();

	useEffect(() => {
		console.log({ companyLogo });
	}, [companyLogo]);

	useEffect(() => {
		console.log({ attachments });
	}, [attachments]);

	const defaultValues: DefaultFormInput = {
		companyName: undefined,
		aboutCompany: undefined,
		eligibility: undefined,
		jobDetails: {
			isSpot: false,
			registrationStartDate: new Date(),
			registrationEndDate: new Date(new Date().getTime() + 3 * 86400000),
		},
	};

	const eligibilitySchema = yup
		.object({
			cgpa: yup.number('CGPA can only be a number.').required('CGPA is required.'),
			branches: yup
				.array()
				.of(
					yup.object({
						label: yup.string('Branch should be a text.'),
					})
				)
				.required('At least one branch is required.'),
			numberOfBacklogs: yup.number('Backlogs can only be a number.').nullable(),
			tenthScore: yup.number('Tenth score should be a number between 0 and 100.').min(0).max(100).nullable(),
			twelvethScore: yup.number('Twelveth score should be a number between 0 and 100.').min(0).max(100).nullable(),
			diplomaScore: yup.number('Diploma score should be a number.').min(0).max(100).nullable(),
			additional: yup.string('Additional requirements should be in text format.'),
		})
		.required('Eligibility criteria is required.');

	const jobDetailsSchema = yup.object({
		isSpot: yup.boolean().required(),
		offerType: yup
			.string()
			.required()
			.matches(/(P|I|P+I)/),
		ctc: yup.number('Cost to Company (CTC) should be a number.'),
		stipend: yup.number('Stipend should be a number.'),
		category: yup.string('Category should be a text.').required().min(1),
		profile: yup.string('Profile should be a text.').required().min(1),
		locations: yup.array().of(yup.string()).required('At least one locaion is required.').min(1),
		registrationStartDate: yup.date().required('Start date for registeration is required.'),
		registrationEndDate: yup.date().required('End date of registeration is required.'),
		bond: yup.string('Bond should be a text.'),
		hrContact: yup.string('HR Contact detail should be a text.').required('HR Contact detail is required.'),
		jobDescription: yup.string('Job description should be a text.').required('Job description is required.'),
	});
	const formSchema = yup
		.object({
			companyName: yup.string('Company name should be a text.').required('Company name is required.'),
			aboutCompany: yup.string('About Company field should be a text.'),
			eligibility: eligibilitySchema,
			jobDetails: jobDetailsSchema,
		})
		.required('Company details are required.');

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		setValue,
		control,
		watch,
	} = useForm<FormInput>({
		resolver: yupResolver(formSchema)!,
		shouldFocusError: true,
		defaultValues,
		reValidateMode: "onChange",
	});

	const onSubmit = handleSubmit(data => {
		console.log({ companyLogo, data, attachments });
	});
	return {
		register,
		errors,
		handleSubmit: onSubmit,
		setValue,
		getValues,
		control,
		attachments,
		companyLogo,
		setAttachments,
		setCompanyLogo,
	};
};

export const useNewJob = (): UseNewJobReturn => {
	const { branches, profiles, locations, categories } = useConstants();
	const {
		errors,
		handleSubmit,
		control,
		register,
		setValue,
		getValues,
		setCompanyLogo,
		setAttachments,
		attachments,
		companyLogo,
	} = useNewJobForm();
	return {
		register,
		handleSubmit,
		setValue,
		control,
		getValues,
		errors,
		profiles,
		branches,
		locations,
		categories,
		setCompanyLogo,
		setAttachments,
		attachments,
		companyLogo,
	};
};
