import { QueryResolvers } from '../../graphql.js'
import { prisma } from '../../lib/prismaClient.js'

export const employeeQuery: QueryResolvers = {
  employees: async () => {
    return await prisma.employee.findMany({
      include: {
        unit: true,
      },
    })
  },
  employee: async (_, { id }) => {
    return await prisma.employee.findUnique({
      where: { id },
      include: {
        unit: true,
      },
    })
  },
}
