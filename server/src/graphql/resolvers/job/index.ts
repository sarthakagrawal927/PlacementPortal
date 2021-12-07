import { queries } from "./queries.graphql";
import { mutations } from "./mutations.graphql";
const jobResolvers = {
	Query: {
		...queries,
	},
	Mutation: {
		...mutations,
	},
};

export default jobResolvers;
