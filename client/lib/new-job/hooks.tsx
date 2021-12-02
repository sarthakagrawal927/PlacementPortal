import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
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
			cgpa: yup.number().required(),
			branches: yup
				.array()
				.of(
					yup.object({
						label: yup.string(),
					})
				)
				.required(),
			numberOfBacklogs: yup.number().nullable(),
			tenthScore: yup.number().min(0).max(100).nullable(),
			twelvethScore: yup.number().min(0).max(100).nullable(),
			diplomaScore: yup.number().nullable(),
			additional: yup.string(),
		})
		.required();

	const jobDetailsSchema = yup.object({
		isSpot: yup.boolean().required(),
		offerType: yup
			.string()
			.required()
			.matches(/(P|I|P+I)/),
		ctc: yup.number(),
		stipend: yup.number(),
		category: yup.string().required().min(1),
		profile: yup.string().required().min(1),
		locations: yup.array().of(yup.string()).required().min(1),
		registrationStartDate: yup.date().required(),
		registrationEndDate: yup.date().required(),
		bond: yup.string(),
		hrContact: yup.string().required(),
		jobDescription: yup.string().required(),
	});
	const formSchema = yup
		.object({
			companyName: yup.string().required(),
			aboutCompany: yup.string(),
			eligibility: eligibilitySchema,
			jobDetails: jobDetailsSchema,
		})
		.required();

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

	const watchFields = watch();

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
