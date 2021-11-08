import { gql } from "apollo-server";

const typeDefs = gql`
	type User {
		id: String!
		email: String!
		password: String!
		isStudent: String!
	}
	type Query {
		
	}
	type Mutation {

	}
`;
export default typeDefs;
