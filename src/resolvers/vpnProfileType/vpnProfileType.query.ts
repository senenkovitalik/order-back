import { QueryResolvers } from '../../graphql.js'
import { prisma } from '../../lib/prismaClient.js'

export const vpnProfileTypeQuery: QueryResolvers = {
  vpnProfileType: async (_, { id }) => {
    return await prisma.vpnProfileType.findUnique({ where: { id } })
  },
  vpnProfileTypes: async () => {
    return await prisma.vpnProfileType.findMany()
  },
}
