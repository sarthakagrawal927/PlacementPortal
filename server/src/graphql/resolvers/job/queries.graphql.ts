import { ApolloContext } from "../../../context";
import { Job, QueryResolvers } from "../../../types/graphql";

export const queries: QueryResolvers<ApolloContext, Job> = {
	getAllJobs: async (_, {}, { prisma }) => {
		const jobs: Job[] | null = await prisma.job.findMany({
			include: {
				company: true,
				eligibility: {
					include: {
						branches: true,
					},
				},
			},
		});

		return jobs;
	},
};
