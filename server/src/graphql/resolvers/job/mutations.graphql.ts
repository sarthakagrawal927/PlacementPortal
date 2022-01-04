import { ApolloContext } from "../../../context";
import { MutationResolvers, Job } from "../../../types/graphql";

export const mutations: MutationResolvers<ApolloContext, Job> = {
	async createNewJob(_, { createNewJobInput }, { prisma }: ApolloContext) {
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
};
