import { employeeQuery } from "./employee.query.js";
import { employeeMutation } from "./employee.mutation.js";
import { EmployeeResolvers } from "../../graphql.js";
import { prisma } from "../../lib/prismaClient.js";

const employeeFieldResolver: EmployeeResolvers = {
  unit: async (parent) => {
    return await prisma.unit.findUnique({ where: { id: parent.unitId } })
  },
}

export const employeeResolvers = {
  Query: employeeQuery,
  Mutation: employeeMutation,
  Employee: employeeFieldResolver,
};
