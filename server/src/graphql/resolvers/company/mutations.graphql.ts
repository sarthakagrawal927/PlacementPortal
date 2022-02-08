import { Company } from "@prisma/client";
import { ApolloContext } from "../../../context";
import { MutationResolvers,  } from "../../../types/graphql";

export const mutations: MutationResolvers<ApolloContext, Company> = {}