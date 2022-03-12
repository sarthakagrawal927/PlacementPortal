import { useGetAllJobsLazyQuery, GetAllJobsQuery } from "types/types.graphql";
import { createContext, useState } from "react";
import { QueryLazyOptions } from "@apollo/client";

export type Jobs = Omit<GetAllJobsQuery["getAllJobs"], "__typename">;

type JobsContextType = {
	jobs?: Jobs;
	loading?: boolean;
	fetchAllJobs: () => void;
};
const JobsContext = createContext<JobsContextType>({ fetchAllJobs: () => {} });

function JobsProvider(props: any) {
	const [jobs, setJobs] = useState<Jobs>([]);
	const [fetchAllJobs, { loading }] = useGetAllJobsLazyQuery({
		onCompleted: data => {
			setJobs(data.getAllJobs);
		},
		onError: error => {
			console.log(error);
		},
	});
	return <JobsContext.Provider value={{ jobs, loading, fetchAllJobs }} {...props} />;
}

export { JobsContext, JobsProvider };
