import { employeeQuery } from "./employee.query.js";
import { employeeMutation } from "./employee.mutation.js";

export const employeeResolvers = {
  Query: employeeQuery,
  Mutation: employeeMutation,
};
