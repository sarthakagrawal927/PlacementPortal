import userResolvers from "./user";
import jobResolvers from "./job";
const resolvers = {
	Query: {
		...userResolvers.Query,
		...jobResolvers.Query,
	},
	Mutation: {
		...userResolvers.Mutation,
		...jobResolvers.Mutation,
	},
};

export default resolvers;
