import { queries } from "./queries.graphql";
import { mutations } from "./mutations.graphql";
const shortlistResolvers = {
	Query: {
		...queries,
	},
	Mutation: {
		...mutations,
	},
};

export default shortlistResolvers;
