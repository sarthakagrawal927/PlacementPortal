import { ApolloContext } from "../../../context";
import { Job, JobsDashboard, QueryResolvers } from "../../../types/graphql";

export const queries: QueryResolvers<ApolloContext, Job> = {
	getAllJobs: async (_, {}, { prisma }) => {
		const jobs: JobsDashboard[] = await prisma.job.findMany({
			include: {
				company: true,
			},
		});

		for (const job of jobs) {
			const shortlist = await prisma.shortlist.findUnique({
				where: {
					step_jobID: {
						step: "REGISTRATION",
						jobID: job.id,
					},
				},
				include: { students: { select: { regNo: true } } },
			});

			job.numberOfregistrations = shortlist?.students.length ?? 0;
		}

		return jobs;
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
				shortlists: {
					include: {
						students: true,
					},
				},
			},
		});

		return job;
	},
};
