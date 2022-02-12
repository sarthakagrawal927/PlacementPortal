import { PrismaClient } from "@prisma/client";
import { AddShortlistInput } from "../../../types/graphql";

const prisma = new PrismaClient();

type AddStudentToJobError = {
	studentID: string | null;
	jobID: string | null;
	shortlist: string | null;
};

export const validateAddStudentToJobInput = async ({
	studentID,
	jobID,
}: {
	studentID: string;
	jobID: string;
}): Promise<{ errors: AddStudentToJobError; isValid: boolean }> => {
	const errors: AddStudentToJobError = {
		studentID: null,
		jobID: null,
		shortlist: null,
	};

	const student = await prisma.student.findUnique({
		where: {
			userID: studentID,
		},
	});
	if (!student) errors.studentID = "Student with this ID does not exist";

	const job = await prisma.job.findUnique({
		where: {
			id: jobID,
		},
	});
	if (!job) errors.jobID = "Job with this ID does not exist";

	//TODO: Check if student is already in the shortlist of the job

	return {
		errors: errors,
		isValid: Object.values(errors).every(value => value === null),
	};
};

type AddShortlistError = {
	jobID: string | null;
	studentIDs: string | null;
	shortlist: string | null;
};

export const validateAddShortlistInput = async (
	addShortlistInput: AddShortlistInput
): Promise<{ errors: AddShortlistError; isValid: boolean }> => {
	const errors: AddShortlistError = {
		jobID: null,
		studentIDs: null,
		shortlist: null,
	};

	const job = await prisma.job.findUnique({
		where: {
			id: addShortlistInput.jobID,
		},
	});
	if (!job) errors.jobID = "Job with this ID does not exist";

	const shortlist = await prisma.shortlist.findUnique({
		where: {
			step_jobID: {
				step: addShortlistInput.step,
				jobID: addShortlistInput.jobID,
			},
		},
	});
	if (shortlist) errors.shortlist = "Shortlist already exists";

	for (const studentID of addShortlistInput.studentIDs) {
		const student = await prisma.student.findUnique({
			where: {
				userID: studentID,
			},
		});
		if (!student) errors.studentIDs = "Student with this ID does not exist";
	}

	return {
		errors: errors,
		isValid: Object.values(errors).every(value => value === null),
	};
};
