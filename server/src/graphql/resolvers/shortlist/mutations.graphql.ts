import { ApolloContext } from "../../../context";
import { MutationResolvers, Shortlist } from "../../../types/graphql";
import { UserInputError } from "apollo-server";
import { validateAddStudentToJobInput } from "./utils";

export const mutations: MutationResolvers<ApolloContext, Shortlist> = {
	async addStudentToJob(_, { studentID, jobID }, { prisma }: ApolloContext) {
		const { errors, isValid } = await validateAddStudentToJobInput({
			studentID,
			jobID,
		});
		if (!isValid) {
			throw new UserInputError(Object.values(errors).find(error => error !== null) ?? "", { errors });
		}

		await prisma.shortlist.update({
			where: {
				step_jobID: {
					step: "REGISTRATION",
					jobID: jobID,
				},
			},
			data: {
				students: {
					connect: {
						userID: studentID,
					},
				},
			},
		});

		return "Student added to Shortlist of the Job";
	},
};
