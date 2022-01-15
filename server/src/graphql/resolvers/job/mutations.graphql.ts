import { ApolloContext } from "../../../context";
import { MutationResolvers, Job } from "../../../types/graphql";
import { validateCreateNewJobInput, validateDeleteJob, validateUpdateJobInput } from "./utils";
import { UserInputError } from "apollo-server";

export const mutations: MutationResolvers<ApolloContext, Job> = {
	async createNewJob(_, { createNewJobInput }, { prisma }: ApolloContext) {
		const { errors, isValid } = await validateCreateNewJobInput({
			...createNewJobInput,
		});
		if (!isValid) {
			throw new UserInputError(Object.values(errors).find(error => error !== null) ?? "", { errors });
		}

		const job: Job = await prisma.job.create({
			data: {
				profile: createNewJobInput.profile,
				category: createNewJobInput.category,
				description: createNewJobInput.description,
				locations: createNewJobInput.locations,
				ctc: createNewJobInput.ctc,
				stipend: createNewJobInput.stipend,
				registrationStartDate: createNewJobInput.registrationStartDate,
				registrationDeadline: createNewJobInput.registrationDeadline,
				hrContact: createNewJobInput.hrContact,
				offerType: createNewJobInput.offerType,
				isSpot: createNewJobInput.isSpot,
				bond: createNewJobInput.bond,
				hasBond: createNewJobInput.hasBond,
				company: {
					connect: {
						id: createNewJobInput.companyID,
					},
				},
				eligibility: {
					create: {
						cgpa: createNewJobInput.eligibility.cgpa,
						tenthScore: createNewJobInput.eligibility.tenthScore,
						twelfthScore: createNewJobInput.eligibility.twelfthScore,
						diplomaScore: createNewJobInput.eligibility.diplomaScore,
						numberOfBacklogs: createNewJobInput.eligibility.numberOfBacklogs,
						additionalRequirement: createNewJobInput.eligibility.additionalRequirement,
						branches: {
							connect: [...createNewJobInput.eligibility.branchIDs.map(branch => ({ id: branch }))],
						},
					},
				},
			},
			include: {
				company: true,
				eligibility: { include: { branches: true } },
			},
		});

		return job;
	},

	async updateJob(_, { updateJobInput }, { prisma }: ApolloContext) {
		const { branchesToConnect, branchesToDisconnect, errors, isValid } = await validateUpdateJobInput({
			...updateJobInput,
		});
		if (!isValid) {
			throw new UserInputError(Object.values(errors).find(error => error !== null) ?? "", { errors });
		}

		const job: Job = await prisma.job.update({
			where: {
				id: updateJobInput.jobID,
			},
			data: {
				profile: updateJobInput.profile ?? undefined,
				category: updateJobInput.category ?? undefined,
				description: updateJobInput.description ?? undefined,
				locations: updateJobInput.locations ?? undefined,
				ctc: updateJobInput.offerType === "I" ? null : updateJobInput.ctc,
				stipend: updateJobInput.offerType === "P" ? null : updateJobInput.stipend,
				registrationStartDate: updateJobInput.registrationStartDate ?? undefined,
				registrationDeadline: updateJobInput.registrationDeadline ?? undefined,
				hrContact: updateJobInput.hrContact ?? undefined,
				offerType: updateJobInput.offerType ?? undefined,
				isSpot: updateJobInput.isSpot ?? undefined,
				bond: updateJobInput.hasBond ? updateJobInput.bond : null,
				hasBond: updateJobInput.hasBond ?? undefined,
				eligibility: {
					update: {
						cgpa: updateJobInput.eligibility?.cgpa,
						tenthScore: updateJobInput.eligibility?.tenthScore,
						twelfthScore: updateJobInput.eligibility?.twelfthScore,
						diplomaScore: updateJobInput.eligibility?.diplomaScore,
						numberOfBacklogs: updateJobInput.eligibility?.numberOfBacklogs,
						additionalRequirement: updateJobInput.eligibility?.additionalRequirement,
						branches: {
							disconnect: branchesToDisconnect?.length ? branchesToDisconnect : undefined,
							connect: branchesToConnect?.length ? branchesToConnect : undefined,
						},
					},
				},
			},
			include: {
				company: true,
				eligibility: { include: { branches: true } },
			},
		});

		return job;
	},

	async deleteJob(_, { jobID }, { prisma }: ApolloContext) {
		const { errors, isValid } = await validateDeleteJob(jobID);
		if (!isValid) {
			throw new UserInputError(Object.values(errors).find(error => error !== null) ?? "", { errors });
		}

		const job: Job = await prisma.job.delete({
			where: {
				id: jobID,
			},
			include: {
				company: true,
				eligibility: { include: { branches: true } },
			},
		});

		await prisma.eligibility.delete({
			where: {
				id: job.eligibility.id,
			},
		});

		return job;
	},
};
