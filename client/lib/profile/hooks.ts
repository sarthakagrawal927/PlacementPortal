import { useEffect } from "react";
const { yupResolver } = require("@hookform/resolvers/yup");
import { Control, FieldErrors, useForm, UseFormRegister, UseFormWatch } from "react-hook-form";
import * as yup from "yup";
import { FormInput } from "./types";

interface UseUpdateProfileReturn {
	register: UseFormRegister<FormInput>;
	handleFormSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
	errors: FieldErrors<FormInput>;
	watch: UseFormWatch<FormInput>;
	control: Control<FormInput, object>;
}
interface UseUpdateProfileArgs {
	personalDetails: FormInput["personalDetails"];
	academicDetails: FormInput["academicDetails"];
}

export const useUpdateProfile = ({
	academicDetails,
	personalDetails,
}: UseUpdateProfileArgs): UseUpdateProfileReturn => {
	const parentSchema = yup.object().shape({
		name: yup.string().required("Name is required"),
		mobileNumber: yup.string().required("Mobile number is required"),
		occupation: yup.string().required("Occupation is required"),
		organization: yup.string().required("Organization is required"),
	});
	const personalDetailsSchema = yup.object().shape({
		dateOfBirth: yup.string().required("Date of birth is required"),
		gender: yup.string().required("Gender is required."),
		caste: yup.string().required("Caste is required."),
		height: yup.string().required("Height is required."),
		weight: yup.string().required("Weight is required."),
		altEmailID: yup.string().required("Alternate Email ID is required.").email(),
		linkedInID: yup.string().required("LinkedIn ID is required."),
		mobileNumber: yup.string().required("Mobile number is required."),
		altMobileNumber: yup.string().required("Alternate mobile number is required."),
		skypeID: yup.string().required("Skype ID is required."),
		physicalDisability: yup.string().required("Physical Disability is required."),
		father: parentSchema,
		mother: parentSchema,
		passportNumber: yup.string(),
		aadharNumber: yup.string().required("Aadhar number is required."),
		panNumber: yup.string(),
		city: yup.string().required("City is required."),
		state: yup.string().required("State is required."),
		country: yup.string().required("Country is required."),
		permanentAddress: yup.string().required("Permanent address is required."),
		currentAddress: yup.string().required("Current address is required."),
	});

	const entranceTestSchema = yup.object().shape({
		jeeMainsRank: yup.string(),
		jeeAdvancedRank: yup.string(),
		metRank: yup.string(),
	});

	const schoolDetailsSchema = yup.object().shape({
		percentage: yup.number().required("Percentage is required."),
		school: yup.string().required("School is required."),
		board: yup.string().required("Board is required."),
		yearOfCompletion: yup.string().required("Year of completion is required."),
		country: yup.string().required("Country is required."),
	});

	const academicDetailsSchema = yup.object().shape({
		entranceTest: entranceTestSchema.required("Entrance test details are required."),
		tenth: schoolDetailsSchema.required("Tenth std details are required."),
		twelfth: schoolDetailsSchema.default(null).nullable(),
		diploma: schoolDetailsSchema.default(null).nullable(),
	});
	const formSchema = yup.object().shape({
		personalDetails: personalDetailsSchema.required("Personal details are required."),
		academicDetails: academicDetailsSchema.required("Academic details are required."),
	});

	const {
		register,
		handleSubmit,
		formState: { errors, dirtyFields },
		control,
		watch,
	} = useForm<FormInput>({
		resolver: yupResolver(formSchema),
		defaultValues: {
			personalDetails,
			academicDetails,
		},
		shouldFocusError: true,
		reValidateMode: "onChange",
	});

	useEffect(() => {
		console.log({ dirtyFields });
	}, [dirtyFields]);

	const handleFormSubmit = handleSubmit(data => {
		console.log({ data });
		console.log({ dirtyFields });
	});

	return {
		register,
		handleFormSubmit,
		errors,
		control,
		watch,
	};
};
