import { unitQuery } from "./unit.query.js";
import { unitMutation } from "./unit.mutation.js";

export const unitResolvers = {
  Query: unitQuery,
  Mutation: unitMutation,
};
