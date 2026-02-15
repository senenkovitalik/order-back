import { QueryResolvers } from '../../graphql.js'
import { prisma } from '../../lib/prismaClient.js'

export const employeeQuery: QueryResolvers = {
  employees: async () => {
    return await prisma.employee.findMany()
  },
  employee: async (_, { id }) => {
    return await prisma.employee.findUnique({
      where: { id },
    })
  },
}
