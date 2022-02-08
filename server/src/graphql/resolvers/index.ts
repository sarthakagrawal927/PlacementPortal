import userResolvers from "./user";
import jobResolvers from "./job";
import companyResolvers from "./company";
const resolvers = {
	Query: {
		...userResolvers.Query,
		...jobResolvers.Query,
		...companyResolvers.Query,
	},
	Mutation: {
		...userResolvers.Mutation,
		...jobResolvers.Mutation,
		...companyResolvers.Mutation,
	},
};

export default resolvers;
