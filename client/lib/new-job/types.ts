import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormGetValues, Control, NestedValue } from "react-hook-form";
import { BaseSyntheticEvent } from "react";

type Eligibility = {
	cgpa: number;
	branches: NestedValue<{ label: string }[]>;
	numberOfBacklogs: number;
	tenthScore?: number;
	twelvethScore?: number;
	diplomaScore?: number;
	additional?: string;
};

type JobDetails = {
	isSpot: boolean;
	offerType: "P" | "I" | "P+I";
	ctc?: number;
	stipend?: number;
	category: string;
	profile: string;
	locations: NestedValue<string[]>;
	registrationStartDate: Date;
	registrationEndDate: Date;
	bond?: string;
	hrContact: string;
	jobDescription: string;
};

export interface FormInput {
	companyName: string;
	aboutCompany: string;
	eligibility: Eligibility;
	jobDetails: JobDetails;
}

export interface DefaultFormInput {
	companyName?: string;
	aboutCompany?: string;
	eligibility?: Partial<Eligibility>;
	jobDetails?: Partial<JobDetails>;
}

export interface UseConstantsReturn {
	branches: { label: string }[];
	profiles: string[];
	locations: string[];
	categories: string[];
}

interface ErrorInput extends Omit<FormInput, "eligibility" | "jobDetails"> {
	eligibility: Omit<Eligibility, "branches"> | { branches: NestedValue<string[]> };
	jobDetails: Omit<JobDetails, "locations"> | { locations: NestedValue<string[]> };
}

export interface UseNewJobFormReturn {
	register: UseFormRegister<FormInput>;
	handleSubmit: (e?: BaseSyntheticEvent | undefined) => Promise<void>;
	errors: FieldErrors<FormInput>;
	setValue: UseFormSetValue<FormInput>;
	getValues: UseFormGetValues<FormInput>;
	control: Control<FormInput, object>;
	attachments: File[] | undefined;
	setAttachments: React.Dispatch<React.SetStateAction<File[] | undefined>>;
	companyLogo: File | undefined;
	setCompanyLogo: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export interface UseNewJobReturn extends UseConstantsReturn, UseNewJobFormReturn {}
