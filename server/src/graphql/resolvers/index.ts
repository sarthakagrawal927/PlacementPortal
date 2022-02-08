import userResolvers from "./user";
import jobResolvers from "./job";
import companyResolvers from "./company";
import shortlistResolvers from "./shortlist";
const resolvers = {
	Query: {
		...userResolvers.Query,
		...jobResolvers.Query,
		...companyResolvers.Query,
		...shortlistResolvers.Query,
	},
	Mutation: {
		...userResolvers.Mutation,
		...jobResolvers.Mutation,
		...companyResolvers.Mutation,
		...shortlistResolvers.Mutation,
	},
};

export default resolvers;
