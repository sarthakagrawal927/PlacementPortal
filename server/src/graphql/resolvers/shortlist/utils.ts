import { Shortlist } from "../../../types/graphql";
import { PrismaClient } from "@prisma/client";

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
