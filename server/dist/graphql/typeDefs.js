"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
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
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map