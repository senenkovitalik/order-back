import { vpnProfileQuery } from './vpnProfile.query.js'
import { vpnProfileMutation } from './vpnProfile.mutation.js'
import { VpnProfileResolvers } from '../../graphql.js'
import { prisma } from '../../lib/prismaClient.js'

const vpnProfileResolver: VpnProfileResolvers = {
  profileType: async (parent) => {
    return await prisma.vpnProfileType.findUnique({ where: { id: parent.profileTypeId } })
  },
}

export const vpnProfileResolvers = {
  Query: vpnProfileQuery,
  Mutation: vpnProfileMutation,
  VpnProfile: vpnProfileResolver,
}
