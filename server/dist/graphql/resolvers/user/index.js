"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queries_graphql_1 = require("./queries.graphql");
const mutations_graphql_1 = require("./mutations.graphql");
const userResolvers = {
    Query: Object.assign({}, queries_graphql_1.queries),
    Mutation: Object.assign({}, mutations_graphql_1.mutations),
};
exports.default = userResolvers;
//# sourceMappingURL=index.js.map