import { QueryResolvers } from '../../graphql.js'
import { prisma } from '../../lib/prismaClient.js'

export const unitQuery: QueryResolvers = {
  units: async () => {
    return await prisma.unit.findMany()
  },
  unit: async (_, { id }) => {
    return await prisma.unit.findUnique({
      where: {
        id,
      },
    })
  },
}
