import { useContext, useEffect } from "react";
import { JobsContext } from "context/jobs";

export const useJobs = () => {
	const { jobs, loading, fetchAllJobs } = useContext(JobsContext);
	useEffect(() => {
		fetchAllJobs();
	}, []);
	return { jobs, loading };
};
