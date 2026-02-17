import { QueryResolvers } from '../../graphql.js'
import { prisma } from '../../lib/prismaClient.js'

export const vpnProfileQuery: QueryResolvers = {
  vpnProfile: async (_, { id }) => {
    return await prisma.vpnProfile.findUnique({ where: { id } })
  },
  vpnProfiles: async () => {
    return await prisma.vpnProfile.findMany()
  },
}
