
import { queries } from "./queries.graphql";
import { mutations } from "./mutations.graphql";
const companyResolvers = {
	Query: {
		...queries,
	},
	Mutation: {
		...mutations,
	},
};

export default companyResolvers;
