import { gql } from "apollo-server";

const typeDefs = gql`
	type User {
		id: String!
		email: String!
		password: String!
		isStudent: String!
	}
	type Query {
		_dummy: String
	}
	type Mutation {
		_dummy: String
	}
`;
export default typeDefs;
