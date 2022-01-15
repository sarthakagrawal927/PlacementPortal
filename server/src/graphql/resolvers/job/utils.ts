import { CreateNewJobInput, UpdateJobInput } from "../../../types/graphql";
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

type UpdateJobError = {
	jobID: string | null;
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
		(createNewJobInput.stipend === undefined || createNewJobInput.stipend === null)
	)
		errors.stipend = "Stipend is required";
	if (
		(createNewJobInput.offerType === "P" || createNewJobInput.offerType == "P_PLUS_I") &&
		(createNewJobInput.ctc === undefined || createNewJobInput.ctc === null)
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
		(createNewJobInput.bond === undefined || createNewJobInput.bond === null || createNewJobInput.bond?.trim() === "")
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

export const validateUpdateJobInput = async ({
	...updateJobInput
}: UpdateJobInput): Promise<{
	branchesToConnect: { id: string }[] | undefined;
	branchesToDisconnect: { id: string }[] | undefined;
	errors: UpdateJobError;
	isValid: boolean;
}> => {
	const errors: UpdateJobError = {
		jobID: null,
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

	var branches: { id: string }[] | undefined = undefined;
	if (updateJobInput.jobID.trim() === "") {
		errors.jobID = "Job ID is required";
	} else {
		const job = await prisma.job.findUnique({
			where: {
				id: updateJobInput.jobID,
			},
			include: {
				eligibility: { include: { branches: true } },
			},
		});
		if (!job) errors.jobID = "Job ID is invalid";
		else {
			branches = job.eligibility?.branches.map(branch => ({ id: branch.id }));
		}
	}

	if (updateJobInput.profile?.trim() === "") errors.profile = "Profile is provided but empty";
	if (updateJobInput.description?.trim() === "") errors.description = "Description is provided but empty";
	if (updateJobInput.hrContact?.trim() === "") errors.hrContact = "HR Contact is provided but empty";

	if (updateJobInput.locations?.length === 0) errors.locations = "At least one location is required";
	else if (updateJobInput.locations?.length !== 0) {
		for (const location of updateJobInput.locations ?? []) {
			if (location.trim() === "") {
				errors.locations = "Location is invalid";
				break;
			}
		}
	}

	if (
		updateJobInput.offerType &&
		(updateJobInput.offerType === "I" || updateJobInput.offerType == "P_PLUS_I") &&
		(updateJobInput.stipend === undefined || updateJobInput.stipend === null)
	)
		errors.stipend = "Stipend is required";
	if (
		updateJobInput.offerType &&
		(updateJobInput.offerType === "P" || updateJobInput.offerType == "P_PLUS_I") &&
		(updateJobInput.ctc === undefined || updateJobInput.ctc === null)
	)
		errors.ctc = "CTC is required";

	if (updateJobInput.registrationStartDate?.trim() === "")
		errors.registrationStartDate = "Registration Start Date is required";
	else if (updateJobInput.registrationStartDate) {
		try {
			const date = new Date(updateJobInput.registrationStartDate).toISOString();
			if (date !== updateJobInput.registrationStartDate) {
				errors.registrationStartDate = "Registration Start Date Format not accepted";
			}
		} catch {
			errors.registrationStartDate = "Registration Start Date Format not accepted";
		}
	}

	if (updateJobInput.registrationDeadline?.trim() === "")
		errors.registrationDeadline = "Registration Deadline is required";
	else if (updateJobInput.registrationDeadline) {
		try {
			const date = new Date(updateJobInput.registrationDeadline).toISOString();
			if (date !== updateJobInput.registrationDeadline) {
				errors.registrationDeadline = "Registration Deadline Date Format not accepted";
			}
		} catch {
			errors.registrationDeadline = "Registration Deadline Date Format not accepted";
		}
	}

	if (
		updateJobInput.hasBond === true &&
		(updateJobInput.bond === undefined || updateJobInput.bond === null || updateJobInput.bond?.trim() === "")
	)
		errors.bond = "Bond is required";

	var branchesToConnect: { id: string }[] | undefined = updateJobInput.eligibility?.branchIDs
		?.filter(branchID => !branches?.some(branch => branch.id === branchID))
		.map(branchID => ({ id: branchID }));
	var branchesToDisconnect: { id: string }[] | undefined = updateJobInput.eligibility?.branchIDs
		? branches?.filter(branch => !updateJobInput.eligibility?.branchIDs?.some(branchID => branchID === branch.id))
		: undefined;
	for (const branchID of updateJobInput.eligibility?.branchIDs ?? []) {
		if (!branchID) {
			errors.branchIDs = "Branch ID is provided but empty";
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
		branchesToConnect: branchesToConnect,
		branchesToDisconnect: branchesToDisconnect,
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
