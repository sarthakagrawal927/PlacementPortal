import { CreateNewJobInput } from "../../../types/graphql";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CreateNewJobError = {
	companyID: string | null;
	profile: string | null;
	description: string | null;
	locations: string | null;
	ctc: string | null;
	stipend: string | null;
	registrationStartDate: string | null;
	registrationDeadline: string | null;
	hrContact: string | null;
	bond: string | null;
	cgpa: string | null;
	tenthScore: string | null;
	twelfthScore: string | null;
	diplomaScore: string | null;
	branchIDs: string | null;
};

type DeleteJobError = {
	jobID: string | null;
};

export const validateCreateNewJobInput = async ({
	...createNewJobInput
}: CreateNewJobInput): Promise<{ errors: CreateNewJobError; isValid: boolean }> => {
	const errors: CreateNewJobError = {
		companyID: null,
		profile: null,
		description: null,
		locations: null,
		ctc: null,
		stipend: null,
		registrationStartDate: null,
		registrationDeadline: null,
		hrContact: null,
		bond: null,
		cgpa: null,
		tenthScore: null,
		twelfthScore: null,
		diplomaScore: null,
		branchIDs: null,
	};

	if (createNewJobInput.companyID.trim() === "") {
		errors.companyID = "Company ID is required";
	} else {
		const company = await prisma.company.findUnique({
			where: {
				id: createNewJobInput.companyID,
			},
		});
		if (!company) errors.companyID = "Company ID is invalid";
	}

	if (createNewJobInput.profile.trim() === "") errors.profile = "Profile is required";
	if (createNewJobInput.description.trim() === "") errors.description = "Description is required";
	if (createNewJobInput.hrContact.trim() === "") errors.hrContact = "HR Contact is required";

	if (createNewJobInput.locations.length === 0) errors.locations = "At least one location is required";
	else {
		for (const location of createNewJobInput.locations) {
			if (location.trim() === "") {
				errors.locations = "Location is invalid";
				break;
			}
		}
	}

	if (
		(createNewJobInput.offerType === "I" || createNewJobInput.offerType == "P_PLUS_I") &&
		createNewJobInput.stipend === undefined
	)
		errors.stipend = "Stipend is required";
	if (
		(createNewJobInput.offerType === "P" || createNewJobInput.offerType == "P_PLUS_I") &&
		createNewJobInput.ctc === undefined
	)
		errors.ctc = "CTC is required";

	if (createNewJobInput.registrationStartDate.trim() === "")
		errors.registrationStartDate = "Registration Start Date is required";
	else {
		try {
			const date = new Date(createNewJobInput.registrationStartDate).toISOString();
			if (date !== createNewJobInput.registrationStartDate) {
				errors.registrationStartDate = "Registration Start Date Format not accepted";
			}
		} catch {
			errors.registrationStartDate = "Registration Start Date Format not accepted";
		}
	}

	if (createNewJobInput.registrationDeadline.trim() === "")
		errors.registrationDeadline = "Registration Deadline is required";
	else {
		try {
			const date = new Date(createNewJobInput.registrationDeadline).toISOString();
			if (date !== createNewJobInput.registrationDeadline) {
				errors.registrationDeadline = "Registration Deadline Date Format not accepted";
			}
		} catch {
			errors.registrationDeadline = "Registration Deadline Date Format not accepted";
		}
	}

	if (
		createNewJobInput.hasBond === true &&
		(createNewJobInput.bond === undefined || createNewJobInput.bond?.trim() === "")
	)
		errors.bond = "Bond is required";

	if (createNewJobInput.eligibility.cgpa && createNewJobInput.eligibility.cgpa > 10) errors.cgpa = "CGPA is invalid";
	if (createNewJobInput.eligibility.tenthScore && createNewJobInput.eligibility.tenthScore > 100)
		errors.tenthScore = "Tenth score is invalid";
	if (createNewJobInput.eligibility.twelfthScore && createNewJobInput.eligibility.twelfthScore > 100)
		errors.twelfthScore = "Twelfth score is invalid";
	if (createNewJobInput.eligibility.diplomaScore && createNewJobInput.eligibility.diplomaScore > 100)
		errors.diplomaScore = "Diploma score is invalid";

	for (const branchID of createNewJobInput.eligibility.branchIDs) {
		if (!branchID) {
			errors.branchIDs = "Branch ID is required";
			break;
		}
		const branch = await prisma.branch.findUnique({
			where: {
				id: branchID,
			},
		});
		if (!branch) {
			errors.branchIDs = "Branch ID is invalid";
			break;
		}
	}

	return {
		errors: errors,
		isValid: Object.values(errors).every(value => value === null),
	};
};

export const validateDeleteJob = async (jobID: string): Promise<{ errors: DeleteJobError; isValid: boolean }> => {
	const errors: DeleteJobError = {
		jobID: null,
	};

	if (jobID.trim() === "") {
		errors.jobID = "ID cannot be empty";
	} else {
		const job = await prisma.job.findUnique({
			where: {
				id: jobID,
			},
		});
		if (!job) errors.jobID = "Job with this ID does not exist";
	}

	return {
		errors: errors,
		isValid: Object.values(errors).every(value => value === null),
	};
};
