import { QueryResolvers } from '../../graphql.js'
import { prisma } from '../../lib/prismaClient.js'

export const deviceQuery: QueryResolvers = {
  device: async (_, { id }) => {
    return await prisma.device.findUnique({ where: { id } })
  },
  devices: async () => {
    return await prisma.device.findMany()
  },
}
