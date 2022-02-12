import { ApolloContext } from "../../../context";
import { MutationResolvers, Shortlist } from "../../../types/graphql";
import { UserInputError } from "apollo-server";
import { validateAddShortlistInput, validateAddStudentToJobInput } from "./utils";

export const mutations: MutationResolvers<ApolloContext, Shortlist> = {
	async addStudentToJob(_, { studentID, jobID }, { prisma }: ApolloContext) {
		const { errors, isValid } = await validateAddStudentToJobInput({
			studentID,
			jobID,
		});
		if (!isValid) {
			throw new UserInputError(Object.values(errors).find(error => error !== null) ?? "", { errors });
		}

		const shortlist = await prisma.shortlist.update({
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

		return shortlist.id;
	},

	async addShortlist(_, { addShortlistInput }, { prisma }: ApolloContext) {
		const { errors, isValid } = await validateAddShortlistInput(addShortlistInput);
		if (!isValid) {
			throw new UserInputError(Object.values(errors).find(error => error !== null) ?? "", { errors });
		}

		const shortlist = await prisma.shortlist.create({
			data: {
				step: addShortlistInput.step,
				job: {
					connect: { id: addShortlistInput.jobID },
				},
				students: {
					connect: [...addShortlistInput.studentIDs.map(studentID => ({ userID: studentID }))],
				},
			},
		});

		return shortlist.id;
	},
};
