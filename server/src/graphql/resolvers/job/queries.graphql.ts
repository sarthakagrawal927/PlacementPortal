import { ApolloContext } from "../../../context";
import { Job, JobsDashboard, QueryResolvers } from "../../../types/graphql";

export const queries: QueryResolvers<ApolloContext, Job> = {
	getAllJobs: async (_, {}, { prisma }) => {
		const job: JobsDashboard[] | null = await prisma.job.findMany({
			include:{
				company:true,
			}
		});

		return job;
	},
	getJobDetails: async (_, { jobID }, { prisma }) => {
		const job: Job | null = await prisma.job.findUnique({
			where: {
			  id: jobID,
			},
			include: {
				company: true,
				eligibility: {
					include: {
						branches: true,
					},
				},
				shortlists:{
					include:{
						students:true,
					},
				},
			},
		  })

		return job;
	},
};
